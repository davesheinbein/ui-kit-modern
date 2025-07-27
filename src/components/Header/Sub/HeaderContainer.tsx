import React, { forwardRef } from 'react';
import { Wrapper } from '../../Wrappers';
import styles from '../Header.module.scss';

interface HeaderContainerProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	role?: string;
	ariaLabel?: string;
	testId?: string;
}

/**
 * HeaderContainer wraps the header content and supports ref forwarding.
 */
export const HeaderContainer = forwardRef<
	HTMLDivElement,
	HeaderContainerProps
>(
	(
		{
			children,
			className = '',
			style,
			role = 'banner',
			ariaLabel,
			testId,
		},
		ref
	) => (
		<header
			ref={ref}
			className={className}
			style={style}
			role={role}
			aria-label={ariaLabel}
			data-testid={testId}
		>
			<Wrapper className={styles.headerInner}>
				{children}
			</Wrapper>
		</header>
	)
);

HeaderContainer.displayName = 'HeaderContainer';
