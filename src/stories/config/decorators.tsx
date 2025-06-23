// Shared Storybook configuration and decorators

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
