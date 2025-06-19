/**
 * Modal System Demo - Showing the DRY modal system in action
 */

import React, { useState } from 'react';
import { SimpleModalFactory, useModal } from '../Modal';

export const ModalSystemDemo = () => {
	const [activeModal, setActiveModal] = useState<
		string | null
	>(null);

	const gameData = {
		score: 1200,
		win: true,
		attemptsLeft: 3,
		burnBonus: 100,
		finishTime: '2:35',
	};

	const mockItem = {
		id: 'premium-theme',
		name: 'Premium Theme',
		price: 500,
	};

	const mockUser = {
		id: 1,
		name: 'John Doe',
	};

	const close = () => setActiveModal(null);

	return (
		<div style={{ padding: '2rem' }}>
			<h1>DRY Modal System Demo</h1>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(200px, 1fr))',
					gap: '1rem',
					marginBottom: '2rem',
				}}
			>
				<button onClick={() => setActiveModal('preGame')}>
					Pre-Game Modal
				</button>

				<button onClick={() => setActiveModal('endGame')}>
					End Game Modal
				</button>

				<button onClick={() => setActiveModal('rules')}>
					Rules Modal
				</button>

				<button
					onClick={() => setActiveModal('statistics')}
				>
					Statistics Modal
				</button>

				<button onClick={() => setActiveModal('vsMode')}>
					VS Mode Modal
				</button>

				<button onClick={() => setActiveModal('vsRoom')}>
					VS Room Modal
				</button>

				<button onClick={() => setActiveModal('purchase')}>
					Purchase Modal
				</button>

				<button onClick={() => setActiveModal('signIn')}>
					Sign In Modal
				</button>

				<button
					onClick={() => setActiveModal('confirmation')}
				>
					Confirmation Modal
				</button>

				<button onClick={() => setActiveModal('alert')}>
					Alert Modal
				</button>

				<button onClick={() => setActiveModal('form')}>
					Form Modal
				</button>

				<button
					onClick={() => setActiveModal('customPuzzle')}
				>
					Custom Puzzle Modal
				</button>
			</div>

			{/* All modals created with single factory - DRY! */}

			{/* Game Flow Modals */}
			{SimpleModalFactory.preGame(
				activeModal === 'preGame',
				close,
				() => {
					console.log('Ready to start!');
					close();
				},
				() => {
					console.log('Going home');
					close();
				}
			)}

			{SimpleModalFactory.endGame(
				activeModal === 'endGame',
				close,
				() => {
					console.log('Sharing results');
					close();
				},
				gameData
			)}

			{SimpleModalFactory.rules(
				activeModal === 'rules',
				close,
				{
					columnCount: 4,
					mode: 'daily',
					wildcardsActive: false,
				}
			)}

			{SimpleModalFactory.statistics(
				activeModal === 'statistics',
				close
			)}

			{/* VS Mode Modals */}
			{SimpleModalFactory.vsMode(
				activeModal === 'vsMode',
				close,
				(mode: string) => {
					console.log('Selected VS mode:', mode);
					close();
				}
			)}

			{SimpleModalFactory.vsRoom(
				activeModal === 'vsRoom',
				close,
				(code: string) => {
					console.log('Creating room with code:', code);
					close();
				},
				(code: string) => {
					console.log('Joining room with code:', code);
					close();
				}
			)}

			{/* Commerce Modals */}
			{SimpleModalFactory.purchase(
				activeModal === 'purchase',
				close,
				mockItem,
				async (item: any) => {
					console.log('Purchasing item:', item);
					// Simulate purchase
					await new Promise((resolve) =>
						setTimeout(resolve, 1000)
					);
					close();
				},
				mockUser
			)}

			{SimpleModalFactory.signIn(
				activeModal === 'signIn',
				close,
				() => {
					console.log('Signing in');
					close();
				}
			)}

			{/* Utility Modals */}
			{SimpleModalFactory.confirmation(
				activeModal === 'confirmation',
				close,
				'Delete Item',
				'Are you sure you want to delete this item? This action cannot be undone.',
				() => {
					console.log('Item deleted');
					close();
				},
				close
			)}

			{SimpleModalFactory.alert(
				activeModal === 'alert',
				close,
				'Success',
				'Your operation completed successfully!'
			)}

			{SimpleModalFactory.form(
				activeModal === 'form',
				close,
				'Settings',
				() => {
					console.log('Form submitted');
					close();
				},
				close,
				'Save Settings'
			)}

			{SimpleModalFactory.customPuzzle(
				activeModal === 'customPuzzle',
				close,
				<div
					style={{ padding: '2rem', textAlign: 'center' }}
				>
					<h3>Create Custom Puzzle</h3>
					<p>This is custom content inside a modal!</p>
					<button onClick={close}>Close</button>
				</div>
			)}
		</div>
	);
};

export const HookBasedDemo = () => {
	const { modals, showConfirmation, showAlert } =
		useModal();

	const handleAction = (action: string) => {
		showConfirmation(
			`confirm-${action}`,
			`Confirm ${action}`,
			`Are you sure you want to ${action}?`,
			() => {
				showAlert(
					`success-${action}`,
					'Success',
					`${action} completed successfully!`
				);
			}
		);
	};

	return (
		<div style={{ padding: '2rem' }}>
			<h2>Hook-Based Modal Management</h2>

			<div
				style={{
					display: 'flex',
					gap: '1rem',
					marginBottom: '2rem',
				}}
			>
				<button onClick={() => handleAction('delete')}>
					Delete Item
				</button>

				<button onClick={() => handleAction('save')}>
					Save Changes
				</button>

				<button onClick={() => handleAction('publish')}>
					Publish Content
				</button>
			</div>

			{/* Modals are automatically rendered */}
			{modals}
		</div>
	);
};

export default {
	ModalSystemDemo,
	HookBasedDemo,
};
