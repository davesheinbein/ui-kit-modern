/**
 * Modal Configuration System - Configuration-driven modal creation
 *
 * This file defines all modal types and their behaviors in a centralized,
 * DRY configuration system similar to ButtonConfigurations.ts
 */

import React from 'react';
import { ExtendedButtonKind } from '../Button/ButtonConfigurations';

// All possible modal kinds - covers every specific modal in the UI Kit
export type ExtendedModalKind =
	// Basic modal types
	| 'basic'
	| 'confirmation'
	| 'alert'
	| 'form'
	| 'fullscreen'

	// Game-specific modals
	| 'pre-game'
	| 'end-game'
	| 'rules'
	| 'statistics'
	| 'purchase'
	| 'sign-in'
	| 'custom-puzzle'
	| 'share-content'

	// VS mode modals
	| 'vs-mode'
	| 'vs-room'

	// Layout variations
	| 'overlay-only'
	| 'sidebar'
	| 'toast'

	// Custom
	| 'custom';

// Modal size options
export type ModalSize =
	| 'xs'
	| 'small'
	| 'medium'
	| 'large'
	| 'xl'
	| 'fullscreen'
	| 'auto';

// Modal position options
export type ModalPosition =
	| 'center'
	| 'top'
	| 'bottom'
	| 'left'
	| 'right';

// Modal animation types
export type ModalAnimation =
	| 'fade'
	| 'slide-up'
	| 'slide-down'
	| 'scale'
	| 'none';

// Modal configuration interface
export interface ModalConfiguration {
	// Visual properties
	size: ModalSize;
	position: ModalPosition;
	animation: ModalAnimation;

	// Layout properties
	showHeader: boolean;
	showFooter: boolean;
	showCloseButton: boolean;
	closable: boolean;
	backdrop: boolean;

	// Styling
	className: string;
	headerClassName?: string;
	bodyClassName?: string;
	footerClassName?: string;

	// Behavior
	closeOnBackdrop: boolean;
	closeOnEscape: boolean;
	preventScroll: boolean;
	autoFocus: boolean;

	// Content defaults
	defaultTitle?: string;
	defaultMessage?: string;

	// Button configurations
	primaryButtonText?: string;
	secondaryButtonText?: string;
	primaryButtonKind?: ExtendedButtonKind;
	secondaryButtonKind?: ExtendedButtonKind;

	// Custom rendering
	customHeader?: boolean;
	customFooter?: boolean;
	customBody?: boolean;
}

// Master modal configurations - defines behavior for each modal kind
export const MODAL_CONFIGURATIONS: Record<
	ExtendedModalKind,
	ModalConfiguration
> = {
	// === BASIC MODAL TYPES ===
	'basic': {
		size: 'medium',
		position: 'center',
		animation: 'fade',
		showHeader: true,
		showFooter: false,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'basic-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
	},

	'confirmation': {
		size: 'small',
		position: 'center',
		animation: 'scale',
		showHeader: true,
		showFooter: true,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'confirmation-modal',
		closeOnBackdrop: false,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		primaryButtonText: 'Confirm',
		secondaryButtonText: 'Cancel',
		primaryButtonKind: 'primary',
		secondaryButtonKind: 'secondary',
	},

	'alert': {
		size: 'small',
		position: 'center',
		animation: 'scale',
		showHeader: true,
		showFooter: true,
		showCloseButton: false,
		closable: true,
		backdrop: true,
		className: 'alert-modal',
		closeOnBackdrop: false,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		primaryButtonText: 'OK',
		primaryButtonKind: 'primary',
	},

	'form': {
		size: 'large',
		position: 'center',
		animation: 'slide-up',
		showHeader: true,
		showFooter: true,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'form-modal',
		closeOnBackdrop: false,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		primaryButtonText: 'Submit',
		secondaryButtonText: 'Cancel',
		primaryButtonKind: 'primary',
		secondaryButtonKind: 'secondary',
	},

	'fullscreen': {
		size: 'fullscreen',
		position: 'center',
		animation: 'fade',
		showHeader: true,
		showFooter: false,
		showCloseButton: true,
		closable: true,
		backdrop: false,
		className: 'fullscreen-modal',
		closeOnBackdrop: false,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
	},

	// === GAME-SPECIFIC MODALS ===
	'pre-game': {
		size: 'medium',
		position: 'center',
		animation: 'scale',
		showHeader: true,
		showFooter: true,
		showCloseButton: false,
		closable: false,
		backdrop: true,
		className: 'pre-game-modal',
		closeOnBackdrop: false,
		closeOnEscape: false,
		preventScroll: true,
		autoFocus: true,
		defaultTitle: 'Ready to Start?',
		defaultMessage: 'Get ready for your puzzle!',
		primaryButtonText: 'Ready',
		secondaryButtonText: 'Go Home',
		primaryButtonKind: 'primary',
		secondaryButtonKind: 'secondary',
	},

	'end-game': {
		size: 'large',
		position: 'center',
		animation: 'slide-up',
		showHeader: false,
		showFooter: true,
		showCloseButton: false,
		closable: false,
		backdrop: true,
		className: 'end-game-modal',
		closeOnBackdrop: false,
		closeOnEscape: false,
		preventScroll: true,
		autoFocus: true,
		customBody: true,
		primaryButtonText: 'Share',
		primaryButtonKind: 'primary',
	},

	'rules': {
		size: 'large',
		position: 'center',
		animation: 'slide-up',
		showHeader: true,
		showFooter: false,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'rules-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		defaultTitle: 'How to Play',
	},

	'statistics': {
		size: 'large',
		position: 'center',
		animation: 'slide-up',
		showHeader: true,
		showFooter: false,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'statistics-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		defaultTitle: 'Statistics',
		customBody: true,
	},

	'purchase': {
		size: 'medium',
		position: 'center',
		animation: 'scale',
		showHeader: true,
		showFooter: true,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'purchase-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		customBody: true,
		primaryButtonText: 'Purchase',
		secondaryButtonText: 'Cancel',
		primaryButtonKind: 'primary',
		secondaryButtonKind: 'secondary',
	},

	'sign-in': {
		size: 'small',
		position: 'center',
		animation: 'scale',
		showHeader: true,
		showFooter: true,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'sign-in-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		defaultTitle: 'Sign In Required',
		primaryButtonText: 'Sign In',
		primaryButtonKind: 'primary',
	},

	'custom-puzzle': {
		size: 'large',
		position: 'center',
		animation: 'slide-up',
		showHeader: true,
		showFooter: true,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'custom-puzzle-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		defaultTitle: 'Custom Puzzle',
		primaryButtonText: 'Create',
		secondaryButtonText: 'Cancel',
		primaryButtonKind: 'primary',
		secondaryButtonKind: 'secondary',
	},

	'share-content': {
		size: 'medium',
		position: 'center',
		animation: 'scale',
		showHeader: false,
		showFooter: false,
		showCloseButton: false,
		closable: true,
		backdrop: true,
		className: 'share-content-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		customBody: true,
	},

	// === VS MODE MODALS ===
	'vs-mode': {
		size: 'medium',
		position: 'center',
		animation: 'scale',
		showHeader: true,
		showFooter: false,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'vs-mode-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		defaultTitle: 'Versus Mode',
		customBody: true,
	},

	'vs-room': {
		size: 'medium',
		position: 'center',
		animation: 'scale',
		showHeader: true,
		showFooter: true,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'vs-room-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
		defaultTitle: 'Join Room',
		customBody: true,
		primaryButtonText: 'Join',
		secondaryButtonText: 'Create Room',
		primaryButtonKind: 'primary',
		secondaryButtonKind: 'secondary',
	},

	// === LAYOUT VARIATIONS ===
	'overlay-only': {
		size: 'auto',
		position: 'center',
		animation: 'fade',
		showHeader: false,
		showFooter: false,
		showCloseButton: false,
		closable: true,
		backdrop: false,
		className: 'overlay-only-modal',
		closeOnBackdrop: false,
		closeOnEscape: true,
		preventScroll: false,
		autoFocus: false,
	},

	'sidebar': {
		size: 'auto',
		position: 'right',
		animation: 'slide-up',
		showHeader: true,
		showFooter: false,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'sidebar-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
	},

	'toast': {
		size: 'auto',
		position: 'top',
		animation: 'slide-down',
		showHeader: false,
		showFooter: false,
		showCloseButton: true,
		closable: true,
		backdrop: false,
		className: 'toast-modal',
		closeOnBackdrop: false,
		closeOnEscape: true,
		preventScroll: false,
		autoFocus: false,
	},

	// === CUSTOM ===
	'custom': {
		size: 'medium',
		position: 'center',
		animation: 'fade',
		showHeader: true,
		showFooter: true,
		showCloseButton: true,
		closable: true,
		backdrop: true,
		className: 'custom-modal',
		closeOnBackdrop: true,
		closeOnEscape: true,
		preventScroll: true,
		autoFocus: true,
	},
};

// Helper function to get modal configuration
export const getModalConfiguration = (
	kind: ExtendedModalKind
): ModalConfiguration => {
	return MODAL_CONFIGURATIONS[kind];
};

// Helper function to merge custom config with defaults
export const mergeModalConfiguration = (
	kind: ExtendedModalKind,
	overrides: Partial<ModalConfiguration> = {}
): ModalConfiguration => {
	const baseConfig = getModalConfiguration(kind);
	return { ...baseConfig, ...overrides };
};

// Modal configuration groups for common use cases
export const MODAL_GROUPS = {
	// Game modals
	gameFlow: [
		'pre-game',
		'end-game',
		'rules',
		'statistics',
	] as ExtendedModalKind[],

	// Purchase flow
	commerce: ['purchase', 'sign-in'] as ExtendedModalKind[],

	// VS mode flow
	versus: ['vs-mode', 'vs-room'] as ExtendedModalKind[],

	// Basic interactions
	interactions: [
		'confirmation',
		'alert',
		'form',
	] as ExtendedModalKind[],

	// Layout types
	layouts: [
		'fullscreen',
		'sidebar',
		'toast',
		'overlay-only',
	] as ExtendedModalKind[],
};

// Type guards for modal kinds
export const isGameModal = (
	kind: ExtendedModalKind
): boolean => MODAL_GROUPS.gameFlow.includes(kind);

export const isVersusModal = (
	kind: ExtendedModalKind
): boolean => MODAL_GROUPS.versus.includes(kind);

export const isCommerceModal = (
	kind: ExtendedModalKind
): boolean => MODAL_GROUPS.commerce.includes(kind);

export const isInteractionModal = (
	kind: ExtendedModalKind
): boolean => MODAL_GROUPS.interactions.includes(kind);

export const isLayoutModal = (
	kind: ExtendedModalKind
): boolean => MODAL_GROUPS.layouts.includes(kind);
