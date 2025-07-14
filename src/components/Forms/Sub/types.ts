import type { FieldKind } from '../Forms';

export interface FormsFieldConfig {
	kind: FieldKind;
	name: string;
	label?: string;
	helperText?: string;
	error?: string;
	placeholder?: string;
	options?: any[];
	min?: number;
	max?: number;
	step?: number;
	required?: boolean;
	configuration?: Record<string, any>;
	[key: string]: any;
}

export interface FormsProps {
	fields: FormsFieldConfig[];
	values?: Record<string, any>;
	onChange?: (values: Record<string, any>) => void;
	onSubmit?: (values: Record<string, any>) => void;
	error?: string;
	helperText?: string;
	fullWidth?: boolean;
	className?: string;
	children?: React.ReactNode;
}
