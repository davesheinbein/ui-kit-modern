import React, { useState } from 'react';
import {
	Button,
	UnifiedButton,
	UnifiedFormField,
	UnifiedModal,
} from '../index';

/**
 * Example showcasing the maximally DRY component API
 *
 * This example demonstrates how to use a single Button component
 * with different 'kind' props to render all button types, eliminating
 * the need for separate PrimaryButton, SecondaryButton, IconButton, etc.
 */
const MaximallyDRYExample: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [selectedWords, setSelectedWords] = useState<
		string[]
	>([]);

	const gameWords = ['APPLE', 'BANANA', 'CHERRY', 'DATE'];

	return (
		<div
			style={{
				padding: '2rem',
				maxWidth: '800px',
				margin: '0 auto',
			}}
		>
			<h1>Maximally DRY UI Kit Example</h1>
			<p>
				This example shows how to use unified components
				with 'kind' props to eliminate component duplication
				and create a consistent, maintainable API.
			</p>

			{/* === BUTTON EXAMPLES === */}
			<section style={{ marginBottom: '3rem' }}>
				<h2>Single Button Component - Multiple Kinds</h2>
				<p>
					All these buttons use the same Button component
					with different 'kind' props:
				</p>

				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
						marginBottom: '1rem',
					}}
				>
					{/* Standard button variants */}
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
						gap: '1rem',
						flexWrap: 'wrap',
						marginBottom: '1rem',
					}}
				>
					{/* Icon buttons */}
					<Button kind='icon' icon='🔥' label='Fire' />
					<Button kind='icon' icon='⭐' label='Star' />
					<Button
						kind='close'
						onClick={() => console.log('Close clicked')}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
						marginBottom: '1rem',
					}}
				>
					{/* Specialized buttons */}
					<Button
						kind='copy-link'
						copyText='https://example.com'
						text='Copy Link'
					/>
					<Button
						kind='go-back'
						onClick={() => console.log('Going back')}
					/>
					<Button
						kind='friends-toggle'
						isActive={true}
						onClick={() => console.log('Toggle friends')}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						flexWrap: 'wrap',
					}}
				>
					{/* Game word buttons */}
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

			{/* === FORM FIELD EXAMPLES === */}
			<section style={{ marginBottom: '3rem' }}>
				<h2>Single FormField Component - Multiple Kinds</h2>
				<p>
					All these form fields use the same
					UnifiedFormField component:
				</p>

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
						value={formData.name}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
						placeholder='Enter your name'
					/>

					<UnifiedFormField
						kind='input'
						type='email'
						label='Email'
						value={formData.email}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
						placeholder='Enter your email'
					/>

					<UnifiedFormField
						kind='textarea'
						label='Message'
						value={formData.message}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								message: e.target.value,
							}))
						}
						placeholder='Enter your message'
						rows={4}
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

			{/* === MODAL EXAMPLES === */}
			<section>
				<h2>Single Modal Component - Multiple Kinds</h2>
				<p>
					Different modal types using the same UnifiedModal
					component:
				</p>

				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					<Button onClick={() => setIsModalOpen(true)}>
						Open Modal
					</Button>
				</div>

				<UnifiedModal
					kind='basic'
					open={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					title='Example Modal'
				>
					<p>
						This modal uses the UnifiedModal component with
						kind="basic"
					</p>
					<div
						style={{
							marginTop: '1rem',
							display: 'flex',
							gap: '1rem',
						}}
					>
						<Button onClick={() => setIsModalOpen(false)}>
							Close
						</Button>
						<Button
							kind='secondary'
							onClick={() => setIsModalOpen(false)}
						>
							Cancel
						</Button>
					</div>
				</UnifiedModal>
			</section>

			{/* === CODE EXAMPLES === */}
			<section
				style={{
					marginTop: '3rem',
					padding: '1rem',
					backgroundColor: '#f8f9fa',
					borderRadius: '8px',
				}}
			>
				<h3>Usage Examples</h3>
				<pre
					style={{
						backgroundColor: '#fff',
						padding: '1rem',
						borderRadius: '4px',
						overflow: 'auto',
					}}
				>
					{`// Instead of importing multiple button components:
// import { PrimaryButton, SecondaryButton, IconButton, CloseButton } from 'ui-kit';

// Use a single Button component:
import { Button } from 'ui-kit';

// All button types with one component:
<Button kind="primary">Save</Button>
<Button kind="secondary">Cancel</Button>  
<Button kind="icon" icon="❤️" label="Like" />
<Button kind="close" onClick={handleClose} />
<Button kind="word" word="APPLE" isSelected={true} />

// Same pattern for forms:
<UnifiedFormField kind="input" label="Name" />
<UnifiedFormField kind="textarea" label="Message" />
<UnifiedFormField kind="select" options={options} />

// And modals:
<UnifiedModal kind="confirmation" title="Delete Item?" />
<UnifiedModal kind="form" title="Add User" />
<UnifiedModal kind="fullscreen" title="Gallery" />`}
				</pre>
			</section>
		</div>
	);
};

export default MaximallyDRYExample;
