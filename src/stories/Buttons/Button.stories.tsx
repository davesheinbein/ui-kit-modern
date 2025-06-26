import React from 'react';
import {
	Button,
	createButton,
	createButtonGroup,
	ButtonKind,
	ButtonProps,
} from '../../components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Button> = {
	title: 'Buttons/Button',
	component: Button,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY button component. Single component handles all button types through the "kind" prop and props. Use controls to explore all variants and states.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'danger',
				'success',
				'warning',
				'ghost',
				'link',
				'icon',
				'word',
				'copy-link',
				'go-back',
				'friends-toggle',
			],
			description:
				'Button kind - determines styling and behavior',
		},
		children: {
			control: 'text',
			description: 'Button text content',
		},
		icon: {
			control: 'text',
			description: 'Icon (emoji or text)',
		},
		label: {
			control: 'text',
			description: 'Accessibility label',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Button size',
		},
		loading: {
			control: 'boolean',
			description: 'Show loading state',
		},
		fullWidth: {
			control: 'boolean',
			description: 'Full width',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable button',
		},
		isSelected: {
			control: 'boolean',
			description: 'Selected (word/toggle)',
		},
		isActive: {
			control: 'boolean',
			description: 'Active (toggle)',
		},
		isLocked: {
			control: 'boolean',
			description: 'Locked/disabled (word)',
		},
		burnSuspect: {
			control: 'boolean',
			description: 'Burn suspect (word)',
		},
		isBurned: {
			control: 'boolean',
			description: 'Burned (word)',
		},
		word: {
			control: 'text',
			description: 'Word content (for word buttons)',
		},
		href: {
			control: 'text',
			description: 'Link URL (for link buttons)',
		},
		copyText: {
			control: 'text',
			description: 'Text to copy (for copy-link)',
		},
		imageUrl: {
			control: 'text',
			description: 'Image URL (friends toggle)',
		},
		userName: {
			control: 'text',
			description: 'User name (friends toggle)',
		},
		isAuthenticated: {
			control: 'boolean',
			description: 'Authenticated (friends toggle)',
		},
		onClick: {
			action: 'clicked',
			description: 'Click handler',
		},
	},
};
export default meta;
type Story = StoryObj<typeof Button>;

// --- Consolidated Stories ---

export const Playground: Story = {
	args: {
		kind: 'primary',
		children: 'Button',
		icon: '',
		loading: false,
		fullWidth: false,
		disabled: false,
		size: 'medium',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Use controls to explore all button variants, icons, sizes, and states.',
			},
		},
	},
};

export const Variants: Story = {
	render: (args) => (
		<div
			style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
		>
			<Button kind='primary'>Primary</Button>
			<Button kind='secondary'>Secondary</Button>
			<Button kind='danger'>Danger</Button>
			<Button kind='success'>Success</Button>
			<Button kind='warning'>Warning</Button>
			<Button kind='ghost'>Ghost</Button>
			<Button kind='link' href='https://example.com'>
				Link
			</Button>
		</div>
	),
	parameters: {
		docs: {
			description: { story: 'All main button variants.' },
		},
	},
};

export const WithIcon: Story = {
	render: (args) => (
		<div
			style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
		>
			<Button
				kind='primary'
				contentType='textIcon'
				icon='check'
			>
				Check
			</Button>
			<Button
				kind='secondary'
				contentType='textIcon'
				icon='close'
			>
				Close
			</Button>
			<Button
				kind='danger'
				contentType='textIcon'
				icon='warning'
			>
				Warning
			</Button>
			<Button
				kind='success'
				contentType='textIcon'
				icon='success'
			>
				Success
			</Button>
			<Button
				kind='warning'
				contentType='textIcon'
				icon='star'
			>
				Star
			</Button>
			<Button
				kind='primary'
				contentType='icon'
				icon='settings'
				label='Settings'
			/>
			<Button
				kind='secondary'
				contentType='icon'
				icon='user'
				label='User'
			/>
			<Button
				kind='danger'
				contentType='icon'
				icon='search'
				label='Search'
			/>
			<Button
				kind='success'
				contentType='icon'
				icon='heart'
				label='Heart'
			/>
			<Button
				kind='warning'
				contentType='icon'
				icon='bell'
				label='Bell'
			/>
			<Button
				kind='ghost'
				contentType='icon'
				icon='arrow-left'
				label='Arrow Left'
			/>
			<Button
				kind='ghost'
				contentType='icon'
				icon='arrow-right'
				label='Arrow Right'
			/>
			<Button
				kind='ghost'
				contentType='icon'
				icon='copy'
				label='Copy'
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Buttons with Font Awesome icons (icon-only and icon+text) using the Icons component.',
			},
		},
	},
};

export const Sizes: Story = {
	render: (args) => (
		<div
			style={{
				display: 'flex',
				gap: 16,
				alignItems: 'center',
			}}
		>
			<Button kind='primary' size='small'>
				Small
			</Button>
			<Button kind='primary' size='medium'>
				Medium
			</Button>
			<Button kind='primary' size='large'>
				Large
			</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Primary button in all sizes.',
			},
		},
	},
};

export const States: Story = {
	render: (args) => (
		<div
			style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
		>
			<Button kind='primary'>Normal</Button>
			<Button kind='primary' loading>
				Loading
			</Button>
			<Button kind='primary' disabled>
				Disabled
			</Button>
			<Button kind='primary' fullWidth>
				Full Width
			</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Primary button in different states.',
			},
		},
	},
};

export const WordButton: Story = {
	render: (args) => (
		<div
			style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
		>
			<Button kind='word' text='Default' />
			<Button kind='word' text='Selected' isSelected />
			<Button kind='word' text='Locked' isLocked />
			<Button kind='word' text='Suspect' burnSuspect />
			<Button kind='word' text='Burned' isBurned />
		</div>
	),
	parameters: {
		docs: {
			description: { story: 'Word button states.' },
		},
	},
};

export const CopyLink: Story = {
	args: {
		kind: 'copy-link',
		children: 'Copy Link',
		copyText: 'https://example.com',
	},
	parameters: {
		docs: {
			description: { story: 'Copy link button.' },
		},
	},
};

export const GoBack: Story = {
	args: {
		kind: 'go-back',
		label: 'Go Back',
	},
	parameters: {
		docs: {
			description: { story: 'Go back button.' },
		},
	},
};

export const FriendsToggle: Story = {
	render: (args) => (
		<div style={{ display: 'flex', gap: 16 }}>
			<Button
				kind='friends-toggle'
				isAuthenticated={false}
			/>
			<Button
				kind='friends-toggle'
				isAuthenticated={true}
				imageUrl='https://via.placeholder.com/36x36/2563eb/ffffff?text=JD'
				userName='John Doe'
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Friends toggle button (unauthenticated and authenticated).',
			},
		},
	},
};

export const AllKindsShowcase: Story = {
	render: (args) => {
		const buttonKinds = [
			'primary',
			'secondary',
			'danger',
			'success',
			'warning',
			'ghost',
			'word',
			'copy-link',
			'go-back',
			'friends-toggle',
		];
		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(150px, 1fr))',
					gap: 16,
				}}
			>
				{buttonKinds.map((kind) => (
					<Button
						key={kind}
						kind={kind as any}
						children={kind.replace('-', ' ')}
						icon={kind === 'primary' ? 'check' : undefined}
						contentType={
							kind === 'primary' ? 'textIcon' : 'text'
						}
						copyText={
							kind === 'copy-link' ?
								'https://example.com'
							:	undefined
						}
						text={kind === 'word' ? 'WORD' : undefined}
					/>
				))}
				{/* Icon-only showcase */}
				<Button
					kind='ghost'
					contentType='icon'
					icon='star'
					label='Star'
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Showcase of all available button kinds.',
			},
		},
	},
};
