import React from 'react';
import clsx from 'clsx';

interface ChartContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: 'horizontal' | 'vertical';
	legendPosition?: 'top' | 'bottom' | 'left' | 'right';
	className?: string;
	children: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
	orientation = 'vertical',
	legendPosition = 'bottom',
	className = '',
	children,
	...rest
}) => {
	const containerClass = clsx(
		'chart',
		`chart--${legendPosition}`,
		`chart-orientation--${orientation}`,
		className
	);
	return (
		<div className={containerClass} {...rest}>
			{children}
		</div>
	);
};

export default ChartContainer;
