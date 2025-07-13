import React from 'react';
import { FileUpload } from '../../src/components/FileUpload';
import type { FileUploadProps } from '../../src/components/FileUpload';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
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
      options: ['idle', 'uploading', 'success', 'error', 'disabled'],
    },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    showPreview: { control: 'boolean' },
    placeholder: { control: 'text' },
    dragActiveText: { control: 'text' },
    errorText: { control: 'text' },
    successText: { control: 'text' },
    accept: { control: 'text' },
    maxFiles: { control: 'number' },
    maxSize: { control: 'number' },
  },
};

const Template = (args: FileUploadProps) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  kind: 'dropzone',
  variant: 'default',
  size: 'medium',
  state: 'idle',
  disabled: false,
  multiple: false,
  showPreview: false,
  placeholder: 'Choose files or drag and drop',
};

export const ImageUploader = Template.bind({});
ImageUploader.args = {
  kind: 'image-uploader',
  variant: 'filled',
  size: 'large',
  showPreview: true,
  placeholder: 'Upload images',
  accept: 'image/*',
  maxFiles: 5,
  maxSize: 5 * 1024 * 1024, // 5MB
};

export const AvatarUploader = Template.bind({});
AvatarUploader.args = {
  kind: 'avatar-uploader',
  variant: 'compact',
  size: 'small',
  showPreview: true,
  placeholder: 'Upload avatar',
  accept: 'image/png, image/jpeg',
  maxFiles: 1,
  maxSize: 2 * 1024 * 1024, // 2MB
};

export const DocumentUploader = Template.bind({});
DocumentUploader.args = {
  kind: 'document-uploader',
  variant: 'bordered',
  size: 'medium',
  showPreview: true,
  placeholder: 'Upload documents',
  accept: '.pdf,.doc,.docx',
  multiple: true,
  maxFiles: 10,
  maxSize: 10 * 1024 * 1024, // 10MB
};

export const FileButton = Template.bind({});
FileButton.args = {
  kind: 'file-button',
  variant: 'modern',
  size: 'medium',
  showPreview: false,
  placeholder: 'Select a file',
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  kind: 'multiple-files',
  variant: 'detailed',
  size: 'large',
  showPreview: true,
  multiple: true,
  placeholder: 'Upload multiple files',
};

export const DragDropZone = Template.bind({});
DragDropZone.args = {
  kind: 'drag-drop-zone',
  variant: 'filled',
  size: 'large',
  showPreview: true,
  placeholder: 'Drag and drop files here',
};

export const GalleryUploader = Template.bind({});
GalleryUploader.args = {
  kind: 'gallery-uploader',
  variant: 'modern',
  size: 'large',
  showPreview: true,
  placeholder: 'Upload gallery images',
  accept: 'image/*',
  multiple: true,
};

export const ProfilePicture = Template.bind({});
ProfilePicture.args = {
  kind: 'profile-picture',
  variant: 'minimal',
  size: 'small',
  showPreview: true,
  placeholder: 'Upload profile picture',
  accept: 'image/*',
  maxFiles: 1,
};

export const BulkUploader = Template.bind({});
BulkUploader.args = {
  kind: 'bulk-uploader',
  variant: 'detailed',
  size: 'large',
  showPreview: true,
  multiple: true,
  placeholder: 'Bulk upload files',
  maxFiles: 50,
  maxSize: 50 * 1024 * 1024, // 50MB
};

export const Disabled = Template.bind({});
Disabled.args = {
  kind: 'dropzone',
  variant: 'default',
  size: 'medium',
  state: 'disabled',
  disabled: true,
  placeholder: 'File upload is disabled',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  kind: 'dropzone',
  variant: 'default',
  size: 'medium',
  state: 'error',
  errorText: 'Something went wrong!',
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  kind: 'dropzone',
  variant: 'default',
  size: 'medium',
  state: 'success',
  successText: 'Upload complete!',
};

export const UploadingState = Template.bind({});
UploadingState.args = {
  kind: 'dropzone',
  variant: 'default',
  size: 'medium',
  state: 'uploading',
  placeholder: 'Uploading files...',
};
