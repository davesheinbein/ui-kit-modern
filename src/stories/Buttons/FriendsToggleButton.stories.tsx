import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UnifiedButton } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/FriendsToggleButton',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Friends toggle button integrated into the unified button system. ' +
					'Shows profile image when authenticated, or a default friends icon when not authenticated.',
			},
		},
	},
	argTypes: {
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		imageUrl: {
			control: 'text',
			description: 'Profile image URL when authenticated',
		},
		userName: {
			control: 'text',
			description: 'User name for accessibility',
		},
		isAuthenticated: {
			control: 'boolean',
			description:
				'Whether user is authenticated (shows profile image)',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		kind: 'friends-toggle',
		onClick: () => console.log('Friends toggle clicked'),
		isAuthenticated: false,
	},
};

export const Authenticated: Story = {
	args: {
		kind: 'friends-toggle',
		onClick: () => console.log('Friends toggle clicked'),
		isAuthenticated: true,
		imageUrl:
			'https://via.placeholder.com/36x36/2563eb/ffffff?text=JD',
		userName: 'John Doe',
	},
};

export const UnauthenticatedWithIcon: Story = {
	args: {
		kind: 'friends-toggle',
		onClick: () => console.log('Friends toggle clicked'),
		isAuthenticated: false,
		userName: 'Guest User',
	},
};
