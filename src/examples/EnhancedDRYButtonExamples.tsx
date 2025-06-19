import React from 'react';
import {
	UnifiedButton,
	ButtonFactory,
	B,
	ButtonPresets,
	BUTTON_CONFIGURATIONS,
	ExtendedButtonKind,
} from '../components/Button';

/**
 * Enhanced DRY Button System Examples
 *
 * This demonstrates the ultimate DRY approach to button creation,
 * where ANY button can be created with minimal code using:
 *
 * 1. UnifiedButton with configuration-driven approach
 * 2. ButtonFactory for programmatic creation
 * 3. Ultra-short aliases for common patterns
 * 4. Preset groups for complex UI patterns
 */

const EnhancedDRYButtonExamples: React.FC = () => {
	const handleClick = () => console.log('Button clicked!');
	const handleSave = () => console.log('Saving...');
	const handleCancel = () => console.log('Cancelling...');
	const handleDelete = () => console.log('Deleting...');

	return (
		<div
			style={{
				padding: '2rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<h1>Enhanced DRY Button System</h1>

			{/* 1. Direct UnifiedButton usage with kind prop */}
			<section>
				<h2>
					1. Direct UnifiedButton Usage (Single component
					for all buttons)
				</h2>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					<UnifiedButton
						kind='primary'
						onClick={handleClick}
					>
						Primary
					</UnifiedButton>
					<UnifiedButton
						kind='secondary'
						onClick={handleClick}
					>
						Secondary
					</UnifiedButton>
					<UnifiedButton
						kind='danger'
						onClick={handleClick}
					>
						Danger
					</UnifiedButton>
					<UnifiedButton
						kind='icon'
						icon='⚙️'
						onClick={handleClick}
						label='Settings'
					/>
					<UnifiedButton
						kind='close'
						onClick={handleClick}
					/>
					<UnifiedButton
						kind='copy-link'
						copyText='https://example.com'
					/>
					<UnifiedButton
						kind='word'
						text='HELLO'
						isSelected
						onClick={handleClick}
					/>
					<UnifiedButton
						kind='go-back'
						onClick={handleClick}
					/>
					<UnifiedButton
						kind='friends-toggle'
						isActive
						onClick={handleClick}
					/>
				</div>
			</section>

			{/* 2. ButtonFactory programmatic creation */}
			<section>
				<h2>2. ButtonFactory - Programmatic Creation</h2>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					{ButtonFactory.create('primary', {
						onClick: handleClick,
						text: 'Factory Primary',
					})}
					{ButtonFactory.create('icon', {
						icon: '🔥',
						onClick: handleClick,
						label: 'Fire',
					})}
					{ButtonFactory.create('modal-confirm', {
						onClick: handleClick,
					})}
					{ButtonFactory.create('purchase-buy', {
						onClick: handleClick,
						text: 'Buy $9.99',
					})}
					{ButtonFactory.create('vs-quick-chat', {
						onClick: handleClick,
						text: 'GG!',
					})}
				</div>
			</section>

			{/* 3. Ultra-short aliases (B.*) */}
			<section>
				<h2>3. Ultra-Short Aliases (Maximum DRY)</h2>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					{B.save(handleSave)}
					{B.cancel(handleCancel)}
					{B.delete(handleDelete)}
					{B.edit(handleClick, 'Edit Profile')}
					{B.add(handleClick, 'Add Item')}
					{B.copy('https://example.com', 'Copy URL')}
					{B.icon('🎮', handleClick, 'Game')}
					{B.close(handleClick)}
					{B.back(handleClick)}
				</div>
			</section>

			{/* 4. Button groups and presets */}
			<section>
				<h2>4. Button Groups & Presets</h2>

				<h3>Modal Actions</h3>
				<div style={{ display: 'flex', gap: '1rem' }}>
					{(() => {
						const modalActions =
							ButtonFactory.createModalActions({
								onConfirm: handleSave,
								onCancel: handleCancel,
								confirmText: 'Save Changes',
								cancelText: 'Discard',
							});
						return [
							modalActions.confirm,
							modalActions.cancel,
						];
					})()}
				</div>

				<h3>Form Actions</h3>
				<div style={{ display: 'flex', gap: '1rem' }}>
					{(() => {
						const formActions =
							ButtonFactory.createFormActions({
								onSubmit: handleSave,
								onReset: () => console.log('Reset'),
								onCancel: handleCancel,
							});
						return [
							formActions.submit,
							formActions.reset,
							formActions.cancel,
						];
					})()}
				</div>

				<h3>Preset Patterns</h3>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexDirection: 'column',
					}}
				>
					<div style={{ display: 'flex', gap: '1rem' }}>
						<span>Delete Confirmation:</span>
						{(() => {
							const deleteButtons =
								ButtonPresets.deleteConfirmation(
									handleDelete,
									handleCancel,
									'User Account'
								);
							return [
								deleteButtons.delete,
								deleteButtons.cancel,
							];
						})()}
					</div>

					<div style={{ display: 'flex', gap: '1rem' }}>
						<span>Save Form:</span>
						{(() => {
							const saveButtons = ButtonPresets.saveForm(
								handleSave,
								handleCancel
							);
							return [saveButtons.save, saveButtons.cancel];
						})()}
					</div>
				</div>
			</section>

			{/* 5. Custom configurations */}
			<section>
				<h2>5. Custom Button Configurations</h2>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					<UnifiedButton
						kind='custom'
						overrideConfig={{
							variant: 'primary',
							icon: '🚀',
							iconPosition: 'left',
							defaultText: 'Launch',
						}}
						onClick={handleClick}
					/>

					<UnifiedButton
						kind='primary'
						overrideConfig={{
							size: 'large',
							className: 'custom-gradient-button',
						}}
						onClick={handleClick}
						text='Custom Styled'
					/>
				</div>
			</section>

			{/* 6. All available button kinds showcase */}
			<section>
				<h2>6. All Available Button Kinds</h2>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(150px, 1fr))',
						gap: '1rem',
					}}
				>
					{(
						Object.keys(
							BUTTON_CONFIGURATIONS
						) as ExtendedButtonKind[]
					).map((kind) => (
						<UnifiedButton
							key={kind}
							kind={kind}
							onClick={handleClick}
							text={kind.replace('-', ' ')}
						/>
					))}
				</div>
			</section>

			{/* 7. Real-world usage examples */}
			<section>
				<h2>7. Real-World UI Patterns</h2>

				<div
					style={{
						border: '1px solid #ccc',
						padding: '1rem',
						borderRadius: '8px',
						marginBottom: '1rem',
					}}
				>
					<h4>Modal Example</h4>
					<p>Confirm deletion of user account?</p>
					<div
						style={{
							display: 'flex',
							gap: '1rem',
							justifyContent: 'flex-end',
						}}
					>
						{B.create('danger', {
							onClick: handleDelete,
							text: 'Delete Account',
						})}
						{B.cancel(handleCancel)}
					</div>
				</div>

				<div
					style={{
						border: '1px solid #ccc',
						padding: '1rem',
						borderRadius: '8px',
						marginBottom: '1rem',
					}}
				>
					<h4>Form Example</h4>
					<p>Edit user profile form</p>
					<div style={{ display: 'flex', gap: '1rem' }}>
						{B.save(handleSave)}
						{B.create('secondary', {
							onClick: handleCancel,
							text: 'Cancel',
						})}
						{B.create('danger', {
							onClick: handleDelete,
							text: 'Delete Profile',
						})}
					</div>
				</div>

				<div
					style={{
						border: '1px solid #ccc',
						padding: '1rem',
						borderRadius: '8px',
					}}
				>
					<h4>Game UI Example</h4>
					<div
						style={{
							display: 'flex',
							gap: '1rem',
							alignItems: 'center',
						}}
					>
						{B.create('pregame-ready', {
							onClick: handleClick,
						})}
						{B.create('vs-quick-chat', {
							onClick: handleClick,
							text: 'Good luck!',
						})}
						{B.create('vs-status-emote', {
							onClick: handleClick,
							icon: '😄',
						})}
						{B.create('friends-toggle', {
							onClick: handleClick,
							isActive: true,
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default EnhancedDRYButtonExamples;
