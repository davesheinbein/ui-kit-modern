import { useCallback } from 'react';
import { validateFiles } from './utils';
import {
	setComponentDragActive,
	setComponentUploadProgress,
	setComponentValidationErrors,
	setComponentSelectedFiles,
} from './redux';

export function useFileUploadHandlers(
	dispatch: any,
	componentId: string | undefined,
	props: any
) {
	const onDragEnter = useCallback(() => {
		dispatch(
			setComponentDragActive({
				componentId,
				dragActive: true,
			})
		);
	}, [dispatch, componentId]);

	const onDragLeave = useCallback(() => {
		dispatch(
			setComponentDragActive({
				componentId,
				dragActive: false,
			})
		);
	}, [dispatch, componentId]);

	const onDrop = useCallback(
		(files: FileList) => {
			const { validFiles, errors } = validateFiles(
				files,
				props
			);
			dispatch(
				setComponentSelectedFiles({
					componentId,
					files: validFiles,
				})
			);
			dispatch(
				setComponentValidationErrors({
					componentId,
					errors,
				})
			);
			if (props.onFilesDrop) props.onFilesDrop(validFiles);
		},
		[dispatch, componentId, props]
	);

	const onUploadProgress = useCallback(
		(progress: number) => {
			dispatch(
				setComponentUploadProgress({
					componentId,
					progress,
				})
			);
			if (props.onUploadProgress)
				props.onUploadProgress(progress);
		},
		[dispatch, componentId, props]
	);

	return {
		onDragEnter,
		onDragLeave,
		onDrop,
		onUploadProgress,
	};
}
