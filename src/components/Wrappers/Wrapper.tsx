import React from 'react';
import UnifiedWrapper, {
	UnifiedWrapperProps,
} from './UnifiedWrapper';

/**
 * Primary Wrapper component - a wrapper around UnifiedWrapper for the most common use case
 * For more advanced wrapper types, use UnifiedWrapper with the 'kind' prop
 * @example
 * <Wrapper kind="component">Content</Wrapper>
 * <Wrapper kind="provider">App Content</Wrapper>
 * <Wrapper kind="legacy">Legacy Component</Wrapper>
 */
export interface WrapperProps
	extends Omit<UnifiedWrapperProps, 'kind'> {
	/** Wrapper kind - defaults to 'component' */
	kind?: UnifiedWrapperProps['kind'];
}

const Wrapper: React.FC<WrapperProps> = ({
	kind = 'component',
	children,
	...props
}) => {
	return (
		<UnifiedWrapper kind={kind} {...props}>
			{children}
		</UnifiedWrapper>
	);
};

export default Wrapper;
