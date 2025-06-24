import { Wrapper } from '../../components/Wrappers';

export const commonDecorators = [
	(Story: any) => (
		<Wrapper
			kind='flex-container'
			direction='column'
			style={{ padding: '1rem', minHeight: '400px' }}
		>
			<Story />
		</Wrapper>
	),
];

export const centeredDecorator = (Story: any) => (
	<Wrapper
		kind='center-container'
		method='flex'
		style={{
			minHeight: '400px',
			padding: '2rem',
		}}
	>
		<Story />
	</Wrapper>
);

export const darkBackgroundDecorator = (Story: any) => (
	<Wrapper
		kind='flex-container'
		direction='column'
		style={{
			backgroundColor: '#1a1a1a',
			color: 'white',
			padding: '2rem',
			minHeight: '400px',
		}}
	>
		<Story />
	</Wrapper>
);

export const gameLayoutDecorator = (Story: any) => (
	<Wrapper
		kind='center-container'
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
	</Wrapper>
);

export const modalDecorator = (Story: any) => (
	<Wrapper
		style={{ position: 'relative', height: '600px' }}
	>
		<Story />
	</Wrapper>
);

export const cardGridDecorator = (Story: any) => (
	<Wrapper
		style={{
			display: 'grid',
			gridTemplateColumns:
				'repeat(auto-fit, minmax(300px, 1fr))',
			gap: '1rem',
			padding: '1rem',
		}}
	>
		<Story />
	</Wrapper>
);
