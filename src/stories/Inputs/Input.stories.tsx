import React from 'react';
import { Input } from '../../components/Inputs';
import type {
	InputKind,
	InputSize,
	InputStyle,
} from '../../components/Inputs/configurations';
import type { InputProps } from '../../components/Inputs';
import { commonDecorators } from '../config/decorators';

export default {
	title: 'Inputs/Input',
	component: Input,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
**Unified Input Component**  
All input types, variants, and states are supported via props.  
Usage: \`<Input {...props} />\`

**Examples:**

<Input kind="text" label="Text" />
<Input kind="email" label="Email" variant="email" />
<Input kind="password" label="Password" showPasswordToggle />
				`,
			},
		},
	},
};

const kinds: InputKind[] = [
	'text',
	'email',
	'password',
	'number',
	'search',
	'url',
	'tel',
	'username',
	'login-email',
	'confirmation-password',
	'search-filter',
	'custom',
];
const sizes: InputSize[] = ['small', 'medium', 'large'];
const styles: InputStyle[] = [
	'outlined',
	'filled',
	'underlined',
	'ghost',
];

export const VariantsGallery = () => (
	<div
		style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
	>
		{kinds.map((kind) => (
			<div key={kind} style={{ minWidth: 260 }}>
				<Input
					kind={kind}
					label={kind.replace(/-/g, ' ')}
					style='outlined'
				/>
			</div>
		))}
	</div>
);
VariantsGallery.storyName = 'All Input Kinds';

export const Text = (args: Partial<InputProps>) => (
	<Input
		kind='text'
		label='Text'
		placeholder='Enter text'
		{...args}
	/>
);
export const Email = (args: Partial<InputProps>) => (
	<Input
		kind='email'
		label='Email'
		placeholder='Enter email'
		required
		{...args}
	/>
);
export const Password = (args: Partial<InputProps>) => (
	<Input
		kind='password'
		label='Password'
		placeholder='Enter password'
		showPasswordToggle
		{...args}
	/>
);
export const Number = (args: Partial<InputProps>) => (
	<Input
		kind='number'
		label='Number'
		placeholder='Enter number'
		min={0}
		max={100}
		{...args}
	/>
);
export const Search = (args: Partial<InputProps>) => (
	<Input
		kind='search'
		label='Search'
		placeholder='Search...'
		clearable
		{...args}
	/>
);
export const Custom = (args: Partial<InputProps>) => (
	<Input
		kind='custom'
		label='Custom'
		icon='star'
		{...args}
	/>
);

export const Sizes = () => (
	<div style={{ display: 'flex', gap: 24 }}>
		{sizes.map((size) => (
			<Input
				key={size}
				kind='text'
				label={size}
				size={size}
			/>
		))}
	</div>
);

export const Styles = () => (
	<div style={{ display: 'flex', gap: 24 }}>
		{styles.map((style) => (
			<Input
				key={style}
				kind='text'
				label={style}
				style={style}
			/>
		))}
	</div>
);
