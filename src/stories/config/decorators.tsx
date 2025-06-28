import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Wrapper } from '../../components/Wrappers';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

export const reduxProviderDecorator = (Story: any) => (
	<Provider store={store}>
		<Story />
	</Provider>
);

export const commonDecorators = [
	reduxProviderDecorator,
	(Story: any) => (
		<Wrapper kind='flex-container' direction='column'>
			<Story />
		</Wrapper>
	),
];

export const selectDecorators = [
	reduxProviderDecorator,
	(Story: any) => (
		<Wrapper
			kind='flex-container'
			direction='column'
			style={{ overflow: 'visible' }}
		>
			<Story />
		</Wrapper>
	),
];
