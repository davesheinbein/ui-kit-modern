import styles from '../file-upload.module.scss';

// FileUpload class name helpers
export function getFileUploadClassNames({
	variant,
	size,
	state,
	className = '',
	fullHeight = false,
}: {
	variant?: string;
	size?: string;
	state?: string;
	className?: string;
	fullHeight?: boolean;
}) {
	const classes = [
		styles.fileUploadWrapper,
		variant && styles[`variant-${variant}`],
		size && styles[`size-${size}`],
		state && styles[`state-${state}`],
		fullHeight && styles.fullHeight,
		className,
	];
	return classes.filter(Boolean).join(' ');
}
