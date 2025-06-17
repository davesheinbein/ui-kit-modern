import React from 'react';
import { Modal } from '../Modal';
import styles from './SignInModal.module.scss';

export interface SignInModalProps {
	open: boolean;
	onClose: () => void;
	onSignIn: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
	open,
	onClose,
	onSignIn,
}) => (
	<Modal
		open={open}
		onClose={onClose}
		className={styles.signinModal}
	>
		<div className={styles.signinModalContent}>
			<h2 className={styles.signinModalTitle}>
				Sign In Required
			</h2>
			<button
				className={styles.signinModalBtn}
				onClick={onSignIn}
			>
				Sign In
			</button>
		</div>
	</Modal>
);

export default SignInModal;
