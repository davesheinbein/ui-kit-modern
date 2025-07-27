/**
 * MapStateManager.tsx
 * State management hook for map components.
 * Adds undo/redo, persistent state, and exposes state/history and event hooks.
 *
 * @param props MapProps for the map instance.
 * @returns Map state, config, undo/redo, and event hooks.
 */
import {
	useEffect,
	useId,
	useRef,
	useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setMapState,
	cleanupComponent,
	selectMapState,
} from '../../../store/slices/uiSlice';
import type { RootState } from '../../../store';
import { getMapConfig } from '../configurations';
import type { MapProps } from './types';

export function useMapState(props: MapProps) {
	const { kind, componentId, zoom, center } = props;
	const config = getMapConfig(kind);
	const uniqueId = useId();
	const mapComponentId = componentId || `map-${uniqueId}`;
	const dispatch = useDispatch();

	// Persistent state (localStorage)
	const storageKey = `mapState-${mapComponentId}`;
	const historyRef = useRef<any[]>([]);
	const redoStackRef = useRef<any[]>([]);

	// Load from localStorage on mount
	useEffect(() => {
		const saved = localStorage.getItem(storageKey);
		if (saved) {
			try {
				const parsed = JSON.parse(saved);
				dispatch(
					setMapState({
						mapId: mapComponentId,
						updates: parsed,
					})
				);
			} catch {}
		}
	}, [dispatch, mapComponentId, storageKey]);

	// Save to localStorage on state change
	const mapState = useSelector(
		selectMapState(mapComponentId)
	);
	useEffect(() => {
		if (mapState) {
			localStorage.setItem(
				storageKey,
				JSON.stringify(mapState)
			);
			historyRef.current.push(mapState);
		}
	}, [mapState, storageKey]);

	// Undo/redo logic
	const undo = useCallback(() => {
		if (historyRef.current.length > 1) {
			const prev = historyRef.current.splice(-2, 1)[0];
			redoStackRef.current.push(historyRef.current.pop());
			dispatch(
				setMapState({
					mapId: mapComponentId,
					updates: prev,
				})
			);
		}
	}, [dispatch, mapComponentId]);

	const redo = useCallback(() => {
		if (redoStackRef.current.length > 0) {
			const next = redoStackRef.current.pop();
			if (next) {
				historyRef.current.push(next);
				dispatch(
					setMapState({
						mapId: mapComponentId,
						updates: next,
					})
				);
			}
		}
	}, [dispatch, mapComponentId]);

	useEffect(() => {
		return () => {
			dispatch(cleanupComponent(mapComponentId));
		};
	}, [dispatch, mapComponentId]);

	const currentZoom =
		mapState?.currentZoom ?? zoom ?? config.zoom ?? 1;
	const currentCenter = mapState?.currentCenter ??
		center ??
		config.center ?? { lat: 0, lng: 0 };

	return {
		mapComponentId,
		config,
		currentZoom,
		currentCenter,
		mapState,
		undo,
		redo,
		history: historyRef.current,
		redoStack: redoStackRef.current,
	};
}
