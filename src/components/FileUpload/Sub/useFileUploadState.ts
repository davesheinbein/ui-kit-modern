import { useEffect } from 'react';
import {
	useAppDispatch,
	useAppSelector,
	initializeComponentState,
	clearComponentState,
	removeComponentState,
	selectComponentState,
	selectComponentDragActive,
	selectComponentUploadProgress,
	selectComponentValidationErrors,
	selectComponentSelectedFiles,
} from './redux';
import type { FileUploadProps } from './types';
import type { RootState } from '../../../store';

export function useFileUploadState(
	componentId: string | undefined,
	props: FileUploadProps
) {
	const dispatch = useAppDispatch();

	const reduxState = useAppSelector((state: RootState) =>
		componentId ?
			selectComponentState(componentId)(state)
		:	'idle'
	);
	const dragActive = useAppSelector((state: RootState) =>
		componentId ?
			selectComponentDragActive(componentId)(state)
		:	false
	);
	const uploadProgress = useAppSelector(
		(state: RootState) =>
			componentId ?
				selectComponentUploadProgress(componentId)(state)
			:	0
	);
	const validationErrors = useAppSelector(
		(state: RootState) =>
			componentId ?
				selectComponentValidationErrors(componentId)(state)
			:	[]
	);
	const selectedFiles = useAppSelector(
		(state: RootState) =>
			componentId ?
				selectComponentSelectedFiles(componentId)(state)
			:	[]
	);

	useEffect(() => {
		if (componentId) {
			dispatch(initializeComponentState(componentId));
			return () => {
				dispatch(clearComponentState(componentId));
				dispatch(removeComponentState(componentId));
			};
		}
	}, [componentId, dispatch]);

	return {
		state: reduxState,
		dragActive,
		uploadProgress,
		validationErrors,
		selectedFiles,
	};
}
