import React from 'react';
import Loading from '../../Loading/Loading';

const DropdownLoading: React.FC<{
	loadingMessage?: string;
}> = ({ loadingMessage }) => (
	<div style={{ padding: 12, textAlign: 'center' }}>
		<Loading
			kind='spinner'
			size='sm'
			message={loadingMessage || 'Loading...'}
		/>
	</div>
);

export default DropdownLoading;
