import React, { useState } from 'react';

interface ChatInputProps {
	onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
	onSend,
}) => {
	const [input, setInput] = useState('');

	const handleSend = () => {
		if (input.trim()) {
			onSend(input.trim());
			setInput('');
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Enter') {
			handleSend();
		}
	};

	return (
		<div className='chatInput'>
			<input
				className='chatInputField'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder='Type a message...'
				aria-label='Type a message'
			/>
			<button
				className='chatSendBtn'
				onClick={handleSend}
				aria-label='Send message'
			>
				Send
			</button>
		</div>
	);
};

export default ChatInput;
