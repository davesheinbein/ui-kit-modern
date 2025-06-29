import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Wrapper } from '../../components/Wrappers';

export const reduxProviderDecorator = (Story: any) => (
	<Provider store={store}>
		<Story />
	</Provider>
);

export const commonDecorators = [
	reduxProviderDecorator,
	(Story: any) => (
		<Wrapper
			direction='column'
			p={4}
			gap={3}
			bg='transparent'
		>
			<Story />
		</Wrapper>
	),
];

export const selectDecorators = [
	reduxProviderDecorator,
	(Story: any) => (
		<Wrapper
			direction='column'
			p={4}
			gap={3}
			bg='transparent'
			style={{ overflow: 'visible' }}
		>
			<Story />
		</Wrapper>
	),
];

export const dropdownDecorators = [
	reduxProviderDecorator,
	(Story: any) => (
		<Wrapper
			direction='column'
			p={4}
			gap={3}
			bg='transparent'
			style={{ overflow: 'visible' }}
		>
			<Story />
		</Wrapper>
	),
];
