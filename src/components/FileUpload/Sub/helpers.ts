// FileUpload inline helpers

/**
 * Returns a formatted file size string (e.g., '2.3 MB', '512 KB').
 */
export function formatFileSize(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024)
		return `${(bytes / 1024).toFixed(1)} KB`;
	if (bytes < 1024 * 1024 * 1024)
		return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
	return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

/**
 * Returns the file extension (e.g., 'jpg', 'pdf') from a File or filename.
 */
export function getFileExtension(
	file: File | string
): string {
	const name = typeof file === 'string' ? file : file.name;
	const parts = name.split('.');
	return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
}

/**
 * Returns a user-friendly file type label (e.g., 'Image', 'PDF', 'Document').
 */
export function getFileTypeLabel(
	file: File | string
): string {
	const ext = getFileExtension(file);
	if (!ext) return 'File';
	if (
		['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(
			ext
		)
	)
		return 'Image';
	if (['pdf'].includes(ext)) return 'PDF';
	if (['doc', 'docx'].includes(ext)) return 'Word Document';
	if (['xls', 'xlsx'].includes(ext))
		return 'Excel Spreadsheet';
	if (['ppt', 'pptx'].includes(ext))
		return 'PowerPoint Presentation';
	if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext))
		return 'Archive';
	if (['mp3', 'wav', 'ogg'].includes(ext)) return 'Audio';
	if (['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(ext))
		return 'Video';
	return ext.toUpperCase();
}
