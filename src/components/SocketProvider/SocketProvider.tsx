import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
} from 'react';

interface SocketContextType {
	socket: WebSocket | null;
	setSocket: (socket: WebSocket | null) => void;
}

export const SocketContext =
	createContext<SocketContextType>({
		socket: null,
		setSocket: () => {},
	});

export const useSocket = () => useContext(SocketContext);

interface SocketProviderProps {
	children: ReactNode;
}

const SocketProvider: React.FC<SocketProviderProps> = ({
	children,
}) => {
	const [socket, setSocket] = useState<WebSocket | null>(
		null
	);

	return (
		<SocketContext.Provider value={{ socket, setSocket }}>
			{children}
		</SocketContext.Provider>
	);
};

export default SocketProvider;
