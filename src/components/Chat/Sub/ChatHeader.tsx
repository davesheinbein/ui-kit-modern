import React from 'react';

interface ChatHeaderProps {
	title?: string;
	avatar?: React.ReactNode;
	showCloseButton?: boolean;
	onClose?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
	title,
	avatar,
	showCloseButton,
	onClose,
}) => (
	<div className='chatHeader'>
		{avatar && <span className='chatAvatar'>{avatar}</span>}
		{title && <span className='chatTitle'>{title}</span>}
		{showCloseButton && (
			<button
				className='chatCloseBtn'
				onClick={onClose}
				aria-label='Close chat'
			>
				×
			</button>
		)}
	</div>
);

export default ChatHeader;
