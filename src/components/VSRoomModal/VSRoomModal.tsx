import React from 'react';
import styles from './VSRoomModal.module.scss';

export interface VSRoomModalProps {
	open: boolean;
	onClose: () => void;
	onJoin: (roomCode: string) => void;
}

const VSRoomModal: React.FC<VSRoomModalProps> = ({
	open,
	onClose,
	onJoin,
}) => {
	const [roomCode, setRoomCode] = React.useState('');
	if (!open) return null;
	return (
		<div className={styles.vsRoomModalOverlay}>
			<div className={styles.vsRoomModalContent}>
				<h2>Join Room</h2>
				<input
					className={styles.vsRoomModalInput}
					value={roomCode}
					onChange={(e) => setRoomCode(e.target.value)}
					placeholder='Enter room code'
				/>
				<div className={styles.vsRoomModalActions}>
					<button onClick={() => onJoin(roomCode)}>
						Join
					</button>
					<button onClick={onClose}>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default VSRoomModal;
