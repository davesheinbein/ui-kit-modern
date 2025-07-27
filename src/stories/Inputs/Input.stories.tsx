import React from 'react';
import { StatefulInput } from '../../utils/storyHelpers';
import type {
	ExtendedInputKind,
	InputSize,
	InputStyle,
} from '../../components/Inputs/configurations';
import type { InputProps } from '../../components/Inputs/Sub/types';
import { commonDecorators } from '../config/decorators';

export default {
	title: 'Inputs/Input',
	component: StatefulInput,
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

const kinds: ExtendedInputKind[] = [
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
const inputStyles: InputStyle[] = [
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
				<StatefulInput
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
	<StatefulInput
		kind={'text' as ExtendedInputKind}
		label='Text'
		placeholder='Enter text'
		{...args}
	/>
);
export const Email = (args: Partial<InputProps>) => (
	<StatefulInput
		kind={'email' as ExtendedInputKind}
		label='Email'
		placeholder='Enter email'
		required
		{...args}
	/>
);
export const Password = (args: Partial<InputProps>) => (
	<StatefulInput
		kind={'password' as ExtendedInputKind}
		label='Password'
		placeholder='Enter password'
		showPasswordToggle
		{...args}
	/>
);
export const Number = (args: Partial<InputProps>) => (
	<StatefulInput
		kind={'number' as ExtendedInputKind}
		label='Number'
		placeholder='Enter number'
		min={0}
		max={100}
		{...args}
	/>
);
export const Search = (args: Partial<InputProps>) => (
	<StatefulInput
		kind={'search' as ExtendedInputKind}
		label='Search'
		placeholder='Search...'
		clearable
		{...args}
	/>
);

export const Custom = (args: Partial<InputProps>) => (
	<StatefulInput
		kind={'custom' as ExtendedInputKind}
		label='Custom'
		icon='star'
		{...args}
	/>
);

export const Sizes = () => (
	<div style={{ display: 'flex', gap: 24 }}>
		{sizes.map((size) => (
			<StatefulInput
				key={size}
				kind={'text' as ExtendedInputKind}
				label={size}
				size={size}
			/>
		))}
	</div>
);

export const Styles = () => (
	<div style={{ display: 'flex', gap: 24 }}>
		{inputStyles.map((inputStyle) => (
			<StatefulInput
				key={inputStyle}
				kind={'text' as ExtendedInputKind}
				label={inputStyle}
				style={inputStyle}
			/>
		))}
	</div>
);

export const Border = {
	args: {
		kind: 'text' as ExtendedInputKind,
		appearance: 'border',
		placeholder: 'Border Input',
	},
	render: (args: Partial<InputProps>) => {
		// Omit style prop injected by Storybook
		const { style, ...rest } = args;
		return (
			<StatefulInput
				{...{
					...rest,
					kind: rest.kind as ExtendedInputKind,
				}}
			/>
		);
	},
};

export const Shadow = {
	args: {
		kind: 'text' as ExtendedInputKind,
		appearance: 'shadow',
		placeholder: 'Shadow Input',
	},
	render: (args: Partial<InputProps>) => {
		const { style, ...rest } = args;
		return (
			<StatefulInput
				{...{
					...rest,
					kind: rest.kind as ExtendedInputKind,
				}}
			/>
		);
	},
};

export const BorderShadow = {
	args: {
		kind: 'text' as ExtendedInputKind,
		appearance: 'borderShadow',
		placeholder: 'Border + Shadow Input',
	},
	render: (args: Partial<InputProps>) => {
		const { style, ...rest } = args;
		return (
			<StatefulInput
				{...{
					...rest,
					kind: rest.kind as ExtendedInputKind,
				}}
			/>
		);
	},
};

export const AllSizes = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
			}}
		>
			<StatefulInput
				kind={'text' as ExtendedInputKind}
				appearance='border'
				size='small'
				placeholder='Small Border'
			/>
			<StatefulInput
				kind={'text' as ExtendedInputKind}
				appearance='shadow'
				size='medium'
				placeholder='Medium Shadow'
			/>
			<StatefulInput
				kind={'text' as ExtendedInputKind}
				appearance='borderShadow'
				size='large'
				placeholder='Large Border+Shadow'
			/>
		</div>
	),
};
