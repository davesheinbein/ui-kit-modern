import React, { forwardRef } from 'react';
import UnifiedInput, {
	UnifiedInputProps,
} from './UnifiedInput';

export interface InputProps
	extends Omit<UnifiedInputProps, 'kind'> {
	kind?: UnifiedInputProps['kind'];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ kind = 'text', ...props }, ref) => {
		return (
			<UnifiedInput ref={ref} kind={kind} {...props} />
		);
	}
);

Input.displayName = 'Input';

export default Input;
