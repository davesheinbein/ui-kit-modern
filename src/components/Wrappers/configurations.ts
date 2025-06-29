// ========================================
// Core Types and Interfaces
// ========================================

// The configuration system is now deprecated in favor of the new flexible Wrapper API.
// This file is kept for legacy compatibility only.

export type WrapperKind = string;
export type WrapperVariant = string;
export type WrapperLayout = string;

export interface WrapperConfiguration {
	kind: WrapperKind;
	variant?: WrapperVariant;
	layout?: WrapperLayout;
	description?: string;
	[key: string]: any;
}

// Deprecated: No-op config map for legacy imports
export const WRAPPER_CONFIGURATIONS: Record<
	WrapperKind,
	WrapperConfiguration
> = {};

export function getWrapperConfig(
	kind: WrapperKind
): WrapperConfiguration | undefined {
	return undefined;
}

export function isWrapperKind(
	kind: string
): kind is WrapperKind {
	return typeof kind === 'string';
}

export function getWrappersByVariant(
	variant: WrapperVariant
): WrapperConfiguration[] {
	return [];
}

export function getDeprecatedWrappers(): WrapperConfiguration[] {
	return [];
}

export function createWrapperConfig(
	baseKind: WrapperKind,
	overrides: Partial<WrapperConfiguration> = {}
): WrapperConfiguration {
	return { kind: baseKind, ...overrides };
}
