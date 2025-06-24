/**
 * Input Factory - Creates input components with minimal configuration
 * This is the most DRY way to create inputs in the entire system
 */

import React from 'react';
import { Wrapper } from '../Wrappers';
import Input, { InputProps } from './Input';
import {
	InputKind,
	INPUT_CONFIGURATIONS,
} from './configurations';

export interface InputFactoryProps
	extends Omit<InputProps, 'kind'> {
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
		overrides: Partial<InputProps> = {}
	): React.ReactElement {
		const config = INPUT_CONFIGURATIONS[kind];

		return <Input kind={kind} {...config} {...overrides} />;
	}

	// === BASIC INPUTS ===
	static text(props: Partial<InputProps> = {}) {
		return this.create('text', props);
	}

	static email(props: Partial<InputProps> = {}) {
		return this.create('email', props);
	}

	static password(props: Partial<InputProps> = {}) {
		return this.create('password', props);
	}

	static number(props: Partial<InputProps> = {}) {
		return this.create('number', props);
	}

	// === SPECIALIZED INPUTS ===
	static search(props: Partial<InputProps> = {}) {
		return this.create('search', props);
	}

	static url(props: Partial<InputProps> = {}) {
		return this.create('url', props);
	}

	static tel(props: Partial<InputProps> = {}) {
		return this.create('tel', props);
	}

	// === AUTHENTICATION INPUTS ===
	static username(props: Partial<InputProps> = {}) {
		return this.create('username', props);
	}

	static loginEmail(props: Partial<InputProps> = {}) {
		return this.create('login-email', props);
	}

	static confirmationPassword(
		props: Partial<InputProps> = {}
	) {
		return this.create('confirmation-password', props);
	}

	// === UTILITY INPUTS ===
	static searchFilter(props: Partial<InputProps> = {}) {
		return this.create('search-filter', props);
	}

	static custom(props: Partial<InputProps> = {}) {
		return this.create('custom', props);
	}
}

/**
 * Functional factory for creating inputs
 */
export const InputFactoryFunction = (
	kind: InputKind | Partial<InputProps>,
	overrides: Partial<InputProps> = {}
): React.ReactElement => {
	if (typeof kind === 'string') {
		return InputFactory.create(kind, overrides);
	}

	// If first parameter is props object, treat it as such
	const props = kind as Partial<InputProps>;
	const inputKind = props.kind || 'text';
	return InputFactory.create(inputKind, props);
};
