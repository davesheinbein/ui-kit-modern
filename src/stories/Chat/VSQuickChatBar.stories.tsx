import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSQuickChatBar } from '../../components/Chat';

const meta: Meta<typeof VSQuickChatBar> = {
	title: 'Chat/VSQuickChatBar',
	component: VSQuickChatBar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
## VSQuickChatBar Component

The VSQuickChatBar component provides quick chat options for gaming scenarios, allowing users to send predefined messages quickly during matches.

### Features:
- **Quick Options**: Predefined message buttons
- **Click to Send**: One-click message sending
- **Gaming Focused**: Optimized for competitive gaming environments
- **Integrated**: Now part of the unified Chat system

### Usage:
\`\`\`tsx
<VSQuickChatBar 
  options={['Hello', 'Good luck!', 'Nice move!', 'GG']}
  onSend={(message) => console.log('Sent:', message)}
/>
\`\`\`

**Note**: This component has been integrated into the Chat DRY system and can also be accessed via \`UnifiedChat\` with \`kind="vs-quick-chat"\`.
				`,
			},
		},
	},
	argTypes: {
		options: {
			control: 'object',
			description:
				'Array of quick chat options to display as buttons',
		},
		onSend: {
			action: 'sent',
			description:
				'Callback fired when a quick chat option is selected',
		},
	},
};

export default meta;
type Story = StoryObj<typeof VSQuickChatBar>;

export const Default: Story = {
	args: {
		options: ['Hello', 'Good luck!'],
		onSend: (message: string) =>
			console.log('Sent:', message),
	},
};

export const GameQuickChat: Story = {
	args: {
		options: [
			'Hello',
			'Good luck!',
			'Nice move!',
			'Well played!',
			'GG',
		],
		onSend: (message: string) =>
			console.log('Sent:', message),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Common quick chat options for gaming scenarios.',
			},
		},
	},
};

export const CustomOptions: Story = {
	args: {
		options: [
			'Thanks!',
			'Sorry!',
			'Wow!',
			'Oops',
			'No way!',
		],
		onSend: (message: string) =>
			console.log('Sent:', message),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Custom quick chat options for different contexts.',
			},
		},
	},
};

export const MinimalOptions: Story = {
	args: {
		options: ['Yes', 'No'],
		onSend: (message: string) =>
			console.log('Sent:', message),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Minimal quick chat for simple yes/no responses.',
			},
		},
	},
};
