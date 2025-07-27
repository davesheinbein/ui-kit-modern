import { InputProps } from './types';
import {
	getSafeInputStyle,
	AllowedInputStyle,
} from './inputStyleUtils';

export function useNormalizedInputProps(
	props: InputProps
): Omit<InputProps, 'inputStyle'> & {
	inputStyle: AllowedInputStyle;
} {
	const { inputStyle, ...rest } = props;
	const safeInputStyle = getSafeInputStyle(
		inputStyle
	) as AllowedInputStyle;
	return { ...rest, inputStyle: safeInputStyle };
}
