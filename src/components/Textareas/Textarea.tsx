import React, { forwardRef } from 'react';
import {
	TextareaFactory,
	TextareaFactoryProps,
} from './factory';

export const Textarea = forwardRef<
	HTMLTextAreaElement,
	TextareaFactoryProps
>((props, ref) => {
	return <TextareaFactory ref={ref} {...props} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
