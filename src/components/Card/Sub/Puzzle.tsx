import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface Puzzle {
	id: string;
	title: string;
	img?: string;
	description?: string;
	difficulty?: string;
	category?: string;
	completionRate?: number;
	averageTime?: number;
	dateCreated?: string;
	creator?: string;
}

interface PuzzleCardContentProps {
	puzzle: Puzzle;
}

const PuzzleCardContent: React.FC<
	PuzzleCardContentProps
> = ({ puzzle }) => {
	return (
		<Wrapper className={styles['puzzle-card']}>
			{puzzle.img && (
				<img
					src={puzzle.img}
					alt={puzzle.title}
					style={{
						width: '100%',
						borderRadius: 8,
						marginBottom: 12,
					}}
				/>
			)}
			<h3>{puzzle.title}</h3>
			{puzzle.description && <p>{puzzle.description}</p>}
			<div
				style={{
					display: 'flex',
					gap: 12,
					flexWrap: 'wrap',
					marginTop: 8,
				}}
			>
				{puzzle.difficulty && (
					<span>Difficulty: {puzzle.difficulty}</span>
				)}
				{puzzle.category && (
					<span>Category: {puzzle.category}</span>
				)}
				{puzzle.completionRate !== undefined && (
					<span>Completion: {puzzle.completionRate}%</span>
				)}
				{puzzle.averageTime !== undefined && (
					<span>Avg Time: {puzzle.averageTime} min</span>
				)}
			</div>
			{puzzle.creator && (
				<div
					style={{
						marginTop: 8,
						fontSize: '0.9em',
						color: '#888',
					}}
				>
					By {puzzle.creator}
				</div>
			)}
		</Wrapper>
	);
};

export default PuzzleCardContent;
