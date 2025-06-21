/**
 * Input Factory - Creates input components with minimal configuration
 * This is the most DRY way to create inputs in the entire system
 */

import React from 'react';
import UnifiedInput, {
	UnifiedInputProps,
} from './UnifiedInput';
import {
	InputKind,
	INPUT_CONFIGURATIONS,
} from './configurations';

export interface InputFactoryProps
	extends Omit<UnifiedInputProps, 'kind'> {
	[key: string]: any;
}

/**
 * Main Input Factory Class
 */
export class InputFactory {
	/**
	 * Create any input with specified kind and optional overrides
	 */
	static create(
		kind: InputKind,
		overrides: Partial<UnifiedInputProps> = {}
	): React.ReactElement {
		const config = INPUT_CONFIGURATIONS[kind];

		return (
			<UnifiedInput
				kind={kind}
				{...config}
				{...overrides}
			/>
		);
	}

	// === BASIC INPUTS ===
	static text(props: Partial<UnifiedInputProps> = {}) {
		return this.create('text', props);
	}

	static email(props: Partial<UnifiedInputProps> = {}) {
		return this.create('email', props);
	}

	static password(props: Partial<UnifiedInputProps> = {}) {
		return this.create('password', props);
	}

	static number(props: Partial<UnifiedInputProps> = {}) {
		return this.create('number', props);
	}

	// === SPECIALIZED INPUTS ===
	static search(props: Partial<UnifiedInputProps> = {}) {
		return this.create('search', props);
	}

	static url(props: Partial<UnifiedInputProps> = {}) {
		return this.create('url', props);
	}

	static tel(props: Partial<UnifiedInputProps> = {}) {
		return this.create('tel', props);
	}

	// === AUTHENTICATION INPUTS ===
	static username(props: Partial<UnifiedInputProps> = {}) {
		return this.create('username', props);
	}

	static loginEmail(
		props: Partial<UnifiedInputProps> = {}
	) {
		return this.create('login-email', props);
	}

	static confirmationPassword(
		props: Partial<UnifiedInputProps> = {}
	) {
		return this.create('confirmation-password', props);
	}

	// === UTILITY INPUTS ===
	static searchFilter(
		props: Partial<UnifiedInputProps> = {}
	) {
		return this.create('search-filter', props);
	}

	static custom(props: Partial<UnifiedInputProps> = {}) {
		return this.create('custom', props);
	}
}

/**
 * Functional factory for creating inputs
 */
export const InputFactoryFunction = (
	kind: InputKind | Partial<UnifiedInputProps>,
	overrides: Partial<UnifiedInputProps> = {}
): React.ReactElement => {
	if (typeof kind === 'string') {
		return InputFactory.create(kind, overrides);
	}

	// If first parameter is props object, treat it as such
	const props = kind as Partial<UnifiedInputProps>;
	const inputKind = props.kind || 'text';
	return InputFactory.create(inputKind, props);
};

// Shorthand alias
export const I = InputFactoryFunction;
