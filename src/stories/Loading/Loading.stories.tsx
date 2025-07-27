import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import type {
	LoadingKind,
	LoadingProps,
} from '../../components/Loading/Sub/types';

const loaderContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: 120,
	minWidth: 120,
	padding: 24,
	background: '#fafbfc',
	borderRadius: 12,
	boxShadow: '0 2px 8px 0 #e2e8f040',
	gap: 12,
} as any;

export default {
	title: 'Feedback/Loading',
	component: Loading,
	argTypes: {
		'kind': {
			control: 'select',
			options: [
				'spinner',
				'dots',
				'bar',
				'skeleton',
				'pulse',
				'wave',
				'ring',
				'bounce',
				'dualRing',
				'ellipsis',
				'grid',
				'customSVG',
				'custom',
			],
		},
		'color': { control: 'color' },
		'backgroundColor': { control: 'color' },
		'animationSpeed': { control: 'number' },
		'count': { control: 'number' },
		'direction': {
			control: 'select',
			options: ['horizontal', 'vertical'],
		},
		'shape': {
			control: 'select',
			options: [
				'circle',
				'square',
				'rect',
				'bar',
				'dot',
				'custom',
			],
		},
		'thickness': { control: 'number' },
		'message': { control: 'text' },
		'svg': { control: 'object' },
		'aria-label': { control: 'text' },
		'aria-busy': { control: 'boolean' },
		'role': { control: 'text' },
	},
};

const Template = (args: LoadingProps) => (
	<div style={loaderContainerStyle}>
		<Loading {...args} />
	</div>
);

export const Spinner = {
	render: Template,
	args: {
		'kind': 'spinner',
		'color': '#1976d2',
		'animationSpeed': 1,
		'thickness': 4,
		'aria-label': 'Loading spinner',
		'role': 'status',
	},
};

export const Dots = {
	render: Template,
	args: {
		'kind': 'dots',
		'color': '#43a047',
		'count': 3,
		'animationSpeed': 1,
		'aria-label': 'Loading dots',
	},
};

export const Bar = {
	render: Template,
	args: {
		'kind': 'bar',
		'color': '#fbc02d',
		'animationSpeed': 1.2,
		'backgroundColor': '#fffde7',
		'aria-label': 'Loading bar',
	},
};

export const Skeleton = {
	render: Template,
	args: {
		'kind': 'skeleton',
		'backgroundColor': '#e0e0e0',
		'animationSpeed': 1.5,
		'aria-label': 'Loading skeleton',
	},
};

export const Pulse = {
	render: Template,
	args: {
		'kind': 'pulse',
		'color': '#ab47bc',
		'count': 1,
		'animationSpeed': 1,
		'shape': 'circle',
		'aria-label': 'Loading pulse',
	},
};

export const Wave = {
	render: Template,
	args: {
		'kind': 'wave',
		'color': '#00bcd4',
		'count': 5,
		'animationSpeed': 1,
		'direction': 'horizontal',
		'aria-label': 'Loading wave',
	},
};

export const Ring = {
	render: Template,
	args: {
		'kind': 'ring',
		'color': '#ff7043',
		'thickness': 6,
		'animationSpeed': 1,
		'aria-label': 'Loading ring',
	},
};

export const Bounce = {
	render: Template,
	args: {
		'kind': 'bounce',
		'color': '#388e3c',
		'count': 3,
		'animationSpeed': 1,
		'aria-label': 'Loading bounce',
	},
};

export const DualRing = {
	render: Template,
	args: {
		'kind': 'dualRing',
		'color': '#1976d2',
		'thickness': 4,
		'animationSpeed': 1,
		'aria-label': 'Loading dual ring',
	},
};

export const Ellipsis = {
	render: Template,
	args: {
		'kind': 'ellipsis',
		'color': '#f44336',
		'count': 4,
		'animationSpeed': 1,
		'aria-label': 'Loading ellipsis',
	},
};

export const Grid = {
	render: (args: LoadingProps) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 120,
				minWidth: 120,
				padding: 24,
				background: args.backgroundColor || '#fffde7',
				borderRadius: 12,
				boxShadow: '0 2px 8px 0 #e2e8f040',
				gap: 12,
			}}
		>
			<Loading
				{...args}
				kind='grid'
				count={9}
				color={args.color || '#ffb300'}
				backgroundColor={args.backgroundColor || '#fffde7'}
				animationSpeed={args.animationSpeed || 1.2}
				aria-label='Loading grid'
				role='status'
			/>
			<span style={{ fontSize: 12 }}>grid</span>
		</div>
	),
	args: {
		'kind': 'grid',
		'color': '#ffb300',
		'count': 9,
		'animationSpeed': 1.2,
		'backgroundColor': '#fffde7',
		'aria-label': 'Loading grid',
	},
};

export const CustomSVG = {
	render: Template,
	args: {
		'kind': 'customSVG',
		'svg': (
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='20'
					cy='20'
					r='18'
					stroke='#1976d2'
					strokeWidth='4'
					fill='none'
				/>
				<path
					d='M20 2 A18 18 0 0 1 38 20'
					stroke='#43a047'
					strokeWidth='4'
					fill='none'
				/>
			</svg>
		),
		'aria-label': 'Custom SVG loader',
	},
};

export const WithMessage = {
	render: (args: LoadingProps) => (
		<div style={loaderContainerStyle}>
			<Loading
				{...args}
				message='Loading data, please wait...'
			/>
			<span style={{ fontSize: 14, color: '#888' }}>
				Loading data, please wait...
			</span>
		</div>
	),
	args: {
		'kind': 'spinner',
		'color': '#1976d2',
		'aria-label': 'Loading spinner with message',
	},
};

export const Accessible = {
	render: (args: LoadingProps) => (
		<div style={loaderContainerStyle}>
			<Loading {...args} />
			<span style={{ fontSize: 14, color: '#888' }}>
				Screen readers will announce this as loading.
			</span>
		</div>
	),
	args: {
		'kind': 'dots',
		'color': '#1976d2',
		'count': 3,
		'animationSpeed': 1,
		'aria-busy': true,
		'aria-label': 'Loading content',
		'role': 'status',
	},
};

export const AllVariants = {
	render: () => {
		const variants: LoadingKind[] = [
			'spinner',
			'dots',
			'bar',
			'skeleton',
			'pulse',
			'wave',
			'ring',
			'bounce',
			'dualRing',
			'ellipsis',
			'grid',
			'customSVG',
		];
		const colors = [
			'#1976d2',
			'#43a047',
			'#fbc02d',
			'#e0e0e0',
			'#ab47bc',
			'#00bcd4',
			'#ff7043',
			'#388e3c',
			'#f44336',
			'#ffb300',
			'#1976d2',
			'#43a047',
		];
		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gap: 32,
					background: '#fafbfc',
					padding: 32,
					borderRadius: 16,
				}}
			>
				{variants.map((kind, i) => (
					<div key={kind} style={loaderContainerStyle}>
						<Loading
							kind={kind}
							color={colors[i]}
							count={
								kind === 'grid' ? 9
								: kind === 'wave' ?
									5
								:	3
							}
							animationSpeed={1}
							thickness={
								kind === 'ring' || kind === 'dualRing' ?
									4
								:	undefined
							}
							backgroundColor={
								kind === 'bar' || kind === 'grid' ?
									'#fffde7'
								:	undefined
							}
							svg={
								kind === 'customSVG' ?
									<svg
										width='40'
										height='40'
										viewBox='0 0 40 40'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle
											cx='20'
											cy='20'
											r='18'
											stroke='#1976d2'
											strokeWidth='4'
											fill='none'
										/>
										<path
											d='M20 2 A18 18 0 0 1 38 20'
											stroke='#43a047'
											strokeWidth='4'
											fill='none'
										/>
									</svg>
								:	undefined
							}
							aria-label={`Loading ${kind}`}
						/>
						<span style={{ fontSize: 12 }}>{kind}</span>
					</div>
				))}
			</div>
		);
	},
};

export const SimulatedLoading = {
	render: (args: LoadingProps) => {
		const [loading, setLoading] = useState(true);
		useEffect(() => {
			const timer = setTimeout(
				() => setLoading(false),
				2500
			);
			return () => clearTimeout(timer);
		}, []);
		return loading ?
				<div style={loaderContainerStyle}>
					<Loading
						{...args}
						message='Loading simulated data...'
					/>
					<span style={{ fontSize: 14, color: '#888' }}>
						Fetching data...
					</span>
				</div>
			:	<div
					style={{
						...loaderContainerStyle,
						background: '#e8f5e9',
						color: '#388e3c',
						fontWeight: 600,
						fontSize: 18,
						minHeight: 80,
					}}
				>
					Loaded! 🎉
				</div>;
	},
	args: {
		'kind': 'spinner',
		'color': '#1976d2',
		'animationSpeed': 1,
		'thickness': 4,
		'aria-label': 'Loading spinner',
		'role': 'status',
	},
};
