import { useCallback } from 'react';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../store/hooks';
import {
	selectInputValue,
	selectInputState,
	selectShowPassword,
	setValue,
	setFocused,
	togglePasswordVisibility,
} from '../../../store/slices/inputSlice';
import type { InputProps } from '../Sub/types';
import { getTypeSpecificProps } from './inputTypeUtils';

export interface UseInputHandlersResult {
	finalComponentId: string;
	inputValue: string | number;
	currentState: any;
	showPassword: boolean;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	handleClear: () => void;
	handlePasswordToggle: () => void;
	handleFocus: (
		event: React.FocusEvent<HTMLInputElement>
	) => void;
	handleBlur: (
		event: React.FocusEvent<HTMLInputElement>
	) => void;
	inputType: string;
	kindClass: string;
	typeSpecificProps: any;
	wrapperClassNames: string;
}

export function useInputHandlers(
	props: InputProps
): UseInputHandlersResult {
	const {
		kind = 'text',
		componentId,
		variant,
		size = 'medium',
		state = 'default',
		inputStyle = 'outlined',
		className = '',
		appearance,
		value: controlledValue,
		min,
		max,
		debounceMs = 0,
		debounced = false,
		onChange,
		onValueChange,
		customValidation,
		...rest
	} = props;

	const finalComponentId =
		componentId ||
		`input-${kind}-${typeof window !== 'undefined' && window.crypto ? window.crypto.randomUUID() : Math.random().toString(36).slice(2)}`;
	const dispatch = useAppDispatch();
	const inputValue = useAppSelector((state) =>
		selectInputValue(state, finalComponentId)
	);
	const currentState = useAppSelector((state) =>
		selectInputState(state, finalComponentId)
	);
	const showPassword = useAppSelector((state) =>
		selectShowPassword(state, finalComponentId)
	);

	const isControlled = controlledValue !== undefined;
	let finalInputValue: string | number;
	const rawValue =
		isControlled ? controlledValue : inputValue;
	if (Array.isArray(rawValue)) {
		finalInputValue = rawValue.join(',');
	} else {
		finalInputValue = rawValue as string | number;
	}

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = event.target.value;
			if (!isControlled) {
				dispatch(
					setValue({
						componentId: finalComponentId,
						value: newValue,
					})
				);
			}
			if (onChange) {
				onChange(event);
			}
			if (onValueChange) {
				if (debounceMs > 0 && debounced) {
					onValueChange(newValue); // Replace with debounced version if needed
				} else {
					onValueChange(newValue);
				}
			}
			if (customValidation) {
				const validationResult = customValidation(newValue);
				// Handle validation result as needed
			}
		},
		[
			isControlled,
			dispatch,
			finalComponentId,
			onChange,
			onValueChange,
			debounceMs,
			debounced,
			customValidation,
		]
	);

	const handleClear = useCallback(() => {
		const newValue = '';
		if (!isControlled) {
			dispatch(
				setValue({
					componentId: finalComponentId,
					value: newValue,
				})
			);
		}
		if (onValueChange) {
			onValueChange(newValue);
		}
	}, [
		isControlled,
		dispatch,
		finalComponentId,
		onValueChange,
	]);

	const handlePasswordToggle = useCallback(() => {
		dispatch(
			togglePasswordVisibility({
				componentId: finalComponentId,
			})
		);
	}, [dispatch, finalComponentId]);

	const handleFocus = useCallback(
		(event: React.FocusEvent<HTMLInputElement>) => {
			dispatch(
				setFocused({
					componentId: finalComponentId,
					isFocused: true,
				})
			);
			props.onFocus?.(event);
		},
		[dispatch, finalComponentId, props]
	);

	const handleBlur = useCallback(
		(event: React.FocusEvent<HTMLInputElement>) => {
			dispatch(
				setFocused({
					componentId: finalComponentId,
					isFocused: false,
				})
			);
			props.onBlur?.(event);
		},
		[dispatch, finalComponentId, props]
	);

	const inputType =
		variant === 'password' && showPassword ?
			'text'
		:	variant || kind;

	const appearanceClass =
		appearance === 'border' ? 'input--border'
		: appearance === 'shadow' ? 'input--shadow'
		: appearance === 'borderShadow' ? 'input--borderShadow'
		: '';

	const { typeSpecificProps, kindClass } =
		getTypeSpecificProps(
			kind,
			typeof min === 'number' ? min : undefined,
			typeof max === 'number' ? max : undefined
		);

	const allowedInputStyles = [
		'outlined',
		'filled',
		'plain',
	];
	const safeInputStyle =
		allowedInputStyles.includes(inputStyle) ? inputStyle : (
			'outlined'
		);

	const wrapperClassNames = [
		'inputWrapper',
		`size-${size}`,
		`style-${inputStyle}`,
		`state-${state}`,
		className,
		appearanceClass,
	]
		.filter(Boolean)
		.join(' ');

	return {
		finalComponentId,
		inputValue: finalInputValue,
		currentState,
		showPassword,
		handleChange,
		handleClear,
		handlePasswordToggle,
		handleFocus,
		handleBlur,
		inputType,
		kindClass,
		typeSpecificProps,
		wrapperClassNames,
	};
}
