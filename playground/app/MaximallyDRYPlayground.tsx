import React, { useState } from 'react';
import {
	Button,
	UnifiedFormField,
	UnifiedModal,
	UltraDRYButtons,
} from '../../src';
import '../../src/styles/globals.css';

export default function MaximallyDRYPlayground() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedWords, setSelectedWords] = useState<
		string[]
	>([]);

	const gameWords = [
		'APPLE',
		'BANANA',
		'CHERRY',
		'DATE',
		'FIG',
		'GRAPE',
	];

	const handleWordClick = (word: string) => {
		setSelectedWords((prev) =>
			prev.includes(word) ?
				prev.filter((w) => w !== word)
			:	[...prev, word]
		);
	};

	return (
		<div
			style={{
				padding: '2rem',
				fontFamily: 'system-ui, sans-serif',
			}}
		>
			<h1>🎯 Ultra-DRY UI Kit Revolution</h1>
			<p>
				Experience the ultimate DRY architecture - maximum
				reusability, zero duplication!
			</p>

			{/* Ultra-DRY Button System Demo */}
			<section
				style={{
					marginBottom: '2rem',
					padding: '1rem',
					backgroundColor: '#e8f5e8',
					borderRadius: '8px',
				}}
			>
				<h2>🚀 Ultra-DRY Button System</h2>
				<p>
					Multiple ways to create the same buttons -
					ultimate flexibility!
				</p>

				<div style={{ marginBottom: '1rem' }}>
					<h4>Method 1: Pre-configured Buttons</h4>
					<div
						style={{
							display: 'flex',
							gap: '0.5rem',
							flexWrap: 'wrap',
						}}
					>
						{UltraDRYButtons.Buttons.Save()}
						{UltraDRYButtons.Buttons.Cancel()}
						{UltraDRYButtons.Buttons.Delete()}
						{UltraDRYButtons.Buttons.Fire()}
						{UltraDRYButtons.Buttons.Star()}
						{UltraDRYButtons.Buttons.Close()}
					</div>
				</div>

				<div style={{ marginBottom: '1rem' }}>
					<h4>Method 2: String Shortcuts</h4>
					<div
						style={{
							display: 'flex',
							gap: '0.5rem',
							flexWrap: 'wrap',
						}}
					>
						{UltraDRYButtons.renderButton('save')}
						{UltraDRYButtons.renderButton('cancel')}
						{UltraDRYButtons.renderButton('delete')}
						{UltraDRYButtons.renderButton('fire')}
					</div>
				</div>

				<div style={{ marginBottom: '1rem' }}>
					<h4>Method 3: Button Groups (Arrays)</h4>
					<div
						style={{
							display: 'flex',
							gap: '0.5rem',
							flexWrap: 'wrap',
						}}
					>
						{UltraDRYButtons.ButtonGroups.formActions(
							() => console.log('Saved!'),
							() => console.log('Cancelled!')
						)}
					</div>
				</div>

				<div style={{ marginBottom: '1rem' }}>
					<h4>Method 4: Game Word Grid</h4>
					<div
						style={{
							display: 'flex',
							gap: '0.5rem',
							flexWrap: 'wrap',
						}}
					>
						{UltraDRYButtons.ButtonGroups.wordGrid(
							gameWords,
							selectedWords,
							handleWordClick
						)}
					</div>
				</div>

				<div style={{ marginBottom: '1rem' }}>
					<h4>Method 5: Icon Toolbar</h4>
					<div
						style={{
							display: 'flex',
							gap: '0.5rem',
							flexWrap: 'wrap',
						}}
					>
						{UltraDRYButtons.ButtonGroups.iconToolbar([
							{
								icon: '🎮',
								label: 'Games',
								onClick: () => console.log('Games'),
							},
							{
								icon: '⚙️',
								label: 'Settings',
								onClick: () => console.log('Settings'),
							},
							{
								icon: '📊',
								label: 'Stats',
								onClick: () => console.log('Stats'),
							},
							{
								icon: '👥',
								label: 'Friends',
								onClick: () => console.log('Friends'),
							},
						])}
					</div>
				</div>
			</section>

			{/* Button Examples */}
			<section style={{ marginBottom: '2rem' }}>
				<h2>📦 One Button Component - All Types</h2>
				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						flexWrap: 'wrap',
						marginBottom: '1rem',
					}}
				>
					<Button kind='primary'>Primary</Button>
					<Button kind='secondary'>Secondary</Button>
					<Button kind='danger'>Danger</Button>
					<Button kind='success'>Success</Button>
					<Button kind='warning'>Warning</Button>
					<Button kind='ghost'>Ghost</Button>
				</div>

				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						alignItems: 'center',
						marginBottom: '1rem',
					}}
				>
					<Button kind='icon' icon='🔥' label='Fire' />
					<Button kind='icon' icon='⭐' label='Star' />
					<Button
						kind='close'
						onClick={() => console.log('Close clicked')}
					/>
					<Button
						kind='copy-link'
						copyText='https://example.com'
						text='Copy'
					/>
					<Button
						kind='go-back'
						onClick={() => console.log('Go back')}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						flexWrap: 'wrap',
					}}
				>
					{gameWords.map((word) => (
						<Button
							key={word}
							kind='word'
							word={word}
							isSelected={selectedWords.includes(word)}
							onClick={() => {
								setSelectedWords((prev) =>
									prev.includes(word) ?
										prev.filter((w) => w !== word)
									:	[...prev, word]
								);
							}}
						/>
					))}
				</div>
			</section>

			{/* Form Field Examples */}
			<section style={{ marginBottom: '2rem' }}>
				<h2>📝 One FormField Component - All Types</h2>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						maxWidth: '400px',
					}}
				>
					<UnifiedFormField
						kind='input'
						label='Name'
						placeholder='Enter your name'
					/>
					<UnifiedFormField
						kind='input'
						type='email'
						label='Email'
						placeholder='Enter email'
					/>
					<UnifiedFormField
						kind='textarea'
						label='Message'
						placeholder='Your message'
						rows={3}
					/>
					<UnifiedFormField
						kind='select'
						label='Country'
						options={[
							{ value: 'us', label: 'United States' },
							{ value: 'ca', label: 'Canada' },
							{ value: 'uk', label: 'United Kingdom' },
						]}
					/>
					<UnifiedFormField
						kind='checkbox'
						label='Subscribe to newsletter'
					/>
					<UnifiedFormField
						kind='switch'
						label='Enable notifications'
					/>
					<UnifiedFormField
						kind='range'
						label='Volume'
						min={0}
						max={100}
						defaultValue={50}
					/>
				</div>
			</section>

			{/* Modal Example */}
			<section>
				<h2>🪟 One Modal Component - All Types</h2>
				<Button onClick={() => setModalOpen(true)}>
					Open Modal
				</Button>

				<UnifiedModal
					kind='basic'
					open={modalOpen}
					onClose={() => setModalOpen(false)}
					title='Example Modal'
				>
					<p>
						This modal uses UnifiedModal with kind="basic"
					</p>
					<p>
						<strong>Selected words:</strong>{' '}
						{selectedWords.join(', ') || 'None'}
					</p>
					<div
						style={{
							marginTop: '1rem',
							display: 'flex',
							gap: '0.5rem',
						}}
					>
						<Button
							kind='primary'
							onClick={() => setModalOpen(false)}
						>
							Close
						</Button>
						<Button
							kind='secondary'
							onClick={() => setModalOpen(false)}
						>
							Cancel
						</Button>
					</div>
				</UnifiedModal>
			</section>

			{/* Benefits */}
			<section
				style={{
					marginTop: '3rem',
					padding: '1.5rem',
					backgroundColor: '#e0f2fe',
					borderRadius: '12px',
					border: '1px solid #0284c7',
				}}
			>
				<h3
					style={{ color: '#0c4a6e', marginBottom: '1rem' }}
				>
					✨ Benefits of Maximally DRY Architecture
				</h3>
				<div
					style={{
						display: 'grid',
						gap: '0.5rem',
						fontSize: '0.9rem',
					}}
				>
					<div>
						🚀 <strong>Smaller Bundle:</strong> One
						component vs dozens
					</div>
					<div>
						🛠 <strong>Easier Maintenance:</strong> Update
						logic in one place
					</div>
					<div>
						🎨 <strong>Consistent Design:</strong> Shared
						styles and behavior
					</div>
					<div>
						⚡ <strong>Better DX:</strong> Single import,
						consistent API
					</div>
					<div>
						🔒 <strong>Type Safety:</strong> Kind-based prop
						validation
					</div>
				</div>
			</section>

			{/* Code Example */}
			<section
				style={{
					marginTop: '2rem',
					padding: '1rem',
					backgroundColor: '#f8f9fa',
					borderRadius: '8px',
				}}
			>
				<h3>💻 Usage Example</h3>
				<pre
					style={{
						backgroundColor: '#fff',
						padding: '1rem',
						borderRadius: '4px',
						overflow: 'auto',
						fontSize: '0.85rem',
						lineHeight: '1.4',
					}}
				>
					{`// ❌ BEFORE: Multiple imports for different components
import { 
  PrimaryButton, SecondaryButton, IconButton, CloseButton,
  Input, Textarea, Select, Checkbox,
  Modal, ConfirmationModal
} from 'ui-kit';

// ✅ AFTER: Single imports with 'kind' props
import { Button, UnifiedFormField, UnifiedModal } from 'ui-kit';

// All button types from one component
<Button kind="primary">Save</Button>
<Button kind="icon" icon="🔥" label="Fire" />
<Button kind="word" word="APPLE" isSelected />

// All form fields from one component  
<UnifiedFormField kind="input" label="Name" />
<UnifiedFormField kind="select" options={options} />

// All modals from one component
<UnifiedModal kind="confirmation" title="Delete?" />`}
				</pre>
			</section>
		</div>
	);
}
