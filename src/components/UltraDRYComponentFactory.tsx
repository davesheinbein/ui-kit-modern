import React, { forwardRef } from 'react';
import UnifiedButton from './Button/UnifiedButton';
import { ExtendedButtonKind } from './Button/ButtonConfigurations';
import FormFieldFactory from './FormField/FormFieldFactoryDRY';
import { ExtendedFormFieldKind } from './FormField/FormFieldConfigurations';

// Component types supported by the DRY factory
export type ComponentType =
	| 'button'
	| 'form-field'
	| 'modal'
	| 'layout';

// Component kind unions
export type ComponentKind =
	| ExtendedButtonKind
	| ExtendedFormFieldKind
	| 'modal'
	| 'layout-container'
	| 'layout-grid'
	| 'layout-flex'
	| 'custom';

// Ultra-DRY component configuration interface
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

// Ultra-DRY component factory props
export interface ComponentFactoryProps {
	kind: ComponentKind;
	children?: React.ReactNode;
	[key: string]: any; // Allow any props to be passed through
}

/**
 * ComponentFactory - Ultimate DRY component creation
 *
 * Usage examples:
 * <ComponentFactory kind="btn-primary">Click me</ComponentFactory>
 * <ComponentFactory kind="field-email" />
 * <ComponentFactory kind="field-password" />
 * <ComponentFactory kind="layout-grid">Grid content</ComponentFactory>
 */
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
			<div ref={ref} {...props}>
				{children}
			</div>
		);
	}

	// Delegate to specialized factories based on type
	switch (config.type) {
		case 'button': {
			return (
				<UnifiedButton
					ref={ref}
					kind={config.component as ExtendedButtonKind}
					{...props}
				>
					{children}
				</UnifiedButton>
			);
		}

		case 'form-field': {
			return (
				<FormFieldFactory
					ref={ref}
					kind={config.component as ExtendedFormFieldKind}
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
			// For now, return a basic modal wrapper
			// TODO: Implement UnifiedModal factory
			return (
				<div
					ref={ref}
					className={`modal ${config.className || ''} ${props.className || ''}`.trim()}
					{...props}
				>
					{children}
				</div>
			);
		}

		default: {
			return (
				<div ref={ref} {...props}>
					{children}
				</div>
			);
		}
	}
});

ComponentFactory.displayName = 'ComponentFactory';

// Ultra-short alias for maximum DRYness
export const C = ComponentFactory;

// Component presets for common UI patterns
export const ComponentPresets = {
	// Common button groups
	modalButtons: (
		onConfirm: () => void,
		onCancel: () => void
	) => [
		<C key='cancel' kind='btn-secondary' onClick={onCancel}>
			Cancel
		</C>,
		<C key='confirm' kind='btn-primary' onClick={onConfirm}>
			Confirm
		</C>,
	],

	formActions: (
		onSubmit: () => void,
		onReset?: () => void
	) =>
		[
			onReset && (
				<C
					key='reset'
					kind='btn-secondary'
					onClick={onReset}
				>
					Reset
				</C>
			),
			<C key='submit' kind='btn-primary' onClick={onSubmit}>
				Submit
			</C>,
		].filter(Boolean),

	// Common form layouts
	loginForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => (
		<C
			kind='layout-flex'
			style={{ flexDirection: 'column', gap: '1rem' }}
		>
			<C
				kind='field-email'
				value={values.email}
				onChange={(v: any) => onChange('email', v)}
				error={errors.email}
			/>
			<C
				kind='field-password'
				value={values.password}
				onChange={(v: any) => onChange('password', v)}
				error={errors.password}
			/>
		</C>
	),

	contactForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => (
		<C
			kind='layout-flex'
			style={{ flexDirection: 'column', gap: '1rem' }}
		>
			<C
				kind='field-text'
				label='Name'
				value={values.name}
				onChange={(v: any) => onChange('name', v)}
				error={errors.name}
			/>
			<C
				kind='field-email'
				value={values.email}
				onChange={(v: any) => onChange('email', v)}
				error={errors.email}
			/>
			<C
				kind='field-textarea'
				label='Message'
				value={values.message}
				onChange={(v: any) => onChange('message', v)}
				error={errors.message}
			/>
		</C>
	),

	// Common layout patterns
	cardLayout: (children: React.ReactNode) => (
		<C
			kind='layout-container'
			style={{
				padding: '1.5rem',
				borderRadius: '0.5rem',
				boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
				background: '#fff',
			}}
		>
			{children}
		</C>
	),

	gridLayout: (children: React.ReactNode, columns = 3) => (
		<C
			kind='layout-grid'
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: '1rem',
			}}
		>
			{children}
		</C>
	),
};

// Quick component builders for common patterns
export const QuickComponents = {
	// Quick buttons
	primaryBtn: (text: string, onClick: () => void) => (
		<C kind='btn-primary' onClick={onClick}>
			{text}
		</C>
	),
	secondaryBtn: (text: string, onClick: () => void) => (
		<C kind='btn-secondary' onClick={onClick}>
			{text}
		</C>
	),
	dangerBtn: (text: string, onClick: () => void) => (
		<C kind='btn-danger' onClick={onClick}>
			{text}
		</C>
	),

	// Quick form fields
	textField: (
		label: string,
		value: any,
		onChange: any,
		error?: string
	) => (
		<C
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
		<C
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
		<C
			kind='field-password'
			value={value}
			onChange={onChange}
			error={error}
		/>
	),

	// Quick layouts
	flexColumn: (children: React.ReactNode, gap = '1rem') => (
		<C
			kind='layout-flex'
			style={{ flexDirection: 'column', gap }}
		>
			{children}
		</C>
	),
	flexRow: (children: React.ReactNode, gap = '1rem') => (
		<C
			kind='layout-flex'
			style={{ flexDirection: 'row', gap }}
		>
			{children}
		</C>
	),
	grid: (children: React.ReactNode, columns = 3) => (
		<C
			kind='layout-grid'
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: '1rem',
			}}
		>
			{children}
		</C>
	),
};

export default ComponentFactory;
