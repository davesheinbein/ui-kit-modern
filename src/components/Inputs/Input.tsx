/**
 * Input - Ultra-DRY, prop-driven input component for all input types
 *
 * Usage:
 *   <Input kind="text" label="Username" />
 *   <Input kind="password" label="Password" showPasswordToggle />
 *   <Input kind="email" label="Email" required />
 *   <Input kind="number" label="Age" min={0} max={120} />
 *   <Input kind="search" label="Search" clearable />
 *   <Input kind="custom" label="Custom" icon={<Icon />} />
 *
 * All configuration is via props. No factories, helpers, or presets required.
 */
import React, { forwardRef } from 'react';
import type { InputProps } from './Sub/types';
import InputOrchestrator from './Sub/InputOrchestrator';

const Input = forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => <InputOrchestrator {...props} ref={ref} />
);

Input.displayName = 'Input';

export { Input };
export default Input;
