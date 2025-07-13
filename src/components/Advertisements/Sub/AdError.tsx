import * as React from 'react';
import { Wrapper } from '../../Wrappers';

const AdError: React.FC<{
	fallbackContent?: React.ReactNode;
	ref?: React.Ref<HTMLDivElement>;
}> = ({ fallbackContent, ref }) => (
	<Wrapper ref={ref}>{fallbackContent}</Wrapper>
);

export default AdError;
