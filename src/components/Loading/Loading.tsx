import React, { forwardRef } from 'react';
import type { LoadingProps } from './Sub/types';
import LoadingOrchestrator from './Sub/LoadingOrchestrator';

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
	(props) => <LoadingOrchestrator {...props} />
);

Loading.displayName = 'Loading';
export default Loading;
