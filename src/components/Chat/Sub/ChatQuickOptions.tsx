import React from 'react';

interface ChatQuickOptionsProps {
	options: string[];
	onSend: (message: string) => void;
}

const ChatQuickOptions: React.FC<ChatQuickOptionsProps> = ({
	options,
	onSend,
}) => (
	<div className='vsQuickChatBar'>
		{options.map((opt) => (
			<button
				key={opt}
				className='vsQuickChatButton'
				onClick={() => onSend(opt)}
				type='button'
			>
				{opt}
			</button>
		))}
	</div>
);

export default ChatQuickOptions;
