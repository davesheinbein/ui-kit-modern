import React, { useState } from 'react';
import {
	UnifiedButton,
	UnifiedFormField,
	UnifiedModal,
} from '../index';

/**
 * Example component demonstrating the new unified, DRY component API
 */
const UnifiedComponentsExample: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [formValue, setFormValue] = useState('');
	const [selectedOption, setSelectedOption] =
		useState('option1');

	return (
		<div
			style={{
				padding: '2rem',
				maxWidth: '600px',
				margin: '0 auto',
			}}
		>
			<h1>Unified Components Example</h1>

			{/* Button Examples */}
			<section style={{ marginBottom: '2rem' }}>
				<h2>Unified Buttons</h2>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
						marginBottom: '1rem',
					}}
				>
					<UnifiedButton kind='primary'>
						Primary
					</UnifiedButton>
					<UnifiedButton kind='secondary'>
						Secondary
					</UnifiedButton>
					<UnifiedButton kind='danger'>
						Danger
					</UnifiedButton>
					<UnifiedButton kind='success'>
						Success
					</UnifiedButton>
					<UnifiedButton kind='warning'>
						Warning
					</UnifiedButton>
					<UnifiedButton kind='ghost'>Ghost</UnifiedButton>
					<UnifiedButton kind='link'>Link</UnifiedButton>
				</div>

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
						label='Settings'
					/>
					<UnifiedButton
						kind='close'
						onClick={() => console.log('Close clicked')}
					/>
					<UnifiedButton
						kind='word'
						word='EXAMPLE'
						isSelected={false}
						isLocked={false}
						onClick={() => console.log('Word clicked')}
					/>
				</div>
			</section>

			{/* Form Field Examples */}
			<section style={{ marginBottom: '2rem' }}>
				<h2>Unified Form Fields</h2>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<UnifiedFormField
						kind='input'
						label='Text Input'
						placeholder='Enter text...'
						value={formValue}
						onChange={(e) => setFormValue(e.target.value)}
					/>

					<UnifiedFormField
						kind='textarea'
						label='Textarea'
						placeholder='Enter longer text...'
						rows={3}
					/>

					<UnifiedFormField
						kind='select'
						label='Select Option'
						value={selectedOption}
						onChange={(e) =>
							setSelectedOption(e.target.value)
						}
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' },
						]}
					/>

					<UnifiedFormField
						kind='checkbox'
						label='Checkbox Option'
						id='checkbox-example'
					/>

					<UnifiedFormField
						kind='switch'
						label='Switch Option'
						id='switch-example'
					/>

					<UnifiedFormField
						kind='range'
						label='Range Slider'
						min={0}
						max={100}
						defaultValue={50}
					/>
				</div>
			</section>

			{/* Modal Examples */}
			<section>
				<h2>Unified Modal</h2>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
					}}
				>
					<UnifiedButton
						kind='primary'
						onClick={() => setModalOpen(true)}
					>
						Open Modal
					</UnifiedButton>
				</div>
			</section>

			<UnifiedModal
				kind='confirmation'
				open={modalOpen}
				onClose={() => setModalOpen(false)}
				title='Confirm Action'
				message='Are you sure you want to proceed with this action?'
				onConfirm={() => {
					console.log('Confirmed!');
					setModalOpen(false);
				}}
				onCancel={() => setModalOpen(false)}
			/>
		</div>
	);
};

export default UnifiedComponentsExample;
