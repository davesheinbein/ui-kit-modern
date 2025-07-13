import React from 'react';

interface EmptyStateContentProps {
	title?: string;
	description?: string;
	children?: React.ReactNode;
	className?: string;
}

const EmptyStateContent: React.FC<
	EmptyStateContentProps
> = ({ title, description, children, className }) => (
	<div
		className={className}
		style={{ textAlign: 'center' }}
	>
		{title && <h2 style={{ marginBottom: 8 }}>{title}</h2>}
		{description && (
			<div style={{ marginBottom: 12 }}>{description}</div>
		)}
		{children}
	</div>
);

export default EmptyStateContent;
