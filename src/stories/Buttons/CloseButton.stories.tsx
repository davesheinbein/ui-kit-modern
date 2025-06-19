import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/Close (Button)',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Close button using UnifiedButton with kind="close". Can display with both icon and text (default) or icon-only. Use close-icon-only kind for icon-only buttons.',
			},
		},
	},
	argTypes: {
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
		label: {
			control: 'text',
			description:
				'Accessibility label for the button (sets aria-label)',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the button',
		},
		kind: {
			control: false,
			description:
				'Button kind (fixed to "close" for this story)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		kind: 'close',
		onClick: () => {},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Default close button with icon and text. Shows "✕ Close".',
			},
		},
	},
};

export const IconOnly: Story = {
	args: {
		kind: 'close-icon-only',
		onClick: () => {},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Icon-only close button. Shows only "✕" without text.',
			},
		},
	},
};

export const WithCustomText: Story = {
	args: {
		kind: 'close',
		text: 'Dismiss',
		onClick: () => {},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Close button with custom text. Shows "✕ Dismiss".',
			},
		},
	},
};

export const WithCustomLabel: Story = {
	args: {
		kind: 'close',
		onClick: () => {},
		label: 'Close Dialog',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Close button with custom accessibility label. The label prop sets the aria-label attribute for screen readers.',
			},
		},
	},
};

export const WithCustomStyle: Story = {
	args: {
		kind: 'close',
		onClick: () => {},
		style: {
			color: 'red',
			fontSize: '24px',
		},
	},
};

export const WithCustomClass: Story = {
	args: {
		kind: 'close',
		onClick: () => {},
		className: 'custom-close-button',
	},
};

export const UsingFactory: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '8px',
				flexWrap: 'wrap',
				alignItems: 'center',
			}}
		>
			{ButtonFactory.create('close', {
				onClick: () => console.log('Close with text'),
			})}
			{ButtonFactory.create('close-icon-only', {
				onClick: () => console.log('Icon only close'),
			})}
			{ButtonFactory.create('close', {
				onClick: () => console.log('Custom text close'),
				text: 'Dismiss',
			})}
			{ButtonFactory.create('close-icon-only', {
				onClick: () => console.log('Icon only with label'),
				label: 'Close Panel',
			})}
			{ButtonFactory.create('close', {
				onClick: () => console.log('Disabled close'),
				disabled: true,
			})}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Close buttons created using ButtonFactory showing both icon+text and icon-only variations.',
			},
		},
	},
};

// Enhanced modal component showing both variations
const ModalLikeComponent = () => {
	const [iconOnlyOpen, setIconOnlyOpen] =
		React.useState(true);
	const [iconTextOpen, setIconTextOpen] =
		React.useState(true);

	return (
		<div
			style={{
				display: 'flex',
				gap: '20px',
				flexWrap: 'wrap',
			}}
		>
			{/* Icon-only modal */}
			{iconOnlyOpen ?
				<div
					style={{
						position: 'relative',
						background: 'white',
						border: '1px solid #ccc',
						borderRadius: '8px',
						padding: '20px',
						maxWidth: '300px',
						boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: '8px',
							right: '8px',
						}}
					>
						<UnifiedButton
							kind='close-icon-only'
							onClick={() => setIconOnlyOpen(false)}
						/>
					</div>
					<h4>Icon-Only Close</h4>
					<p>
						This modal uses{' '}
						<code>kind="close-icon-only"</code> for a
						minimal UI.
					</p>
				</div>
			:	<div
					style={{
						padding: '20px',
						border: '1px dashed #ccc',
						borderRadius: '8px',
						maxWidth: '300px',
					}}
				>
					<p>Icon-only modal closed!</p>
					<button onClick={() => setIconOnlyOpen(true)}>
						Reopen
					</button>
				</div>
			}

			{/* Icon + text modal */}
			{iconTextOpen ?
				<div
					style={{
						position: 'relative',
						background: 'white',
						border: '1px solid #ccc',
						borderRadius: '8px',
						padding: '20px',
						maxWidth: '300px',
						boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: '8px',
							right: '8px',
						}}
					>
						<UnifiedButton
							kind='close'
							onClick={() => setIconTextOpen(false)}
						/>
					</div>
					<h4>Icon + Text Close</h4>
					<p>
						This modal uses <code>kind="close"</code>{' '}
						showing both icon and text.
					</p>
				</div>
			:	<div
					style={{
						padding: '20px',
						border: '1px dashed #ccc',
						borderRadius: '8px',
						maxWidth: '300px',
					}}
				>
					<p>Icon+text modal closed!</p>
					<button onClick={() => setIconTextOpen(true)}>
						Reopen
					</button>
				</div>
			}
		</div>
	);
};

export const CloseButtonInModal: Story = {
	render: () => <ModalLikeComponent />,
	parameters: {
		docs: {
			description: {
				story:
					'Comparison of icon-only vs icon+text close buttons in modal contexts. Shows how different kinds work in real modal scenarios.',
			},
		},
	},
};

export const CloseButtonVariations: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '16px',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<div>
				<h4>Default Close Button</h4>
				<UnifiedButton
					kind='close'
					onClick={() => alert('Close clicked!')}
				/>
			</div>

			<div>
				<h4>Close with Custom Icon</h4>
				<UnifiedButton
					kind='close'
					icon='×'
					onClick={() => alert('Custom close clicked!')}
				/>
			</div>

			<div>
				<h4>Close with Custom Aria Label</h4>
				<UnifiedButton
					kind='close'
					label='Close Dialog Box'
					onClick={() => alert('Accessible close clicked!')}
				/>
			</div>

			<div>
				<h4>Disabled Close Button</h4>
				<UnifiedButton
					kind='close'
					disabled
					onClick={() => alert('This should not fire')}
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Various close button configurations - all icon-only without text.',
			},
		},
	},
};

export const CloseButtonAccessibility: Story = {
	render: () => (
		<div style={{ padding: '20px' }}>
			<h3>Accessibility Test - Custom Labels</h3>
			<p>
				Close buttons should have proper ARIA labels for
				screen readers. The label prop allows customization:
			</p>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(250px, 1fr))',
					gap: '16px',
					marginTop: '16px',
				}}
			>
				<div
					style={{
						padding: '12px',
						border: '1px solid #e0e0e0',
						borderRadius: '8px',
					}}
				>
					<h4>Default Label</h4>
					<UnifiedButton
						kind='close'
						onClick={() => alert('Default close')}
					/>
					<p
						style={{
							fontSize: '12px',
							color: '#666',
							marginTop: '8px',
						}}
					>
						Uses default: "Close"
					</p>
				</div>

				<div
					style={{
						padding: '12px',
						border: '1px solid #e0e0e0',
						borderRadius: '8px',
					}}
				>
					<h4>Custom Label</h4>
					<UnifiedButton
						kind='close'
						label='Close notification'
						onClick={() => alert('Notification close')}
					/>
					<p
						style={{
							fontSize: '12px',
							color: '#666',
							marginTop: '8px',
						}}
					>
						label="Close notification"
					</p>
				</div>

				<div
					style={{
						padding: '12px',
						border: '1px solid #e0e0e0',
						borderRadius: '8px',
					}}
				>
					<h4>Context-Specific</h4>
					<UnifiedButton
						kind='close'
						label='Dismiss error alert'
						onClick={() => alert('Error dismiss')}
					/>
					<p
						style={{
							fontSize: '12px',
							color: '#666',
							marginTop: '8px',
						}}
					>
						label="Dismiss error alert"
					</p>
				</div>

				<div
					style={{
						padding: '12px',
						border: '1px solid #e0e0e0',
						borderRadius: '8px',
					}}
				>
					<h4>Modal Context</h4>
					<UnifiedButton
						kind='close'
						label='Close settings dialog'
						onClick={() => alert('Modal close')}
					/>
					<p
						style={{
							fontSize: '12px',
							color: '#666',
							marginTop: '8px',
						}}
					>
						label="Close settings dialog"
					</p>
				</div>
			</div>

			<div
				style={{
					marginTop: '20px',
					padding: '16px',
					backgroundColor: '#f0f8ff',
					borderRadius: '8px',
				}}
			>
				<h4>How to Use Custom Labels:</h4>
				<p>
					Use the <code>label</code> prop to provide
					context-specific accessibility labels:
				</p>
				<pre
					style={{
						backgroundColor: '#f5f5f5',
						padding: '8px',
						borderRadius: '4px',
						fontSize: '12px',
					}}
				>
					{`<UnifiedButton 
  kind="close" 
  label="Close notification panel"
  onClick={handleClose} 
/>`}
				</pre>
			</div>

			<p
				style={{
					marginTop: '16px',
					fontSize: '14px',
					color: '#666',
				}}
			>
				💡 Tip: Right-click and inspect these buttons to
				verify they have proper aria-label attributes.
			</p>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Close buttons with different accessibility labels. Use the label prop to provide context-specific descriptions for screen readers.',
			},
		},
	},
};

export const InteractiveLabel: Story = {
	args: {
		kind: 'close',
		onClick: () => alert('Close button clicked!'),
		label: 'Close modal', // This will be editable in Storybook controls
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive close button where you can modify the label prop in the Controls panel below. The label sets the aria-label attribute for accessibility.',
			},
		},
	},
};

export const AllVariations: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '16px',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<div>
				<h4>Icon + Text (Default)</h4>
				<UnifiedButton
					kind='close'
					onClick={() => alert('Close with text!')}
				/>
			</div>

			<div>
				<h4>Icon Only</h4>
				<UnifiedButton
					kind='close-icon-only'
					onClick={() => alert('Icon only close!')}
				/>
			</div>

			<div>
				<h4>Custom Text</h4>
				<UnifiedButton
					kind='close'
					text='Dismiss'
					onClick={() => alert('Custom text close!')}
				/>
			</div>

			<div>
				<h4>Icon Only with Custom Label</h4>
				<UnifiedButton
					kind='close-icon-only'
					label='Close dialog'
					onClick={() =>
						alert('Icon only with custom label!')
					}
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All close button variations: icon+text, icon-only, custom text, and custom accessibility labels.',
			},
		},
	},
};
