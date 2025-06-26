import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Wrapper } from '../../components/Wrappers';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

// Redux Provider decorator for Storybook
export const reduxProviderDecorator = (Story: any) => (
	<Provider store={store}>
		<Story />
	</Provider>
);

export const commonDecorators = [
	reduxProviderDecorator,
	(Story: any) => (
		<Wrapper
			kind='flex-container'
			direction='column'
			style={{
				height: '100%',
				minHeight: '100vh',
				padding: 0,
				gap: 0,
			}}
		>
			<Story />
		</Wrapper>
	),
];
