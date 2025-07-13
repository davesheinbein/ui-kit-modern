import React from 'react';
import styles from '../dropdown.module.scss';

interface SelectedChipsProps {
	values: string[];
	options: { label: string; value: string }[];
	onRemove: (value: string) => void;
}

const SelectedChips: React.FC<SelectedChipsProps> = ({
	values,
	options,
	onRemove,
}) => (
	<div
		className={styles.selectedChips}
		style={{
			display: 'flex',
			flexWrap: 'wrap',
			gap: 4,
			padding: '8px 12px 0 12px',
		}}
	>
		{values.map((val) => {
			const opt = options.find((o) => o.value === val);
			if (!opt) return null;
			return (
				<span
					key={val}
					className={styles.chip}
					style={{
						background: '#f3f4f6',
						borderRadius: 12,
						padding: '2px 8px',
						marginRight: 4,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					{opt.label}
					<button
						type='button'
						style={{
							marginLeft: 4,
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							color: '#888',
						}}
						onClick={(e) => {
							e.stopPropagation();
							onRemove(opt.value);
						}}
						aria-label={`Remove ${opt.label}`}
					>
						&times;
					</button>
				</span>
			);
		})}
	</div>
);

export default SelectedChips;
