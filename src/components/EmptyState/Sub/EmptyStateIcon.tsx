import React from 'react';

export interface EmptyStateIconProps {
	icon?: React.ReactNode;
	showIcon?: boolean;
	className?: string;
}

const EmptyStateIcon: React.FC<EmptyStateIconProps> = ({
	icon,
	showIcon,
	className,
}) => {
	if (!showIcon || !icon) return null;
	return <div className={className}>{icon}</div>;
};

export default EmptyStateIcon;
