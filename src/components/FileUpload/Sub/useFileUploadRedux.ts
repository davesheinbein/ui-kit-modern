// Hook for FileUpload Redux state management

/**
 * useFileUploadRedux
 * Exposes Redux state/dispatchers for FileUpload, but only if passed in via props.
 * No direct Redux hook usage; all selectors/dispatchers must be provided as props.
 */
export function useFileUploadRedux({
	componentId,
	useAppDispatch,
	useAppSelector,
	selectComponentState,
	selectComponentDragActive,
}: {
	componentId?: string;
	useAppDispatch?: () => any;
	useAppSelector?: (selector: (state: any) => any) => any;
	selectComponentState?: (
		id: string
	) => (state: any) => any;
	selectComponentDragActive?: (
		id: string
	) => (state: any) => any;
}) {
	const dispatch =
		useAppDispatch ? useAppDispatch() : undefined;
	const reduxState =
		componentId && useAppSelector && selectComponentState ?
			useAppSelector(selectComponentState(componentId))
		:	undefined;
	const dragActive =
		(
			componentId &&
			useAppSelector &&
			selectComponentDragActive
		) ?
			useAppSelector(selectComponentDragActive(componentId))
		:	undefined;
	return {
		dispatch,
		reduxState,
		dragActive,
	};
}
