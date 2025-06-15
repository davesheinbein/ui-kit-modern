import React from "react";
import styles from "./Button.module.scss";

/**
 * Button component
 * @example
 * <Button label="Click me" onClick={() => alert('clicked')} />
 */
export interface ButtonProps {
  /** Button label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Additional className for styling */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      role="button"
      aria-label={label}
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${styles.animated} ${className || ""}`.trim()}
    >
      {label}
    </button>
  );
};

export default Button;
