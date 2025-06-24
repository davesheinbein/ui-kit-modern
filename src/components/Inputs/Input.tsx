import React, { forwardRef } from 'react';
import Input, { InputProps } from './Input';

export interface InputProps
	extends Omit<InputProps, 'kind'> {
	kind?: InputProps['kind'];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ kind = 'text', ...props }, ref) => {
		return <Input ref={ref} kind={kind} {...props} />;
	}
);

Input.displayName = 'Input';

export default Input;
