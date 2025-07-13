// Helpers for FileUpload config/props merging
export function getFinalAccept(
	accept: string | undefined,
	config: any
) {
	return (
		accept ||
		config.validation?.allowedTypes?.join(',') ||
		config.accept
	);
}
export function getFinalMultiple(
	multiple: boolean | undefined,
	config: any
) {
	return multiple !== undefined ? multiple : (
			config.multiple
		);
}
export function getFinalMaxFiles(
	maxFiles: number | undefined,
	config: any
) {
	return maxFiles || config.validation?.maxFiles;
}
export function getFinalMaxSize(
	maxSize: number | undefined,
	config: any
) {
	return maxSize || config.validation?.maxSize;
}
