import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSocket } from '../SocketProvider';

const AchievementSocketListener: React.FC = () => {
	const dispatch = useDispatch();
	const { socket } = useSocket();

	useEffect(() => {
		if (!socket) return;
		// Example: socket.on('achievement', (data) => dispatch(...))
		// Add your socket event listeners here
		return () => {
			// Clean up listeners
		};
	}, [socket, dispatch]);

	return null;
};

export default AchievementSocketListener;
