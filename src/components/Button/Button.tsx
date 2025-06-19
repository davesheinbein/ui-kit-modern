import React from 'react';
import UnifiedButton, {
	UnifiedButtonProps,
} from './UnifiedButton';

/**
 * Primary Button component - a wrapper around UnifiedButton for the most common use case
 * For more advanced button types, use UnifiedButton with the 'kind' prop
 * @example
 * <Button>Click me</Button>
 * <Button kind="secondary">Secondary Button</Button>
 * <Button kind="icon" icon="🔥" label="Fire" />
 */
export interface ButtonProps
	extends Omit<UnifiedButtonProps, 'kind'> {
	/** Button kind - defaults to 'primary' */
	kind?: UnifiedButtonProps['kind'];
	/** Button label - for simple buttons */
	label?: string;
}

const Button: React.FC<ButtonProps> = ({
	label,
	kind = 'primary',
	children,
	...props
}) => {
	return (
		<UnifiedButton kind={kind} {...props}>
			{label || children}
		</UnifiedButton>
	);
};

export default Button;
