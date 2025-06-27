# FileUpload Component Group

Components for uploading files, images, and documents. Supports drag-and-drop, multiple file types, previews, and progress indicators for a modern upload experience.

## Folder Structure & File Responsibilities

- `FileUpload.tsx`: Main FileUpload component. Handles file selection, drag-and-drop, and upload logic.
- `FileUpload.module.scss`: SCSS module for styling upload zones, previews, and progress bars.
- `configurations.ts`: Type definitions and configuration options for upload kinds, variants, and states.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { FileUpload } from 'src/components/FileUpload';
```

**NPM Package:**

```tsx
import { FileUpload } from 'ui-kit-modern';
```

## Supported Props

| Prop          | Type     | Description                                    | Default    |
| ------------- | -------- | ---------------------------------------------- | ---------- |
| `kind`        | string   | Upload type (dropzone, image-uploader, etc.)   | 'dropzone' |
| `variant`     | string   | Style variant (default, minimal, etc.)         | 'default'  |
| `size`        | string   | Upload area size (small, medium, large)        | 'medium'   |
| `state`       | string   | Upload state (idle, uploading, success, error) | 'idle'     |
| `disabled`    | boolean  | Disable the upload area                        | false      |
| `multiple`    | boolean  | Allow multiple file selection                  | false      |
| `showPreview` | boolean  | Show file/image preview                        | false      |
| `onChange`    | function | Callback when files are selected               | —          |
| `onUpload`    | function | Callback when upload is triggered              | —          |
| `className`   | string   | Additional CSS classes                         | —          |

## Configuration

- Use `configurations.ts` to define upload kinds, variants, and states.
- Customize visuals in `FileUpload.module.scss` for branding.

## Best Practices

- Use drag-and-drop for better UX.
- Show progress and feedback for uploads.
- Validate file types and sizes before upload.

---
