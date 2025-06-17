import React, { useEffect, useState } from 'react';
import styles from './SessionDebugger.module.scss';

export interface SessionDebuggerProps {
	enabled?: boolean;
}

const SessionDebugger: React.FC<SessionDebuggerProps> = ({
	enabled = false,
}) => {
	const [clientTime, setClientTime] = useState<
		string | null
	>(null);

	useEffect(() => {
		setClientTime(new Date().toLocaleTimeString());
	}, []);

	if (!enabled) return null;

	// NOTE: You must provide your own session context or hook in your app
	// This is a UI-only debug component
	const session: any = undefined;
	const status = 'unknown';

	return (
		<div className={styles.sessionDebugger}>
			<div>
				<strong>Session Status:</strong> {status}
			</div>
			<div>
				<strong>User ID:</strong>{' '}
				{session?.user ? (session.user as any).id : 'None'}
			</div>
			<div>
				<strong>Email:</strong>{' '}
				{session?.user?.email || 'None'}
			</div>
			<div>
				<strong>Session Exists:</strong>{' '}
				{session ? 'Yes' : 'No'}
			</div>
			<div>
				<strong>Timestamp:</strong> {clientTime || '...'}
			</div>
		</div>
	);
};

export default SessionDebugger;
