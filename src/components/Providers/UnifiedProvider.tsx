import React, { forwardRef } from 'react';
import Provider from './Provider';
import ProviderBodyFactory, {
	ProviderBodyFactoryProps,
} from './ProviderBodyFactory';
import {
	PROVIDER_CONFIGURATIONS,
	ProviderKind,
	ProviderConfiguration,
} from './ProviderConfigurations';

// Use the extended provider kinds from configurations
export type { ProviderKind };

export interface UnifiedProviderProps
	extends React.HTMLAttributes<HTMLDivElement> {
	kind: ProviderKind;
	children?: React.ReactNode;
	// Provider-specific props
	session?: any;
	autoConnect?: boolean;
	url?: string;
	initialSettings?: any;
	// Override any configuration
	configuration?: Partial<ProviderConfiguration>;
	[key: string]: any;
}

/**
 * UnifiedProvider - A single component that can render any provider type
 *
 * This is the main DRY provider component that handles all provider kinds
 * through configuration-driven rendering.
 *
 * @example
 * <UnifiedProvider kind="socket-provider" autoConnect session={session} />
 * <UnifiedProvider kind="user-settings-provider" initialSettings={settings} />
 * <UnifiedProvider kind="achievement-socket-listener" />
 */
const UnifiedProvider = forwardRef<
	HTMLDivElement,
	UnifiedProviderProps
>(
	(
		{
			kind,
			children,
			session,
			autoConnect,
			url,
			initialSettings,
			configuration: configOverride,
			...props
		},
		ref
	) => {
		const config =
			PROVIDER_CONFIGURATIONS[
				kind as keyof typeof PROVIDER_CONFIGURATIONS
			];

		if (!config) {
			console.warn(`Unknown provider kind: ${kind}`);
			return null;
		}

		// Merge configuration with overrides
		const finalConfig = { ...config, ...configOverride };

		// For listeners, render the body factory directly without wrapper
		if (finalConfig.variant === 'listener') {
			return (
				<ProviderBodyFactory
					kind={finalConfig.kind}
					configuration={finalConfig}
					session={session}
					autoConnect={autoConnect}
					url={url}
					initialSettings={initialSettings}
					{...props}
				>
					{children}
				</ProviderBodyFactory>
			);
		}

		// For context providers, wrap with base Provider component
		return (
			<Provider
				ref={ref}
				variant={finalConfig.variant}
				position={finalConfig.position}
				{...props}
			>
				<ProviderBodyFactory
					kind={finalConfig.kind}
					configuration={finalConfig}
					session={session}
					autoConnect={autoConnect}
					url={url}
					initialSettings={initialSettings}
					{...props}
				>
					{children}
				</ProviderBodyFactory>
			</Provider>
		);
	}
);

UnifiedProvider.displayName = 'UnifiedProvider';

export default UnifiedProvider;
