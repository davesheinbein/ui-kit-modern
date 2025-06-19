import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

interface PurchaseItem {
	name: string;
	price: number;
	description: string;
}

// Create a wrapper component for Storybook compatibility
const PurchaseModalWrapper = ({
	open,
	onClose,
	onPurchase,
	item,
	loading = false,
	error = null,
}: {
	open: boolean;
	onClose: () => void;
	onPurchase: () => void;
	item: PurchaseItem;
	loading?: boolean;
	error?: string | null;
}) => {
	return (
		<ModalFactory
			kind='purchase'
			open={open}
			title='Purchase Item'
			onClose={onClose}
			onConfirm={onPurchase}
			onCancel={onClose}
			confirmText={
				loading ? 'Processing...' : (
					`Purchase for $${item.price}`
				)
			}
			cancelText='Cancel'
		>
			<div style={{ padding: '1rem 0' }}>
				<div style={{ marginBottom: '1rem' }}>
					<h3
						style={{
							margin: '0 0 0.5rem 0',
							fontSize: '1.2rem',
						}}
					>
						{item.name}
					</h3>
					<p
						style={{
							margin: '0 0 0.5rem 0',
							color: '#666',
						}}
					>
						{item.description}
					</p>
					<div
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							color: '#007bff',
						}}
					>
						${item.price}
					</div>
				</div>
				{error && (
					<div
						style={{
							padding: '0.75rem',
							backgroundColor: '#f8d7da',
							color: '#721c24',
							borderRadius: '4px',
							marginBottom: '1rem',
						}}
					>
						{error}
					</div>
				)}
				{loading && (
					<div
						style={{ textAlign: 'center', color: '#666' }}
					>
						Processing your purchase...
					</div>
				)}
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof PurchaseModalWrapper> = {
	title: 'Modals/Purchase Modal (Modal)',
	component: PurchaseModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Modal component for purchasing items with loading, error, and success states. Now powered by the DRY modal system.',
			},
		},
	},
	argTypes: {
		item: {
			control: 'object',
			description:
				'Item to be purchased with price, name, description',
		},
		onClose: {
			action: 'closed',
			description:
				'Function called when modal should be closed',
		},
		onPurchase: {
			action: 'purchased',
			description:
				'Function called when purchase is confirmed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof PurchaseModalWrapper>;

const mockItem = {
	name: 'Premium Theme',
	description:
		'A beautiful dark theme with gradient accents and modern styling.',
	price: 5.99,
};

const mockConsumableItem = {
	name: 'Super Hint',
	description:
		"Reveals one correct connection when you're stuck.",
	price: 0.99,
};

export const Default: Story = {
	args: {
		open: true,
		item: mockItem,
		onClose: () => {},
		onPurchase: () => {},
	},
};

export const ConsumableItem: Story = {
	args: {
		open: true,
		item: mockConsumableItem,
		onClose: () => {},
		onPurchase: () => {},
	},
};

export const Loading: Story = {
	args: {
		open: true,
		item: mockItem,
		loading: true,
		onClose: () => {},
		onPurchase: () => {},
	},
};

export const WithError: Story = {
	args: {
		open: true,
		item: mockItem,
		error:
			'Insufficient funds. Please add more coins to your account.',
		onClose: () => {},
		onPurchase: () => {},
	},
};
