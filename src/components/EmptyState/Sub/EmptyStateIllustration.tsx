import React from 'react';

export interface EmptyStateIllustrationProps {
	illustration?: React.ReactNode;
	showIllustration?: boolean;
	className?: string;
}

const EmptyStateIllustration: React.FC<
	EmptyStateIllustrationProps
> = ({ illustration, showIllustration, className }) => {
	if (!showIllustration || !illustration) return null;
	return <div className={className}>{illustration}</div>;
};

export default EmptyStateIllustration;
