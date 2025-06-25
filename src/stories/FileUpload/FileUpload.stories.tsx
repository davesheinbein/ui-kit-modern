import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../../components/FileUpload';

const meta: Meta<typeof FileUpload> = {
	title: 'Files/File Upload',
	component: FileUpload,
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
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
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
		},
		disabled: {
			control: 'boolean',
		},
		multiple: {
			control: 'boolean',
		},
		showPreview: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		kind: 'dropzone',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const ImageUploader: Story = {
	args: {
		kind: 'image-uploader',
		showPreview: true,
		onFilesSelected: (files) =>
			console.log('Images selected:', files),
	},
};

export const AvatarUploader: Story = {
	args: {
		kind: 'avatar-uploader',
		showPreview: true,
		onFilesSelected: (files) =>
			console.log('Avatar selected:', files),
	},
};

export const DocumentUploader: Story = {
	args: {
		kind: 'document-uploader',
		onFilesSelected: (files) =>
			console.log('Documents selected:', files),
	},
};

export const FileButton: Story = {
	args: {
		kind: 'file-button',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const MultipleFiles: Story = {
	args: {
		kind: 'multiple-files',
		showPreview: true,
		onFilesSelected: (files) =>
			console.log('Multiple files selected:', files),
	},
};

export const BulkUploader: Story = {
	args: {
		kind: 'bulk-uploader',
		showPreview: true,
		onFilesSelected: (files) =>
			console.log('Bulk files selected:', files),
	},
};

// States examples
export const UploadingState: Story = {
	args: {
		kind: 'dropzone',
		state: 'uploading',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const SuccessState: Story = {
	args: {
		kind: 'dropzone',
		state: 'success',
		successText: 'Files uploaded successfully!',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const ErrorState: Story = {
	args: {
		kind: 'dropzone',
		state: 'error',
		errorText: 'Upload failed. Please try again.',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const DisabledState: Story = {
	args: {
		kind: 'dropzone',
		disabled: true,
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

// Variants examples
export const MinimalVariant: Story = {
	args: {
		kind: 'dropzone',
		variant: 'minimal',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const ModernVariant: Story = {
	args: {
		kind: 'image-uploader',
		variant: 'modern',
		showPreview: true,
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const FilledVariant: Story = {
	args: {
		kind: 'document-uploader',
		variant: 'filled',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

// Sizes examples
export const SmallSize: Story = {
	args: {
		kind: 'file-button',
		size: 'small',
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
	},
};

export const LargeSize: Story = {
	args: {
		kind: 'dropzone',
		size: 'large',
		showPreview: true,
		onFilesSelected: (files) =>
			console.log('Files selected:', files),
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
				onFilesSelected={(files) =>
					console.log('Custom config files:', files)
				}
				onFilesDrop={(files) =>
					console.log('Files dropped:', files)
				}
				onUploadProgress={(progress) =>
					console.log('Upload progress:', progress)
				}
				onUploadComplete={(files) =>
					console.log('Upload complete:', files)
				}
				onUploadError={(error) =>
					console.log('Upload error:', error)
				}
			/>
		);
	},
};
