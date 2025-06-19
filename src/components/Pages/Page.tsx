/**
 * Page component - a wrapper around UnifiedPage for the most common use case
 * For more advanced page types, use UnifiedPage with the 'kind' prop
 * @example
 * <Page kind="startup" title="Welcome">Content</Page>
 * <Page kind="dashboard" title="Dashboard">Dashboard content</Page>
 */

import React from 'react';
import UnifiedPage, {
	UnifiedPageProps,
} from './UnifiedPage';

export interface PageProps
	extends Omit<UnifiedPageProps, 'kind'> {
	/** Page kind - defaults to 'custom' */
	kind?: UnifiedPageProps['kind'];
}

const Page: React.FC<PageProps> = ({
	kind = 'custom',
	children,
	...props
}) => {
	return (
		<UnifiedPage kind={kind} {...props}>
			{children}
		</UnifiedPage>
	);
};

export default Page;
