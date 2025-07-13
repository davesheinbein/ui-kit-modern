import * as React from 'react';
import { Wrapper } from '../../Wrappers';

const AdLoading: React.FC<{
	className?: string;
	style?: React.CSSProperties;
	ref?: React.Ref<HTMLDivElement>;
	dataTestId?: string;
}> = ({ className, style, ref, dataTestId }) => (
	<Wrapper
		ref={ref}
		className={className}
		style={style}
		data-testid={dataTestId}
	>
		Loading advertisement...
	</Wrapper>
);

export default AdLoading;
