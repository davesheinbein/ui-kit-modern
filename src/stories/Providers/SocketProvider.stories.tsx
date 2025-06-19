import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedProvider,
	ProviderFactory,
	P,
	ProviderPresets,
	useSocket,
} from '../../components/Providers';

// Example component that uses the socket context
const SocketDemo: React.FC = () => {
	const socketContext = useSocket();

	if (!socketContext) {
		return <div>No socket context available</div>;
	}

	const { isConnected, socket, emit, on, off } =
		socketContext;

	return (
		<div
			style={{
				padding: '1rem',
				border: '1px solid #ddd',
				borderRadius: '8px',
			}}
		>
			<h3>Socket Status</h3>
			<p>Connected: {isConnected ? 'Yes' : 'No'}</p>
			<p>
				Socket: {socket ? 'Available' : 'Not available'}
			</p>
			<div
				style={{
					marginTop: '1rem',
					display: 'flex',
					gap: '0.5rem',
				}}
			>
				<button
					onClick={() =>
						emit('test-event', { message: 'Hello' })
					}
					disabled={!isConnected}
				>
					Send Test Event
				</button>
				<button
					onClick={() =>
						on('test-response', (data: any) =>
							console.log('Received:', data)
						)
					}
					disabled={!isConnected}
				>
					Listen for Response
				</button>
			</div>
		</div>
	);
};

const meta: Meta<typeof UnifiedProvider> = {
	title: 'Providers/SocketProvider (DRY System)',
	component: UnifiedProvider,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `### SocketProvider (DRY System)

A socket provider component built using the unified Providers system. Provides socket connection context for the application with connection management, error handling, and real-time communication capabilities.

Uses the DRY Provider system with \`kind="socket-provider"\` to render a socket provider with consistent configuration and behavior.`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: ['socket-provider'],
			description:
				'Provider kind - socket-provider for this component',
		},
		autoConnect: {
			control: 'boolean',
			description: 'Whether to auto-connect on mount',
		},
		url: {
			control: 'text',
			description: 'Socket URL to connect to',
		},
		session: {
			control: 'object',
			description: 'Session data for authentication',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedProvider>;

export const Default: Story = {
	args: {
		kind: 'socket-provider',
		autoConnect: false,
		url: 'ws://localhost:3000',
	},
	render: (args) => (
		<UnifiedProvider {...args}>
			<SocketDemo />
		</UnifiedProvider>
	),
};

export const AutoConnect: Story = {
	args: {
		kind: 'socket-provider',
		autoConnect: true,
		url: 'ws://localhost:3000',
	},
	render: (args) => (
		<UnifiedProvider {...args}>
			<SocketDemo />
		</UnifiedProvider>
	),
};

export const WithSession: Story = {
	args: {
		kind: 'socket-provider',
		autoConnect: false,
		url: 'ws://localhost:3000',
		session: {
			user: { id: '123', name: 'Test User' },
			token: 'abc123',
		},
	},
	render: (args) => (
		<UnifiedProvider {...args}>
			<SocketDemo />
		</UnifiedProvider>
	),
};

// DRY System Examples using factory patterns
export const SocketUsingFactory: Story = {
	render: () => (
		<P
			kind='socket-provider'
			autoConnect={false}
			url='ws://localhost:3000'
		>
			<SocketDemo />
		</P>
	),
};

export const SocketUsingPresets: Story = {
	render: () =>
		ProviderPresets.SOCKET_CONNECTION(
			{ user: { id: '123', name: 'Test User' } },
			false,
			'ws://localhost:3000'
		),
};

export const FactoryPattern: Story = {
	name: '🏭 Factory Pattern',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>ProviderFactory Socket:</h3>
				<ProviderFactory
					kind='socket-provider'
					autoConnect={true}
					url='ws://localhost:3000'
				>
					<SocketDemo />
				</ProviderFactory>
			</div>
		</div>
	),
};

export const UltraDRYExample: Story = {
	name: '⚡ Ultra-DRY (P)',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>Ultra-short "P" alias:</h3>
				<P
					kind='socket-provider'
					autoConnect={false}
					url='ws://localhost:3000'
				>
					<SocketDemo />
				</P>
			</div>
		</div>
	),
};

export const PresetExample: Story = {
	name: '🎯 Preset Pattern',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>ProviderPresets.SOCKET_CONNECTION:</h3>
				<div
					style={{
						border: '1px solid #e5e7eb',
						borderRadius: '8px',
						padding: '1rem',
					}}
				>
					{ProviderPresets.SOCKET_CONNECTION(
						{ user: { id: '123', name: 'Test User' } },
						true,
						'ws://localhost:3000'
					)}
					<SocketDemo />
				</div>
			</div>
		</div>
	),
};
