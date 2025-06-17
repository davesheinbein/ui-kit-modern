import React from 'react';
import styles from './WordButton.module.scss';

export interface WordButtonProps {
	word: string;
	isSelected: boolean;
	isLocked: boolean;
	onClick: () => void;
	onKeyDown?: (
		e: React.KeyboardEvent<HTMLButtonElement>
	) => void;
	burnSuspect?: boolean;
	isBurned?: boolean;
	[key: string]: any;
}

const WordButton: React.FC<WordButtonProps> = ({
	word,
	isSelected,
	isLocked,
	onClick,
	onKeyDown,
	burnSuspect = false,
	isBurned = false,
	...rest
}) => {
	let className = styles.wordBtn;
	if (isSelected) className += ' ' + styles.selected;
	if (isLocked) className += ' ' + styles.locked;
	if (burnSuspect) className += ' ' + styles.burnSuspect;
	if (isBurned) className += ' ' + styles.burned;

	return (
		<button
			type='button'
			className={className}
			disabled={isLocked}
			onClick={onClick}
			onKeyDown={onKeyDown}
			{...rest}
		>
			{word}
		</button>
	);
};

export default WordButton;
