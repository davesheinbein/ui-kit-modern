import type {
	FileUploadKind,
	FileUploadVariant,
	FileUploadSize,
	FileUploadState,
} from '../configurations';

/**
 * FileUploadProps
 * All configuration, event handlers, and UI for the FileUpload component must be exposed via props.
 * No internal logic, hardcoded values, or context-specific assumptions allowed.
 */
export interface FileUploadProps {
	/**
	 * The kind of file upload (e.g., 'dropzone', 'image-uploader', etc.)
	 * @required
	 */
	kind: FileUploadKind;

	/**
	 * Visual variant of the upload component (e.g., 'default', 'minimal', etc.)
	 * @default 'default'
	 */
	variant?: FileUploadVariant;

	/**
	 * Size of the upload component ('small', 'medium', 'large')
	 * @default 'medium'
	 */
	size?: FileUploadSize;

	/**
	 * Controlled upload state ('idle', 'uploading', 'success', 'error', 'disabled')
	 * If not provided, the component is uncontrolled.
	 * @default 'idle'
	 */
	state?: FileUploadState;

	/**
	 * Custom class name(s) for the root element.
	 */
	className?: string;

	/**
	 * If true, disables the upload input and interactions.
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * If true, allows multiple file selection.
	 * @default false
	 */
	multiple?: boolean;

	/**
	 * Acceptable file types (e.g., 'image/*', '.pdf').
	 * @default undefined (all types allowed)
	 */
	accept?: string;

	/**
	 * Maximum number of files allowed per upload.
	 * @default undefined (no limit)
	 */
	maxFiles?: number;

	/**
	 * Maximum file size in bytes.
	 * @default undefined (no limit)
	 */
	maxSize?: number;

	/**
	 * Placeholder text to display when no files are selected.
	 */
	placeholder?: string;

	/**
	 * Text to display when drag is active.
	 */
	dragActiveText?: string;

	/**
	 * Text to display on error.
	 */
	errorText?: string;

	/**
	 * Text to display on success.
	 */
	successText?: string;

	/**
	 * If true, shows a file preview after selection.
	 * @default false
	 */
	showPreview?: boolean;

	/**
	 * Custom icon to display in the upload area.
	 */
	icon?: React.ReactNode;

	/**
	 * Custom description to display in the upload area.
	 */
	description?: React.ReactNode;

	/**
	 * Custom progress bar component or element.
	 */
	progressBar?: React.ReactNode;

	/**
	 * Custom file preview component or element.
	 */
	filePreview?: React.ReactNode;

	/**
	 * Custom messages component or element.
	 */
	messages?: React.ReactNode;

	/**
	 * Custom actions (e.g., upload, clear) component or element.
	 */
	actions?: React.ReactNode;

	/**
	 * Handler called when files are selected via input.
	 */
	onFilesSelected?: (files: File[]) => void;

	/**
	 * Handler called when files are dropped via drag-and-drop.
	 */
	onFilesDrop?: (files: File[]) => void;

	/**
	 * Handler called when upload progress changes (0-100).
	 */
	onUploadProgress?: (progress: number) => void;

	/**
	 * Handler called when an error occurs.
	 */
	onError?: (error: string) => void;

	/**
	 * Handler called when upload is successful.
	 */
	onSuccess?: (files: File[]) => void;

	/**
	 * If true, new files are appended to the list (when multiple is enabled). If false, new files replace the list.
	 * @default false
	 */
	appendOnUpload?: boolean;

	/**
	 * Handler called when a file is removed from the list.
	 */
	onRemoveFile?: (file: File, index: number) => void;

	/**
	 * Children to override the entire content area (advanced slot).
	 */
	children?: React.ReactNode;

	/**
	 * Optional inline style for the root element (for theming/customization).
	 */
	style?: React.CSSProperties;
}
