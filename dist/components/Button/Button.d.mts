import React from 'react';

/**
 * Button component
 * @example
 * <Button label="Click me" onClick={() => alert('clicked')} />
 */
interface ButtonProps {
    /** Button label */
    label: string;
    /** Click handler */
    onClick?: () => void;
    /** Additional className for styling */
    className?: string;
}
declare const Button: React.FC<ButtonProps>;

export { type ButtonProps, Button as default };
