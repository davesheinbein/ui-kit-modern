import React from 'react';
import UnifiedButton, {
	UnifiedButtonProps,
} from './Button/UnifiedButton';

/**
 * Ultra-DRY Button System
 *
 * This demonstrates the ultimate DRY pattern - a single component that can
 * render ANY button type through configuration objects and factory functions.
 */

// Common button configurations
export const BUTTON_CONFIGS = {
	// Standard actions
	SAVE: {
		kind: 'primary' as const,
		children: 'Save',
		type: 'submit' as const,
	},
	CANCEL: {
		kind: 'secondary' as const,
		children: 'Cancel',
		type: 'button' as const,
	},
	DELETE: { kind: 'danger' as const, children: 'Delete' },
	SUBMIT: {
		kind: 'success' as const,
		children: 'Submit',
		type: 'submit' as const,
	},

	// Icons
	FIRE: {
		kind: 'icon' as const,
		icon: '🔥',
		label: 'Fire',
	},
	STAR: {
		kind: 'icon' as const,
		icon: '⭐',
		label: 'Star',
	},
	HEART: {
		kind: 'icon' as const,
		icon: '❤️',
		label: 'Like',
	},
	CLOSE: { kind: 'close' as const },

	// Specialized
	COPY_LINK: {
		kind: 'copy-link' as const,
		text: 'Copy',
		copyText: '',
	},
	GO_BACK: { kind: 'go-back' as const },
	FRIENDS_TOGGLE: {
		kind: 'friends-toggle' as const,
		isActive: false,
	},

	// Game buttons
	WORD_BUTTON: {
		kind: 'word' as const,
		word: '',
		isSelected: false,
	},
} as const;

/**
 * Smart button factory that creates buttons from config + overrides
 */
export const createButton = (
	baseConfig: UnifiedButtonProps,
	overrides: Partial<UnifiedButtonProps> = {}
): React.ReactElement => {
	const finalProps = {
		...baseConfig,
		...overrides,
	} as UnifiedButtonProps;
	return <UnifiedButton {...finalProps} />;
};

/**
 * Pre-configured button creators
 */
export const Buttons = {
	// Standard buttons
	Save: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.SAVE, props),

	Cancel: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.CANCEL, props),

	Delete: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.DELETE, props),

	Submit: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.SUBMIT, props),

	// Icon buttons
	Fire: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.FIRE, props),

	Star: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.STAR, props),

	Heart: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.HEART, props),

	Close: (props?: Partial<UnifiedButtonProps>) =>
		createButton(BUTTON_CONFIGS.CLOSE, props),

	// Dynamic icon button
	Icon: (
		icon: React.ReactNode,
		label: string,
		props?: Partial<UnifiedButtonProps>
	) => createButton({ kind: 'icon', icon, label }, props),

	// Word buttons for games
	Word: (
		word: string,
		isSelected = false,
		props?: Partial<UnifiedButtonProps>
	) =>
		createButton({ kind: 'word', word, isSelected }, props),

	// Copy link with custom text
	CopyLink: (
		copyText: string,
		displayText = 'Copy',
		props?: Partial<UnifiedButtonProps>
	) =>
		createButton(
			{ kind: 'copy-link', copyText, text: displayText },
			props
		),

	// Custom button with any config
	Custom: (config: UnifiedButtonProps) =>
		createButton(config),
};

/**
 * Button array builders for common patterns
 */
export const ButtonGroups = {
	// Standard form actions
	formActions: (
		onSave?: () => void,
		onCancel?: () => void
	) => [
		Buttons.Save({ onClick: onSave }),
		Buttons.Cancel({ onClick: onCancel }),
	],

	// Confirmation dialog
	confirmation: (
		onConfirm?: () => void,
		onCancel?: () => void
	) => [
		Buttons.Custom({
			kind: 'danger',
			children: 'Confirm',
			onClick: onConfirm,
		}),
		Buttons.Cancel({ onClick: onCancel }),
	],

	// Game word grid
	wordGrid: (
		words: string[],
		selectedWords: string[] = [],
		onWordClick?: (word: string) => void
	) =>
		words.map((word) =>
			Buttons.Word(word, selectedWords.includes(word), {
				onClick: () => onWordClick?.(word),
			})
		),

	// Icon toolbar
	iconToolbar: (
		actions: Array<{
			icon: React.ReactNode;
			label: string;
			onClick?: () => void;
		}>
	) =>
		actions.map(({ icon, label, onClick }) =>
			Buttons.Icon(icon, label, { onClick })
		),
};

/**
 * Ultimate DRY helper - render any button configuration
 */
export const renderButton = (
	config: string | UnifiedButtonProps
): React.ReactElement => {
	if (typeof config === 'string') {
		// String shorthand for common buttons
		const shortcuts: Record<
			string,
			() => React.ReactElement
		> = {
			save: () => Buttons.Save(),
			cancel: () => Buttons.Cancel(),
			delete: () => Buttons.Delete(),
			submit: () => Buttons.Submit(),
			close: () => Buttons.Close(),
			fire: () => Buttons.Fire(),
			star: () => Buttons.Star(),
			heart: () => Buttons.Heart(),
		};

		return (
			shortcuts[config]?.() ||
			Buttons.Custom({ kind: 'primary', children: config })
		);
	}

	return createButton(config);
};

// Usage examples:
/*
// Simple usage
const saveBtn = Buttons.Save();
const deleteBtn = Buttons.Delete({ onClick: handleDelete });

// Icon buttons
const fireBtn = Buttons.Fire({ onClick: handleFire });
const customIcon = Buttons.Icon('🚀', 'Launch', { onClick: handleLaunch });

// Word buttons for games
const wordButtons = ButtonGroups.wordGrid(
  ['APPLE', 'BANANA', 'CHERRY'], 
  ['APPLE'], 
  handleWordClick
);

// Form actions
const [saveBtn, cancelBtn] = ButtonGroups.formActions(handleSave, handleCancel);

// String shortcuts
const quickSave = renderButton('save');
const customBtn = renderButton({ kind: 'primary', children: 'Custom Action' });

// Ultimate flexibility
const ultraCustom = renderButton({
  kind: 'custom',
  customVariant: 'success',
  icon: '✨',
  text: 'Magic Action',
  onClick: handleMagic
});
*/

export default {
	Buttons,
	ButtonGroups,
	createButton,
	renderButton,
	BUTTON_CONFIGS,
};
