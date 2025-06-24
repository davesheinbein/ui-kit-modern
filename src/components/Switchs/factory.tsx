import React, { forwardRef } from 'react';
import Switch from './Switch';
import {
	SWITCH_CONFIGURATIONS,
	ExtendedSwitchKind,
	SwitchConfiguration,
	SwitchFactoryProps,
} from './configurations';

export const SwitchFactory = forwardRef<
	HTMLDivElement,
	SwitchFactoryProps
>(
	(
		{
			kind,
			checked,
			defaultChecked,
			onChange,
			label,
			onLabel,
			offLabel,
			helpText,
			error,
			className,
			disabled,
			required,
			name,
			id,
			configuration,
			...props
		},
		ref
	) => {
		const baseConfig =
			SWITCH_CONFIGURATIONS[kind] ||
			SWITCH_CONFIGURATIONS.toggle;
		const finalConfig: SwitchConfiguration = {
			...baseConfig,
			...configuration,
		};

		if (disabled) {
			finalConfig.state = 'disabled';
		}
		if (error) {
			finalConfig.state = 'error';
		}
		if (required) {
			finalConfig.required = true;
		}

		return (
			<Switch
				ref={ref}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={onChange}
				label={label}
				onLabel={onLabel}
				offLabel={offLabel}
				helpText={helpText}
				error={error}
				className={className}
				disabled={disabled}
				required={required}
				name={name}
				id={id}
				configuration={finalConfig}
				{...props}
			/>
		);
	}
);

SwitchFactory.displayName = 'SwitchFactory';

export default SwitchFactory;

export type {
	SwitchFactoryProps,
	ExtendedSwitchKind as SwitchKind,
	SwitchConfiguration,
} from './configurations';
