import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	ModalSystemDemo,
	HookBasedDemo,
} from '../../components/Modal/ModalDemo';
import { SimpleModalFactory } from '../../components/Modal';

const meta: Meta = {
	title: 'Modals/Playground (Modal)',
	parameters: {
		docs: {
			description: {
				component: `
# DRY Modal System

The new DRY (Don't Repeat Yourself) modal system replaces all specific modal components with a unified, configuration-driven approach.

## Key Benefits

- **Single Source of Truth**: All modals use the same base system
- **Consistent API**: Every modal follows the same pattern
- **Easy to Extend**: Add new modal types by configuration
- **Type Safe**: Full TypeScript support with proper typing
- **Smaller Bundle**: No duplicate code across modal components
- **Better Maintainability**: Changes apply to all modals

## Migration from Old System

### Before (Specific Components)
\`\`\`tsx
import { EndGameModal, PreGameModal, PurchaseModal } from '../components';

<EndGameModal 
  message="Great job!"
  score={1200}
  win={true}
  onShare={() => {}}
/>
\`\`\`

### After (DRY Factory)
\`\`\`tsx
import { SimpleModalFactory } from '../Modal';

{SimpleModalFactory.endGame(
  open,
  onClose,
  onShare,
  { score: 1200, win: true }
)}
\`\`\`

## All Modal Types Supported

- **Game Modals**: pre-game, end-game, rules, statistics
- **VS Mode**: mode selection, room management
- **Commerce**: purchase, sign-in
- **Utility**: confirmation, alert, form
- **Custom**: any custom content

## Usage Patterns

1. **Direct Factory**: \`SimpleModalFactory.modalType()\`
2. **Hook-based**: \`useModal()\` for state management
3. **Legacy Wrappers**: Existing components still work (deprecated)
`,
			},
		},
		layout: 'fullscreen',
	},
};

export default meta;

export const DemoPlayground: StoryObj = {
	render: () => <ModalSystemDemo />,
	parameters: {
		docs: {
			description: {
				story:
					'Interactive demo showing all modal types created with the DRY system. Click buttons to see different modals in action.',
			},
		},
	},
};

export const HookBased: StoryObj = {
	render: () => <HookBasedDemo />,
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates hook-based modal management for complex workflows with chained modals.',
			},
		},
	},
};

// Individual modal type examples
export const GameModals: StoryObj = {
	render: () => {
		const [active, setActive] = React.useState<
			string | null
		>(null);

		return (
			<div style={{ padding: '2rem' }}>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						marginBottom: '2rem',
					}}
				>
					<button onClick={() => setActive('preGame')}>
						Pre-Game
					</button>
					<button onClick={() => setActive('endGame')}>
						End Game
					</button>
					<button onClick={() => setActive('rules')}>
						Rules
					</button>
					<button onClick={() => setActive('stats')}>
						Statistics
					</button>
				</div>

				{/* All using the same factory but different configurations */}
				{SimpleModalFactory.preGame(
					active === 'preGame',
					() => setActive(null),
					() => setActive(null),
					() => setActive(null)
				)}

				{SimpleModalFactory.endGame(
					active === 'endGame',
					() => setActive(null),
					() => setActive(null),
					{
						score: 1200,
						win: true,
						attemptsLeft: 3,
						burnBonus: 100,
					}
				)}

				{SimpleModalFactory.rules(
					active === 'rules',
					() => setActive(null),
					{ columnCount: 4, mode: 'daily' }
				)}

				{SimpleModalFactory.statistics(
					active === 'stats',
					() => setActive(null)
				)}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Game-specific modals all using the same factory with different configurations.',
			},
		},
	},
};

export const UtilityModals: StoryObj = {
	render: () => {
		const [active, setActive] = React.useState<
			string | null
		>(null);

		return (
			<div style={{ padding: '2rem' }}>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						marginBottom: '2rem',
					}}
				>
					<button onClick={() => setActive('confirm')}>
						Confirmation
					</button>
					<button onClick={() => setActive('alert')}>
						Alert
					</button>
					<button onClick={() => setActive('form')}>
						Form
					</button>
				</div>

				{SimpleModalFactory.confirmation(
					active === 'confirm',
					() => setActive(null),
					'Delete Item',
					'Are you sure you want to delete this item?',
					() => setActive(null)
				)}

				{SimpleModalFactory.alert(
					active === 'alert',
					() => setActive(null),
					'Success',
					'Operation completed successfully!'
				)}

				{SimpleModalFactory.form(
					active === 'form',
					() => setActive(null),
					'User Settings',
					() => setActive(null),
					() => setActive(null),
					'Save Changes'
				)}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Utility modals for confirmations, alerts, and forms.',
			},
		},
	},
};

export const VSModeModals: StoryObj = {
	render: () => {
		const [active, setActive] = React.useState<
			string | null
		>(null);

		return (
			<div style={{ padding: '2rem' }}>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						marginBottom: '2rem',
					}}
				>
					<button onClick={() => setActive('vsMode')}>
						VS Mode Selection
					</button>
					<button onClick={() => setActive('vsRoom')}>
						VS Room
					</button>
				</div>

				{SimpleModalFactory.vsMode(
					active === 'vsMode',
					() => setActive(null),
					(mode: string) => console.log('Selected:', mode)
				)}

				{SimpleModalFactory.vsRoom(
					active === 'vsRoom',
					() => setActive(null),
					(code: string) =>
						console.log('Creating room:', code),
					(code: string) =>
						console.log('Joining room:', code)
				)}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'VS mode modals for multiplayer game features.',
			},
		},
	},
};
