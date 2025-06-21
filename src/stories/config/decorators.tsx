// Shared Storybook configuration and decorators
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

// Redux Provider decorator for components that use Redux hooks
export const reduxDecorator = (Story: any) => (
	<Provider store={store}>
		<Story />
	</Provider>
);

export const commonDecorators = [
	(Story: any) => (
		<div style={{ padding: '1rem', minHeight: '400px' }}>
			<Story />
		</div>
	),
];

export const centeredDecorator = (Story: any) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			minHeight: '400px',
			padding: '2rem',
		}}
	>
		<Story />
	</div>
);

export const darkBackgroundDecorator = (Story: any) => (
	<div
		style={{
			backgroundColor: '#1a1a1a',
			color: 'white',
			padding: '2rem',
			minHeight: '400px',
		}}
	>
		<Story />
	</div>
);

export const gameLayoutDecorator = (Story: any) => (
	<div
		style={{
			width: '100%',
			maxWidth: '1200px',
			margin: '0 auto',
			padding: '1rem',
			backgroundColor: '#f5f5f5',
			minHeight: '600px',
		}}
	>
		<Story />
	</div>
);

export const modalDecorator = (Story: any) => (
	<div style={{ position: 'relative', height: '600px' }}>
		<Story />
	</div>
);

export const cardGridDecorator = (Story: any) => (
	<div
		style={{
			display: 'grid',
			gridTemplateColumns:
				'repeat(auto-fit, minmax(300px, 1fr))',
			gap: '1rem',
			padding: '1rem',
		}}
	>
		<Story />
	</div>
);

// Combined decorators for components that need both Redux and common styling
export const reduxWithCommonDecorator = (Story: any) => (
	<Provider store={store}>
		<div style={{ padding: '1rem', minHeight: '400px' }}>
			<Story />
		</div>
	</Provider>
);
