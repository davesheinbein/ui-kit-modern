import React from 'react';
import clsx from 'clsx';

interface ChatContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: React.ReactNode;
	ref?: React.Ref<HTMLDivElement>;
}

const ChatContainer = React.forwardRef<
	HTMLDivElement,
	ChatContainerProps
>(({ className, children, ...rest }, ref) => (
	<div
		ref={ref}
		className={clsx('chat', className)}
		{...rest}
	>
		{children}
	</div>
));

export default ChatContainer;
