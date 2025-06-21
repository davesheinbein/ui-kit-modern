/**
 * Monetization - Legacy wrapper component for backward compatibility
 *
 * This component provides a simpler interface for basic monetization use cases
 * while internally using the UnifiedMonetization system.
 */

import React, { forwardRef } from 'react';
import UnifiedMonetization, {
	UnifiedMonetizationProps,
} from './UnifiedMonetization';
import { MonetizationKind } from './configurations';

export interface MonetizationProps {
	'kind': MonetizationKind;
	'className'?: string;
	'id'?: string;
	'testId'?: string;
	'data-testid'?: string;
	'children'?: React.ReactNode;
	[key: string]: any;
}

/**
 * Simple monetization component wrapper
 *
 * @example
 * <Monetization kind="pricing-card" plan={plan} />
 * <Monetization kind="usage-meter" usage={usage} />
 */
const Monetization = forwardRef<
	HTMLDivElement,
	MonetizationProps
>(({ children, ...props }, ref) => {
	// Cast to UnifiedMonetizationProps for proper typing
	const unifiedProps = props as UnifiedMonetizationProps;

	// If children are provided, we'll render a basic wrapper
	if (children) {
		return (
			<div
				ref={ref}
				className={props.className}
				id={props.id}
				data-testid={props['data-testid'] || props.testId}
			>
				{children}
			</div>
		);
	}

	return (
		<UnifiedMonetization ref={ref} {...unifiedProps} />
	);
});

Monetization.displayName = 'Monetization';

export default Monetization;
