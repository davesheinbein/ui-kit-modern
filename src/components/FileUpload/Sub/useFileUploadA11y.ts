// Hook for FileUpload accessibility/focus logic

/**
 * useFileUploadA11y
 * Exposes ARIA attributes, focus, and keyboard helpers for FileUpload.
 * All config must be provided via props. No internal state or context.
 */
export function useFileUploadA11y({
	label,
	error,
	success,
	disabled = false,
	inputId,
}: {
	label?: string;
	error?: string;
	success?: string;
	disabled?: boolean;
	inputId?: string;
}) {
	const ariaProps = {
		'aria-label': label,
		'aria-invalid': !!error,
		'aria-describedby':
			error ? `${inputId}-error`
			: success ? `${inputId}-success`
			: undefined,
		'aria-disabled': disabled,
		'id': inputId,
	};

	const getAriaDescribedBy = () =>
		ariaProps['aria-describedby'];

	return {
		ariaProps,
		getAriaDescribedBy,
	};
}
