/**
 * Grid Factory - DRY grid creation using configurations
 *
 * Provides factory methods and presets for creating grids with minimal code.
 * Similar to ButtonFactory but for grids.
 */

import React from 'react';
import { Wrapper } from '../Wrappers';
import Grid, { GridKind, GridProps } from './Grid';
import {
	GRID_CONFIGURATIONS,
	GRID_PRESETS,
	createGridConfig,
	GridConfiguration,
} from './configurations';

// Factory function props
export interface GridFactoryProps
	extends Omit<GridProps, 'kind'> {
	kind: GridKind;
	overrideConfig?: Partial<GridConfiguration>;
}

/**
 * GridFactory - Main factory function for creating grids
 *
 * @example
 * GridFactory('vs-grid', { words, selected, onSelect })
 * GridFactory('pregame-lockout', { gridWords, gridCols: 4, gridRows: 4 })
 */
export const GridFactory: React.FC<GridFactoryProps> = ({
	kind,
	overrideConfig,
	...props
}) => {
	const config =
		overrideConfig ?
			createGridConfig(kind, overrideConfig)
		:	GRID_CONFIGURATIONS[kind];

	return (
		<Grid kind={kind} configuration={config} {...props} />
	);
};

GridFactory.displayName = 'GridFactory';

/**
 * Grid Factory Class - Alternative class-based approach
 */
export class GridFactoryClass {
	/**
	 * Create a grid with the specified kind and props
	 */
	static create(
		kind: GridKind,
		props: Omit<GridProps, 'kind'>
	) {
		return <Grid kind={kind} {...props} />;
	}

	/**
	 * Create a game grid
	 */
	static game(props: Omit<GridProps, 'kind'>) {
		return this.create('game', props);
	}

	/**
	 * Create a VS grid (handles bot, multiplayer, and general VS scenarios)
	 */
	static vsGrid(props: Omit<GridProps, 'kind'>) {
		return this.create('vs-grid', props);
	}

	/**
	 * Create a VS bot grid (alias for backward compatibility)
	 */
	static vsBot(props: Omit<GridProps, 'kind'>) {
		return this.create('vs-grid', props);
	}

	/**
	 * Create a VS multiplayer grid (alias for backward compatibility)
	 */
	static vsMultiplayer(props: Omit<GridProps, 'kind'>) {
		return this.create('vs-grid', props);
	}

	/**
	 * Create a pregame lockout grid
	 */
	static pregameLockout(props: Omit<GridProps, 'kind'>) {
		return this.create('pregame-lockout', props);
	}

	/**
	 * Create a solved groups display
	 */
	static solvedGroups(props: Omit<GridProps, 'kind'>) {
		return this.create('solved-groups', props);
	}

	/**
	 * Create a preview grid
	 */
	static preview(props: Omit<GridProps, 'kind'>) {
		return this.create('preview', props);
	}
}

/**
 * Ultra-short alias for rapid grid creation
 */
export const G = GridFactory;

/**
 * Grid presets with common patterns
 */
export const GridPresets = {
	/**
	 * Standard game grid
	 */
	GameGrid: (props: Omit<GridProps, 'kind'>) => (
		<Grid
			{...GRID_PRESETS.STANDARD_GAME}
			{...props}
			kind='game'
		/>
	),

	/**
	 * VS match grid
	 */
	VSGrid: (props: Omit<GridProps, 'kind'>) => (
		<Grid
			{...GRID_PRESETS.VS_MATCH}
			{...props}
			kind='vs-grid'
		/>
	),

	/**
	 * Preview grid
	 */
	PreviewGrid: (props: Omit<GridProps, 'kind'>) => (
		<Grid
			{...GRID_PRESETS.PREVIEW_GRID}
			{...props}
			kind='preview'
		/>
	),

	/**
	 * Locked pregame grid
	 */
	LockedGrid: (props: Omit<GridProps, 'kind'>) => {
		const { locked, ...presetProps } =
			GRID_PRESETS.LOCKED_PREGAME;
		return (
			<Grid
				{...presetProps}
				{...props}
				kind='pregame-lockout'
				isLocked={locked as boolean}
			/>
		);
	},
};

/**
 * Quick grid shortcuts for maximum convenience
 */
export const QuickGrids = {
	/**
	 * Basic game grid
	 */
	Game: (props: {
		words: string[];
		onSelect: (word: string) => void;
		selected?: string[];
	}) => (
		<Grid
			kind='game'
			words={props.words}
			onSelect={props.onSelect}
			selected={props.selected || []}
		/>
	),

	/**
	 * VS mode grid
	 */
	VS: (props: {
		words: string[];
		selected?: string[];
		opponentSelected?: string[];
		onSelect: (word: string) => void;
		playerId?: string;
		opponentId?: string;
	}) => (
		<Grid
			kind='vs-grid'
			words={props.words}
			selected={props.selected || []}
			opponentSelected={props.opponentSelected || []}
			onSelect={props.onSelect}
			playerId={props.playerId}
			opponentId={props.opponentId}
		/>
	),

	/**
	 * Bot game grid
	 */
	Bot: (props: {
		words: string[];
		selected?: string[];
		onSelect: (word: string) => void;
		botDifficulty?: string;
		playerId?: string;
	}) => (
		<Grid
			kind='vs-grid'
			words={props.words}
			selected={props.selected || []}
			onSelect={props.onSelect}
			botDifficulty={props.botDifficulty || 'Medium'}
			playerId={props.playerId}
		/>
	),

	/**
	 * Preview grid (non-interactive)
	 */
	Preview: (props: { words: string[] }) => (
		<Grid
			kind='preview'
			words={props.words}
			preview={true}
		/>
	),

	/**
	 * Solved groups display
	 */
	SolvedGroups: (props: {
		pendingSolvedGroups: {
			groupIdx: number;
			words: string[];
		}[];
		activePuzzle?: { groupLabels?: string[] };
	}) => (
		<Grid
			kind='solved-groups'
			pendingSolvedGroups={props.pendingSolvedGroups}
			activePuzzle={props.activePuzzle}
		/>
	),

	/**
	 * Pregame lockout grid
	 */
	Lockout: (props: {
		gridWords: string[];
		gridCols: number;
		gridRows: number;
	}) => (
		<Grid
			kind='pregame-lockout'
			words={props.gridWords}
			gridSize={{
				rows: props.gridRows,
				cols: props.gridCols,
			}}
		/>
	),
};

export default GridFactory;
