import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FileUpload } from '../../components/FileUpload';
import { commonDecorators } from '../config/decorators';
import { Icons } from '../../components/Icons';

const meta: Meta<typeof FileUpload> = {
	title: 'Files/File Upload',
	component: FileUpload,
	decorators: commonDecorators,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive file upload component with support for drag & drop, multiple file types, and various upload scenarios.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'dropzone',
				'image-uploader',
				'avatar-uploader',
				'document-uploader',
				'file-button',
				'multiple-files',
				'drag-drop-zone',
				'gallery-uploader',
				'profile-picture',
				'bulk-uploader',
			],
			description: 'The kind of file upload (required).',
			table: {
				type: { summary: 'FileUploadKind' },
				category: 'Props',
			},
			required: true,
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'minimal',
				'bordered',
				'filled',
				'modern',
				'compact',
				'detailed',
			],
			description:
				'Visual variant of the upload component.',
			table: {
				type: { summary: 'FileUploadVariant' },
				defaultValue: { summary: 'default' },
				category: 'Props',
			},
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Size of the upload component.',
			table: {
				type: { summary: 'FileUploadSize' },
				defaultValue: { summary: 'medium' },
				category: 'Props',
			},
		},
		state: {
			control: 'select',
			options: [
				'idle',
				'uploading',
				'success',
				'error',
				'disabled',
			],
			description: 'Controlled upload state.',
			table: {
				type: { summary: 'FileUploadState' },
				defaultValue: { summary: 'idle' },
				category: 'Props',
			},
		},
		className: {
			control: 'text',
			description:
				'Custom class name(s) for the root element.',
			table: {
				type: { summary: 'string' },
				category: 'Props',
			},
		},
		disabled: {
			control: 'boolean',
			description:
				'If true, disables the upload input and interactions.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Props',
			},
		},
		multiple: {
			control: 'boolean',
			description:
				'If true, allows multiple file selection.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Props',
			},
		},
		showPreview: {
			control: 'boolean',
			description:
				'If true, shows a file preview after selection.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Props',
			},
		},
		accept: {
			control: 'text',
			description:
				'Acceptable file types (e.g., image/*, .pdf).',
			table: {
				type: { summary: 'string' },
				category: 'Props',
			},
		},
		maxFiles: {
			control: 'number',
			description:
				'Maximum number of files allowed per upload.',
			table: {
				type: { summary: 'number' },
				category: 'Props',
			},
		},
		maxSize: {
			control: 'number',
			description: 'Maximum file size in bytes.',
			table: {
				type: { summary: 'number' },
				category: 'Props',
			},
		},
		placeholder: {
			control: 'text',
			description:
				'Placeholder text to display when no files are selected.',
			table: {
				type: { summary: 'string' },
				category: 'Props',
			},
		},
		dragActiveText: {
			control: 'text',
			description: 'Text to display when drag is active.',
			table: {
				type: { summary: 'string' },
				category: 'Props',
			},
		},
		errorText: {
			control: 'text',
			description: 'Text to display on error.',
			table: {
				type: { summary: 'string' },
				category: 'Props',
			},
		},
		successText: {
			control: 'text',
			description: 'Text to display on success.',
			table: {
				type: { summary: 'string' },
				category: 'Props',
			},
		},
		icon: {
			control: false,
			description:
				'Custom icon to display in the upload area.',
			table: {
				type: { summary: 'React.ReactNode' },
				category: 'UI',
			},
		},
		description: {
			control: false,
			description:
				'Custom description to display in the upload area.',
			table: {
				type: { summary: 'React.ReactNode' },
				category: 'UI',
			},
		},
		progressBar: {
			control: false,
			description:
				'Custom progress bar component or element.',
			table: {
				type: { summary: 'React.ReactNode' },
				category: 'UI',
			},
		},
		filePreview: {
			control: false,
			description:
				'Custom file preview component or element.',
			table: {
				type: { summary: 'React.ReactNode' },
				category: 'UI',
			},
		},
		messages: {
			control: false,
			description: 'Custom messages component or element.',
			table: {
				type: { summary: 'React.ReactNode' },
				category: 'UI',
			},
		},
		actions: {
			control: false,
			description:
				'Custom actions (e.g., upload, clear) component or element.',
			table: {
				type: { summary: 'React.ReactNode' },
				category: 'UI',
			},
		},
		onFilesSelected: {
			control: false,
			description:
				'Handler called when files are selected via input.',
			table: {
				type: { summary: '(files: File[]) => void' },
				category: 'Events',
			},
		},
		onFilesDrop: {
			control: false,
			description:
				'Handler called when files are dropped via drag-and-drop.',
			table: {
				type: { summary: '(files: File[]) => void' },
				category: 'Events',
			},
		},
		onUploadProgress: {
			control: false,
			description:
				'Handler called when upload progress changes (0-100).',
			table: {
				type: { summary: '(progress: number) => void' },
				category: 'Events',
			},
		},
		onError: {
			control: false,
			description: 'Handler called when an error occurs.',
			table: {
				type: { summary: '(error: string) => void' },
				category: 'Events',
			},
		},
		onSuccess: {
			control: false,
			description:
				'Handler called when upload is successful.',
			table: {
				type: { summary: '(files: File[]) => void' },
				category: 'Events',
			},
		},
		children: {
			control: false,
			description:
				'Children to override the entire content area (advanced slot).',
			table: {
				type: { summary: 'React.ReactNode' },
				category: 'UI',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const uploadIcon = (
	<Icons name='upload' size={32} color='#3b82f6' />
);
const imageIcon = (
	<Icons name='image' size={32} color='#10b981' />
);
const docIcon = (
	<Icons name='file' size={32} color='#f59e0b' />
);
const avatarIcon = (
	<Icons name='user' size={32} color='#a78bfa' />
);
const successIcon = (
	<Icons name='check-circle' size={32} color='#22c55e' />
);
const errorIcon = (
	<Icons name='alert-circle' size={32} color='#ef4444' />
);

// Demo container for visual polish
const DemoContainer = ({ children }) => (
	<div
		style={{
			maxWidth: 420,
			margin: '32px auto',
			padding: 32,
			background: '#fff',
			borderRadius: 16,
			boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
			border: '1px solid #e5e7eb',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}}
	>
		{children}
	</div>
);

// Stateful wrapper for file selection and clear
function FileUploadDemo(props) {
	const [selectedFiles, setSelectedFiles] = useState([]);
	return (
		<DemoContainer>
			<FileUpload
				{...props}
				selectedFiles={selectedFiles}
				onFilesSelected={(files) => {
					setSelectedFiles(files);
					props.onFilesSelected &&
						props.onFilesSelected(files);
				}}
				onClear={() => setSelectedFiles([])}
			/>
			{selectedFiles.length > 0 && (
				<div
					style={{
						marginTop: 16,
						fontSize: 13,
						color: '#64748b',
					}}
				>
					<strong>Selected:</strong>{' '}
					{selectedFiles.map((f) => f.name).join(', ')}
				</div>
			)}
		</DemoContainer>
	);
}

export const AvatarUploader: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'avatar-uploader',
		variant: 'bordered',
		size: 'small',
		icon: avatarIcon,
		description:
			'Upload your new profile avatar. Only PNG/JPG.',
		showPreview: true,
		className:
			'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300',
		onFilesSelected: (files) =>
			console.log('Avatar selected:', files),
	},
};

export const BulkUploader: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'bulk-uploader',
		variant: 'detailed',
		size: 'large',
		icon: uploadIcon,
		description: 'Bulk upload up to 20 files at once.',
		showPreview: true,
		className: 'bg-blue-50 border-blue-200',
		onFilesSelected: (files) =>
			console.log('Bulk files selected:', files),
	},
};

export const Default: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'dropzone',
		variant: 'default',
		size: 'medium',
		icon: uploadIcon,
		description: 'Drag and drop files or click to select.',
		className: 'bg-white border-gray-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const DocumentUploader: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'document-uploader',
		variant: 'filled',
		size: 'medium',
		icon: docIcon,
		description: 'Upload PDF or DOCX documents.',
		accept: '.pdf,.docx',
		className: 'bg-yellow-50 border-yellow-200',
		onFilesSelected: (files) =>
			console.log('Documents selected:', files),
	},
};

export const ErrorState: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'dropzone',
		variant: 'minimal',
		state: 'error',
		icon: errorIcon,
		errorText: 'Upload failed. Please try again.',
		className: 'bg-red-50 border-red-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const FilledVariant: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'document-uploader',
		variant: 'filled',
		size: 'large',
		icon: docIcon,
		description: 'Filled style for document uploads.',
		className: 'bg-yellow-100 border-yellow-300',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const FileButton: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'file-button',
		variant: 'compact',
		size: 'small',
		icon: uploadIcon,
		description: 'Click to select a file.',
		className: 'bg-gray-50 border-gray-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const LargeSize: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'dropzone',
		variant: 'modern',
		size: 'large',
		icon: uploadIcon,
		description: 'Large modern dropzone.',
		showPreview: true,
		className: 'bg-blue-100 border-blue-300',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const MinimalVariant: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'dropzone',
		variant: 'minimal',
		size: 'medium',
		icon: uploadIcon,
		description: 'Minimal style for quick uploads.',
		className: 'bg-gray-100 border-gray-300',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const ModernVariant: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'image-uploader',
		variant: 'modern',
		size: 'large',
		icon: imageIcon,
		description: 'Modern image uploader with preview.',
		showPreview: true,
		className: 'bg-green-50 border-green-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const MultipleFiles: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'multiple-files',
		variant: 'detailed',
		size: 'medium',
		icon: uploadIcon,
		description: 'Select or drop multiple files.',
		multiple: true,
		showPreview: true,
		className: 'bg-indigo-50 border-indigo-200',
		onFilesSelected: (files) =>
			console.log('Multiple files selected:', files),
	},
};

export const SmallSize: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'file-button',
		variant: 'compact',
		size: 'small',
		icon: uploadIcon,
		description: 'Small file button.',
		className: 'bg-gray-50 border-gray-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const SuccessState: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'dropzone',
		variant: 'default',
		state: 'success',
		icon: successIcon,
		successText: 'Files uploaded successfully!',
		className: 'bg-green-50 border-green-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const UploadingState: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'dropzone',
		variant: 'modern',
		state: 'uploading',
		icon: uploadIcon,
		description: 'Uploading files...',
		progressBar: (
			<div
				style={{
					width: '100%',
					height: 6,
					background: '#3b82f6',
					borderRadius: 3,
				}}
			/>
		),
		className: 'bg-blue-50 border-blue-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const CustomActions: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'dropzone',
		variant: 'detailed',
		size: 'medium',
		icon: uploadIcon,
		description: 'With custom actions.',
		actions: (
			<div style={{ display: 'flex', gap: 8 }}>
				<button
					style={{
						background: '#3b82f6',
						color: '#fff',
						border: 'none',
						borderRadius: 4,
						padding: '4px 12px',
					}}
				>
					Upload
				</button>
				<button
					style={{
						background: '#ef4444',
						color: '#fff',
						border: 'none',
						borderRadius: 4,
						padding: '4px 12px',
					}}
				>
					Clear
				</button>
			</div>
		),
		className: 'bg-gray-50 border-gray-200',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const CustomFilePreview: Story = {
	render: (args) => <FileUploadDemo {...args} />,
	args: {
		kind: 'gallery-uploader',
		variant: 'modern',
		size: 'large',
		icon: imageIcon,
		description: 'Gallery uploader with custom preview.',
		showPreview: true,
		filePreview: (
			<div style={{ display: 'flex', gap: 8 }}>
				<span
					style={{
						background: '#fbbf24',
						color: '#fff',
						borderRadius: 4,
						padding: '2px 8px',
					}}
				>
					Custom Preview
				</span>
			</div>
		),
		className: 'bg-yellow-50 border-yellow-200',
		onFilesSelected: (files) =>
			console.log('Gallery files selected:', files),
	},
};

// Custom configuration example
export const CustomConfiguration: Story = {
	render: () => {
		return (
			<FileUpload
				kind='dropzone'
				variant='modern'
				size='large'
				showPreview={true}
				placeholder='Drop your awesome files here!'
				dragActiveText='Release to upload!'
				successText='Boom! Files uploaded like a boss!'
				errorText='Oops! Something went wrong.'
				maxFiles={5}
				maxSize={10 * 1024 * 1024} // 10MB
				onFilesSelected={(files: File[]) =>
					console.log('Custom config files:', files)
				}
				onFilesDrop={(files: File[]) =>
					console.log('Files dropped:', files)
				}
				onUploadProgress={(progress: number) =>
					console.log('Upload progress:', progress)
				}
			/>
		);
	},
};

export const AppendAndRemoveFiles: Story = {
	render: () => {
		const [files, setFiles] = React.useState<File[]>([]);
		return (
			<FileUpload
				kind='dropzone'
				variant='modern'
				size='large'
				showPreview={true}
				multiple={true}
				appendOnUpload={true}
				maxFiles={5}
				maxSize={10 * 1024 * 1024}
				placeholder='Drop or select files (append mode)'
				dragActiveText='Release to upload!'
				successText='Files uploaded!'
				errorText='Upload failed.'
				onFilesSelected={setFiles}
				onRemoveFile={(file, idx) => {
					setFiles((prev) =>
						prev.filter((_, i) => i !== idx)
					);
					console.log('Removed file:', file.name);
				}}
				filePreview={
					<div style={{ display: 'flex', gap: 12 }}>
						{files.map((file, idx) => (
							<div
								key={file.name + idx}
								style={{
									position: 'relative',
									minWidth: 80,
								}}
							>
								{file.type.startsWith('image/') ?
									<img
										src={URL.createObjectURL(file)}
										alt={file.name}
										style={{
											width: 64,
											height: 64,
											objectFit: 'cover',
											borderRadius: 8,
										}}
									/>
								:	<Icons name='file' size={32} />}
								<div
									style={{
										fontSize: 12,
										marginTop: 4,
										textAlign: 'center',
										wordBreak: 'break-all',
									}}
								>
									{file.name}
								</div>
								<button
									style={{
										position: 'absolute',
										top: 0,
										right: 0,
										background: 'none',
										border: 'none',
										cursor: 'pointer',
									}}
									aria-label={`Remove ${file.name}`}
									onClick={() => {
										setFiles((prev) =>
											prev.filter((_, i) => i !== idx)
										);
										console.log('Removed file:', file.name);
									}}
								>
									<Icons name='close' size={16} />
								</button>
							</div>
						))}
					</div>
				}
			/>
		);
	},
};

// Add a new story that simulates async upload with visible progress and success state
export const SimulatedAsyncUpload: Story = {
	render: (args) => {
		const [progress, setProgress] = React.useState(0);
		const [success, setSuccess] = React.useState(false);
		const [uploading, setUploading] = React.useState(false);

		const handleFilesSelected = (selected: File[]) => {
			setUploading(true);
			setSuccess(false);
			setProgress(0);
			let pct = 0;
			const interval = setInterval(() => {
				pct += 10;
				setProgress(pct);
				if (pct >= 100) {
					clearInterval(interval);
					setUploading(false);
					setSuccess(true);
				}
			}, 200);
		};

		return (
			<DemoContainer>
				<FileUpload
					{...args}
					onFilesSelected={handleFilesSelected}
					progressBar={
						uploading ?
							<div style={{ width: '100%', marginTop: 8 }}>
								<div
									style={{
										height: 6,
										background: '#eee',
										borderRadius: 4,
									}}
								>
									<div
										style={{
											width: `${progress}%`,
											height: 6,
											background:
												uploading ? '#3b82f6' : '#22c55e',
											borderRadius: 4,
											transition: 'width 0.2s',
										}}
									/>
								</div>
								{progress < 100 && (
									<div
										style={{
											fontSize: 12,
											color: '#64748b',
											marginTop: 2,
										}}
									>
										Uploading... {progress}%
									</div>
								)}
								{progress === 100 && success && (
									<div
										style={{
											fontSize: 12,
											color: '#22c55e',
											marginTop: 2,
										}}
									>
										Upload complete!
									</div>
								)}
							</div>
						:	null
					}
				/>
			</DemoContainer>
		);
	},
	args: {
		kind: 'dropzone',
		variant: 'modern',
		size: 'large',
		icon: uploadIcon,
		description:
			'Simulated async upload with progress bar and success state.',
		showPreview: true,
		className: 'bg-blue-50 border-blue-200',
	},
};
