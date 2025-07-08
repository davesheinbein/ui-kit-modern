import ButtonBase from './Sub/ButtonBase';
import type {
	ButtonKind,
	ButtonProps,
} from './Sub/ButtonBase';
export type { ButtonKind, ButtonProps };
export { default as BUTTON_CONFIGURATIONS } from './configurations';
export * from './Sub/ButtonPresets';

const Button = ButtonBase;
Button.displayName = 'Button';
export default Button;
