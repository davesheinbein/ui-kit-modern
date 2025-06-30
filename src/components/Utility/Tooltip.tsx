import React, { useState, useRef, useEffect } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
	content: React.ReactNode;
	children: React.ReactElement;
	placement?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({
	content,
	children,
	placement = 'bottom',
}) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		function handleClick(e: MouseEvent) {
			if (
				ref.current &&
				!ref.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClick);
		return () =>
			document.removeEventListener(
				'mousedown',
				handleClick
			);
	}, [open]);

	return (
		<div
			className={styles.tooltipWrapper}
			ref={ref}
			style={{
				display: 'inline-block',
				position: 'relative',
			}}
		>
			{React.cloneElement(children, {
				onClick: (e: React.MouseEvent) => {
					e.stopPropagation();
					setOpen((v: boolean) => !v);
					if (children.props.onClick)
						children.props.onClick(e);
				},
			})}
			{open && (
				<div
					className={`${styles.tooltip} ${styles[placement] || ''}`}
					role='tooltip'
				>
					{content}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
