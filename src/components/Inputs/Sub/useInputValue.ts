import {
	useState,
	useCallback,
	useRef,
	useEffect,
} from 'react';

interface UseInputValueProps {
	value?: string;
	defaultValue?: string;
	debounced?: boolean;
	debounceMs?: number;
	onValueChange?: (value: string) => void;
	disabled?: boolean;
}

export function useInputValue({
	value: controlledValue,
	defaultValue,
	debounced = false,
	debounceMs = 0,
	onValueChange,
	disabled = false,
}: UseInputValueProps) {
	const [uncontrolledValue, setUncontrolledValue] =
		useState(defaultValue || '');
	const isControlled = controlledValue !== undefined;
	const value =
		isControlled ? controlledValue : uncontrolledValue;
	const debounceTimeout = useRef<NodeJS.Timeout | null>(
		null
	);
	const [isDirty, setIsDirty] = useState(false);

	const setValue = useCallback(
		(val: string) => {
			if (!isControlled) setUncontrolledValue(val);
			if (debounced && debounceMs > 0) {
				if (debounceTimeout.current)
					clearTimeout(debounceTimeout.current);
				debounceTimeout.current = setTimeout(() => {
					onValueChange?.(val);
				}, debounceMs);
			} else {
				onValueChange?.(val);
			}
		},
		[isControlled, debounced, debounceMs, onValueChange]
	);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (disabled) return;
			setIsDirty(true);
			setValue(e.target.value);
		},
		[setValue, disabled]
	);

	const handleClear = useCallback(() => {
		if (disabled) return;
		setIsDirty(false);
		setValue('');
	}, [setValue, disabled]);

	useEffect(() => {
		return () => {
			if (debounceTimeout.current)
				clearTimeout(debounceTimeout.current);
		};
	}, []);

	return { value, handleChange, handleClear, isDirty };
}
