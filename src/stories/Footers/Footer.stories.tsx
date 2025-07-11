import React from 'react';
import { Footer } from '../../components/Footer';
import type { Meta, StoryObj } from '@storybook/react';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Footer> = {
	title: 'Footers/Footer',
	component: Footer,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A flexible footer component with configurable left, center, and right content sections, built-in copyright and navigation links support.',
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const App: Story = {
	args: {
		kind: 'app',
	},
};

export const Corporate: Story = {
	args: {
		kind: 'corporate',
	},
};

export const Custom: Story = {
	args: {
		kind: 'custom',
		leftContent: <span>🎯 Puzzle Game v2.1.0</span>,
		centerContent: <span>Made with ❤️</span>,
		rightContent: <span>Status: Online</span>,
	},
};

export const Landing: Story = {
	args: {
		kind: 'landing',
	},
};

export const Minimal: Story = {
	args: {
		kind: 'minimal',
	},
};

export const Simple: Story = {
	args: {
		kind: 'simple',
	},
};

export const Social: Story = {
	args: {
		kind: 'social',
	},
};

export const Standard: Story = {
	args: {
		kind: 'standard',
	},
};

export const Sticky: Story = {
	args: {
		kind: 'sticky',
	},
};
