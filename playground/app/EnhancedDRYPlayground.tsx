import React from 'react';
import {
	UnifiedButton,
	ButtonFactory,
	B,
	ButtonPresets,
	BUTTON_CONFIGURATIONS,
} from '../../src/components/Button';

/**
 * Enhanced DRY Playground - Showcasing the ultimate DRY button system
 *
 * This playground demonstrates how ALL buttons in the UI kit can now be created
 * using a single UnifiedButton component with different 'kind' props, or
 * through ultra-DRY factory methods.
 */

const EnhancedDRYPlayground: React.FC = () => {
	const handleClick = (action: string) => () => {
		console.log(`${action} clicked!`);
	};

	return (
		<div
			style={{
				padding: '2rem',
				maxWidth: '1200px',
				margin: '0 auto',
				fontFamily: 'system-ui, sans-serif',
			}}
		>
			<h1>🚀 Enhanced DRY Button System Playground</h1>
			<p
				style={{
					fontSize: '1.1rem',
					color: '#666',
					marginBottom: '2rem',
				}}
			>
				Single UnifiedButton component + ButtonFactory = ANY
				button with minimal code!
			</p>

			{/* Section 1: Basic UnifiedButton Usage */}
			<section style={{ marginBottom: '3rem' }}>
				<h2
					style={{
						borderBottom: '2px solid #2563eb',
						paddingBottom: '0.5rem',
					}}
				>
					1. Single Component, Multiple Kinds
				</h2>
				<p style={{ marginBottom: '1rem', color: '#666' }}>
					One UnifiedButton component handles ALL button
					types through the 'kind' prop:
				</p>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(150px, 1fr))',
						gap: '1rem',
						marginBottom: '1rem',
					}}
				>
					<UnifiedButton
						kind='primary'
						onClick={handleClick('Primary')}
					>
						Primary
					</UnifiedButton>
					<UnifiedButton
						kind='secondary'
						onClick={handleClick('Secondary')}
					>
						Secondary
					</UnifiedButton>
					<UnifiedButton
						kind='danger'
						onClick={handleClick('Danger')}
					>
						Danger
					</UnifiedButton>
					<UnifiedButton
						kind='success'
						onClick={handleClick('Success')}
					>
						Success
					</UnifiedButton>
					<UnifiedButton
						kind='warning'
						onClick={handleClick('Warning')}
					>
						Warning
					</UnifiedButton>
					<UnifiedButton
						kind='ghost'
						onClick={handleClick('Ghost')}
					>
						Ghost
					</UnifiedButton>
				</div>

				<h3>Specialized UI Buttons</h3>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
						marginBottom: '1rem',
					}}
				>
					<UnifiedButton
						kind='icon'
						icon='⚙️'
						onClick={handleClick('Settings')}
						label='Settings'
					/>
					<UnifiedButton
						kind='close'
						onClick={handleClick('Close')}
					/>
					<UnifiedButton
						kind='copy-link'
						copyText='https://example.com'
						onClick={handleClick('Copy')}
					/>
					<UnifiedButton
						kind='go-back'
						onClick={handleClick('Back')}
					/>
					<UnifiedButton
						kind='friends-toggle'
						isActive
						onClick={handleClick('Friends')}
					/>
				</div>

				<h3>Game-Specific Buttons</h3>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					<UnifiedButton
						kind='word'
						text='HELLO'
						isSelected
						onClick={handleClick('Word')}
					/>
					<UnifiedButton
						kind='vs-quick-chat'
						text='GG!'
						onClick={handleClick('Quick Chat')}
					/>
					<UnifiedButton
						kind='pregame-ready'
						onClick={handleClick('Ready')}
					/>
					<UnifiedButton
						kind='vs-status-emote'
						icon='😄'
						onClick={handleClick('Emote')}
					/>
				</div>
			</section>

			{/* Section 2: ButtonFactory Usage */}
			<section style={{ marginBottom: '3rem' }}>
				<h2
					style={{
						borderBottom: '2px solid #10b981',
						paddingBottom: '0.5rem',
					}}
				>
					2. ButtonFactory - Programmatic Creation
				</h2>
				<p style={{ marginBottom: '1rem', color: '#666' }}>
					Create buttons programmatically with the
					ButtonFactory:
				</p>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					{ButtonFactory.create('primary', {
						onClick: handleClick('Factory Primary'),
						text: 'Factory Button',
					})}
					{ButtonFactory.create('modal-confirm', {
						onClick: handleClick('Confirm'),
					})}
					{ButtonFactory.create('purchase-buy', {
						onClick: handleClick('Buy'),
						text: 'Buy $9.99',
					})}
					{ButtonFactory.create('form-submit', {
						onClick: handleClick('Submit'),
					})}
				</div>
			</section>

			{/* Section 3: Ultra-DRY Shortcuts */}
			<section style={{ marginBottom: '3rem' }}>
				<h2
					style={{
						borderBottom: '2px solid #f59e0b',
						paddingBottom: '0.5rem',
					}}
				>
					3. Ultra-DRY Shortcuts (B.*)
				</h2>
				<p style={{ marginBottom: '1rem', color: '#666' }}>
					Maximum DRY with single-letter alias and smart
					defaults:
				</p>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					{B.save(handleClick('Save'))}
					{B.cancel(handleClick('Cancel'))}
					{B.delete(handleClick('Delete'))}
					{B.edit(handleClick('Edit'), 'Edit Profile')}
					{B.add(handleClick('Add'), 'Add Item')}
					{B.copy('https://github.com', 'Copy Repo')}
					{B.icon('🎮', handleClick('Game'), 'Game Mode')}
					{B.back(handleClick('Back'))}
					{B.close(handleClick('Close'))}
				</div>
			</section>

			{/* Section 4: Button Groups & Presets */}
			<section style={{ marginBottom: '3rem' }}>
				<h2
					style={{
						borderBottom: '2px solid #8b5cf6',
						paddingBottom: '0.5rem',
					}}
				>
					4. Button Groups & Presets
				</h2>

				<div style={{ marginBottom: '2rem' }}>
					<h3>Modal Actions</h3>
					<div
						style={{
							border: '1px solid #e5e7eb',
							borderRadius: '8px',
							padding: '1rem',
							marginBottom: '1rem',
						}}
					>
						<p>Confirm deletion of user account?</p>
						<div
							style={{
								display: 'flex',
								gap: '1rem',
								justifyContent: 'flex-end',
							}}
						>
							{(() => {
								const actions =
									ButtonFactory.createModalActions({
										onConfirm: handleClick(
											'Confirm Delete'
										),
										onCancel: handleClick('Cancel Delete'),
										confirmText: 'Delete Account',
										cancelText: 'Keep Account',
									});
								return [actions.confirm, actions.cancel];
							})()}
						</div>
					</div>
				</div>

				<div style={{ marginBottom: '2rem' }}>
					<h3>Form Actions</h3>
					<div
						style={{
							border: '1px solid #e5e7eb',
							borderRadius: '8px',
							padding: '1rem',
						}}
					>
						<p>User Profile Form</p>
						<div style={{ display: 'flex', gap: '1rem' }}>
							{(() => {
								const actions =
									ButtonFactory.createFormActions({
										onSubmit: handleClick('Submit Form'),
										onReset: handleClick('Reset Form'),
										onCancel: handleClick('Cancel Form'),
									});
								return [
									actions.submit,
									actions.reset,
									actions.cancel,
								];
							})()}
						</div>
					</div>
				</div>

				<div>
					<h3>Preset Patterns</h3>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<div
							style={{
								border: '1px solid #e5e7eb',
								borderRadius: '8px',
								padding: '1rem',
							}}
						>
							<p>
								<strong>
									Delete Confirmation Pattern:
								</strong>
							</p>
							<div style={{ display: 'flex', gap: '1rem' }}>
								{(() => {
									const pattern =
										ButtonPresets.deleteConfirmation(
											handleClick('Delete User'),
											handleClick('Cancel Delete'),
											'User'
										);
									return [pattern.delete, pattern.cancel];
								})()}
							</div>
						</div>

						<div
							style={{
								border: '1px solid #e5e7eb',
								borderRadius: '8px',
								padding: '1rem',
							}}
						>
							<p>
								<strong>Save Form Pattern:</strong>
							</p>
							<div style={{ display: 'flex', gap: '1rem' }}>
								{(() => {
									const pattern = ButtonPresets.saveForm(
										handleClick('Save Changes'),
										handleClick('Discard Changes')
									);
									return [pattern.save, pattern.cancel];
								})()}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 5: Real-world Examples */}
			<section style={{ marginBottom: '3rem' }}>
				<h2
					style={{
						borderBottom: '2px solid #ef4444',
						paddingBottom: '0.5rem',
					}}
				>
					5. Real-World UI Patterns
				</h2>

				<div
					style={{
						display: 'grid',
						gap: '2rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{/* E-commerce Cart */}
					<div
						style={{
							border: '1px solid #e5e7eb',
							borderRadius: '12px',
							padding: '1.5rem',
							backgroundColor: '#f9fafb',
						}}
					>
						<h4>E-commerce Product</h4>
						<p>Premium Widget - $29.99</p>
						<div
							style={{
								display: 'flex',
								gap: '0.5rem',
								marginTop: '1rem',
							}}
						>
							{B.create('purchase-buy', {
								onClick: handleClick('Add to Cart'),
								text: 'Add to Cart',
							})}
							{B.create('purchase-gift', {
								onClick: handleClick('Gift'),
								text: 'Buy as Gift',
							})}
							{B.create('copy-link', {
								copyText: 'https://shop.com/widget',
								text: 'Share',
							})}
						</div>
					</div>

					{/* Game Lobby */}
					<div
						style={{
							border: '1px solid #e5e7eb',
							borderRadius: '12px',
							padding: '1.5rem',
							backgroundColor: '#f0f9ff',
						}}
					>
						<h4>Game Lobby</h4>
						<p>Waiting for players...</p>
						<div
							style={{
								display: 'flex',
								gap: '0.5rem',
								marginTop: '1rem',
								flexWrap: 'wrap',
							}}
						>
							{B.create('pregame-ready', {
								onClick: handleClick('Ready Up'),
							})}
							{B.create('vs-quick-chat', {
								onClick: handleClick('Quick Chat'),
								text: 'Hello!',
							})}
							{B.create('friends-toggle', {
								onClick: handleClick('Invite Friends'),
								isActive: false,
							})}
							{B.create('go-back', {
								onClick: handleClick('Leave Lobby'),
							})}
						</div>
					</div>

					{/* Settings Panel */}
					<div
						style={{
							border: '1px solid #e5e7eb',
							borderRadius: '12px',
							padding: '1.5rem',
							backgroundColor: '#fefce8',
						}}
					>
						<h4>User Settings</h4>
						<p>Profile configuration</p>
						<div
							style={{
								display: 'flex',
								gap: '0.5rem',
								marginTop: '1rem',
								flexWrap: 'wrap',
							}}
						>
							{B.save(
								handleClick('Save Settings'),
								'Save Changes'
							)}
							{B.create('form-reset', {
								onClick: handleClick('Reset'),
								text: 'Reset to Default',
							})}
							{B.create('danger', {
								onClick: handleClick('Delete Account'),
								text: 'Delete Account',
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Section 6: Code Examples */}
			<section>
				<h2
					style={{
						borderBottom: '2px solid #6b7280',
						paddingBottom: '0.5rem',
					}}
				>
					6. Code Examples
				</h2>
				<div
					style={{
						backgroundColor: '#1f2937',
						color: '#e5e7eb',
						padding: '1.5rem',
						borderRadius: '8px',
						fontFamily: 'Monaco, Consolas, monospace',
						fontSize: '0.9rem',
						overflow: 'auto',
					}}
				>
					<div style={{ marginBottom: '1rem' }}>
						<div
							style={{
								color: '#9ca3af',
								marginBottom: '0.5rem',
							}}
						>
							// Before (Multiple components):
						</div>
						<div style={{ color: '#fca5a5' }}>
							&lt;PrimaryButton onClick={`{handleSave}`}
							&gt;Save&lt;/PrimaryButton&gt;
						</div>
						<div style={{ color: '#fca5a5' }}>
							&lt;IconButton icon="⚙️" onClick=
							{`{handleSettings}`} /&gt;
						</div>
						<div style={{ color: '#fca5a5' }}>
							&lt;CloseButton onClick={`{handleClose}`}{' '}
							/&gt;
						</div>
					</div>

					<div style={{ marginBottom: '1rem' }}>
						<div
							style={{
								color: '#9ca3af',
								marginBottom: '0.5rem',
							}}
						>
							// After (Single component):
						</div>
						<div style={{ color: '#86efac' }}>
							&lt;UnifiedButton kind="primary" onClick=
							{`{handleSave}`}&gt;Save&lt;/UnifiedButton&gt;
						</div>
						<div style={{ color: '#86efac' }}>
							&lt;UnifiedButton kind="icon" icon="⚙️"
							onClick={`{handleSettings}`} /&gt;
						</div>
						<div style={{ color: '#86efac' }}>
							&lt;UnifiedButton kind="close" onClick=
							{`{handleClose}`} /&gt;
						</div>
					</div>

					<div>
						<div
							style={{
								color: '#9ca3af',
								marginBottom: '0.5rem',
							}}
						>
							// Ultra-DRY with factory:
						</div>
						<div
							style={{ color: '#60a5fa' }}
						>{`{B.save(handleSave)}`}</div>
						<div
							style={{ color: '#60a5fa' }}
						>{`{B.icon('⚙️', handleSettings, 'Settings')}`}</div>
						<div
							style={{ color: '#60a5fa' }}
						>{`{B.close(handleClose)}`}</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default EnhancedDRYPlayground;
