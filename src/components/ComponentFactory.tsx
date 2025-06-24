import React, { forwardRef } from 'react';
import { Wrapper } from './Wrappers';
import { Button } from './Button';
import { ExtendedButtonKind } from './Button/configurations';
import FormsFactory from './Forms/factory';
import { ExtendedFormsKind } from './Forms/configurations';

// Component types supported by the factory
export type ComponentType =
	| 'button'
	| 'form-field'
	| 'modal'
	| 'layout';

// Component kind unions
export type ComponentKind =
	| ExtendedButtonKind
	| ExtendedFormsKind
	| 'modal'
	| 'layout-container'
	| 'layout-grid'
	| 'layout-flex'
	| 'custom';

// Component configuration interface
export interface ComponentConfiguration {
	type: ComponentType;
	component?: string;
	variant?: string;
	size?: 'small' | 'medium' | 'large';
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'warning';
	className?: string;
	behavior?: string;
	[key: string]: any;
}

// Master component configurations
export const COMPONENT_CONFIGURATIONS: Record<
	string,
	ComponentConfiguration
> = {
	// Button configurations (delegated to button factory)
	'btn-primary': { type: 'button', component: 'primary' },
	'btn-secondary': {
		type: 'button',
		component: 'secondary',
	},
	'btn-danger': { type: 'button', component: 'danger' },
	'btn-success': { type: 'button', component: 'success' },
	'btn-warning': { type: 'button', component: 'warning' },
	'btn-ghost': { type: 'button', component: 'ghost' },

	// Form field configurations (delegated to form factory)
	'field-text': { type: 'form-field', component: 'text' },
	'field-email': { type: 'form-field', component: 'email' },
	'field-password': {
		type: 'form-field',
		component: 'password',
	},
	'field-textarea': {
		type: 'form-field',
		component: 'textarea',
	},
	'field-select': {
		type: 'form-field',
		component: 'select',
	},
	'field-checkbox': {
		type: 'form-field',
		component: 'checkbox',
	},
	'field-radio': { type: 'form-field', component: 'radio' },
	'field-switch': {
		type: 'form-field',
		component: 'switch',
	},
	'field-range': { type: 'form-field', component: 'range' },

	// Layout configurations
	'layout-container': {
		type: 'layout',
		component: 'container',
		className: 'container',
	},
	'layout-grid': {
		type: 'layout',
		component: 'grid',
		className: 'grid',
	},
	'layout-flex': {
		type: 'layout',
		component: 'flex',
		className: 'flex',
	},

	// Modal configurations
	'modal-basic': { type: 'modal', component: 'basic' },
	'modal-confirm': { type: 'modal', component: 'confirm' },
	'modal-alert': { type: 'modal', component: 'alert' },
};

// Component factory props
export interface ComponentFactoryProps {
	kind: ComponentKind;
	children?: React.ReactNode;
	[key: string]: any; // Allow any props to be passed through
}

export const ComponentFactory = forwardRef<
	any,
	ComponentFactoryProps
>(({ kind, children, ...props }, ref) => {
	const config = COMPONENT_CONFIGURATIONS[kind as string];

	if (!config) {
		console.warn(
			`ComponentFactory: Unknown component kind "${kind}"`
		);
		return (
			<Wrapper ref={ref} {...props}>
				{children}
			</Wrapper>
		);
	}

	// Delegate to specialized factories based on type
	switch (config.type) {
		case 'button': {
			return (
				<Button
					ref={ref}
					kind={config.component as ExtendedButtonKind}
					{...props}
				>
					{children}
				</Button>
			);
		}

		case 'form-field': {
			return (
				<FormsFactory
					ref={ref}
					kind={config.component as ExtendedFormsKind}
					{...props}
				/>
			);
		}

		case 'layout': {
			const Tag =
				config.component === 'container' ? 'div'
				: config.component === 'grid' ? 'div'
				: config.component === 'flex' ? 'div'
				: 'div';

			return (
				<Tag
					ref={ref}
					className={`${config.className || ''} ${props.className || ''}`.trim()}
					{...props}
				>
					{children}
				</Tag>
			);
		}

		case 'modal': {
			return (
				<Wrapper
					ref={ref}
					className={`modal ${config.className || ''} ${props.className || ''}`.trim()}
					{...props}
				>
					{children}
				</Wrapper>
			);
		}

		default: {
			return (
				<Wrapper ref={ref} {...props}>
					{children}
				</Wrapper>
			);
		}
	}
});

ComponentFactory.displayName = 'ComponentFactory';

// Component presets for common UI patterns
export const ComponentPresets = {
	// Common button groups
	modalButtons: (
		onConfirm: () => void,
		onCancel: () => void
	) => [
		<ComponentFactory
			key='cancel'
			kind='btn-secondary'
			onClick={onCancel}
		>
			Cancel
		</ComponentFactory>,
		<ComponentFactory
			key='confirm'
			kind='btn-primary'
			onClick={onConfirm}
		>
			Confirm
		</ComponentFactory>,
	],

	formActions: (
		onSubmit: () => void,
		onReset?: () => void
	) =>
		[
			onReset && (
				<ComponentFactory
					key='reset'
					kind='btn-secondary'
					onClick={onReset}
				>
					Reset
				</ComponentFactory>
			),
			<ComponentFactory
				key='submit'
				kind='btn-primary'
				onClick={onSubmit}
			>
				Submit
			</ComponentFactory>,
		].filter(Boolean),

	// Common form layouts
	loginForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => (
		<ComponentFactory
			kind='layout-flex'
			style={{ flexDirection: 'column', gap: '1rem' }}
		>
			<ComponentFactory
				kind='field-email'
				value={values.email}
				onChange={(v: any) => onChange('email', v)}
				error={errors.email}
			/>
			<ComponentFactory
				kind='field-password'
				value={values.password}
				onChange={(v: any) => onChange('password', v)}
				error={errors.password}
			/>
		</ComponentFactory>
	),

	contactForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => (
		<ComponentFactory
			kind='layout-flex'
			style={{ flexDirection: 'column', gap: '1rem' }}
		>
			<ComponentFactory
				kind='field-text'
				label='Name'
				value={values.name}
				onChange={(v: any) => onChange('name', v)}
				error={errors.name}
			/>
			<ComponentFactory
				kind='field-email'
				value={values.email}
				onChange={(v: any) => onChange('email', v)}
				error={errors.email}
			/>
			<ComponentFactory
				kind='field-textarea'
				label='Message'
				value={values.message}
				onChange={(v: any) => onChange('message', v)}
				error={errors.message}
			/>
		</ComponentFactory>
	),

	// Common layout patterns
	cardLayout: (children: React.ReactNode) => (
		<ComponentFactory
			kind='layout-container'
			style={{
				padding: '1.5rem',
				borderRadius: '0.5rem',
				boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
				background: '#fff',
			}}
		>
			{children}
		</ComponentFactory>
	),

	gridLayout: (children: React.ReactNode, columns = 3) => (
		<ComponentFactory
			kind='layout-grid'
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: '1rem',
			}}
		>
			{children}
		</ComponentFactory>
	),
};

// Quick component builders for common patterns
export const QuickComponents = {
	// Quick buttons
	primaryBtn: (text: string, onClick: () => void) => (
		<ComponentFactory kind='btn-primary' onClick={onClick}>
			{text}
		</ComponentFactory>
	),
	secondaryBtn: (text: string, onClick: () => void) => (
		<ComponentFactory
			kind='btn-secondary'
			onClick={onClick}
		>
			{text}
		</ComponentFactory>
	),
	dangerBtn: (text: string, onClick: () => void) => (
		<ComponentFactory kind='btn-danger' onClick={onClick}>
			{text}
		</ComponentFactory>
	),

	// Quick form fields
	textField: (
		label: string,
		value: any,
		onChange: any,
		error?: string
	) => (
		<ComponentFactory
			kind='field-text'
			label={label}
			value={value}
			onChange={onChange}
			error={error}
		/>
	),
	emailField: (
		value: any,
		onChange: any,
		error?: string
	) => (
		<ComponentFactory
			kind='field-email'
			value={value}
			onChange={onChange}
			error={error}
		/>
	),
	passwordField: (
		value: any,
		onChange: any,
		error?: string
	) => (
		<ComponentFactory
			kind='field-password'
			value={value}
			onChange={onChange}
			error={error}
		/>
	),

	// Quick layouts
	flexColumn: (children: React.ReactNode, gap = '1rem') => (
		<ComponentFactory
			kind='layout-flex'
			style={{ flexDirection: 'column', gap }}
		>
			{children}
		</ComponentFactory>
	),
	flexRow: (children: React.ReactNode, gap = '1rem') => (
		<ComponentFactory
			kind='layout-flex'
			style={{ flexDirection: 'row', gap }}
		>
			{children}
		</ComponentFactory>
	),
	grid: (children: React.ReactNode, columns = 3) => (
		<ComponentFactory
			kind='layout-grid'
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: '1rem',
			}}
		>
			{children}
		</ComponentFactory>
	),
};

export default ComponentFactory;
