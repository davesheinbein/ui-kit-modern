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
	const { isConnected, error, connect, disconnect } =
		useSocket();

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
			{error && (
				<p style={{ color: 'red' }}>Error: {error}</p>
			)}
			<div
				style={{
					marginTop: '1rem',
					display: 'flex',
					gap: '0.5rem',
				}}
			>
				<button
					onClick={() => connect('ws://localhost:3000')}
				>
					Connect
				</button>
				<button onClick={disconnect}>Disconnect</button>
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
				component:
					'A DRY context provider for WebSocket/Socket.IO connections that manages connection state and provides socket functionality. Built using the unified Providers system.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'socket-provider',
				'user-settings-provider',
				'achievement-socket-listener',
			],
			description: 'Type of provider to render',
		},
		children: {
			control: false,
			description:
				'Child components that will have access to socket context',
		},
		session: {
			control: 'object',
			description:
				'Optional session object for authentication',
		},
		autoConnect: {
			control: 'boolean',
			description:
				'Whether to automatically connect on mount',
		},
		url: {
			control: 'text',
			description: 'Socket server URL',
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
