import React from 'react';
import { 
  FaCheck, FaTimes, FaCog, FaUser, FaHome, FaStar, FaSearch, FaHeart, FaBell, FaArrowLeft, FaArrowRight, FaRegCopy, FaExclamationTriangle, FaCheckCircle, FaExclamationCircle 
} from 'react-icons/fa';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
	name: IconName;
	size?: number | string;
	color?: string;
	className?: string;
}

export type IconName =
	| 'check'
	| 'close'
	| 'settings'
	| 'user'
	| 'home'
	| 'star'
	| 'search'
	| 'heart'
	| 'bell'
	| 'arrow-left'
	| 'arrow-right'
	| 'copy'
	| 'warning'
	| 'success'
	| 'danger';

const icons: Record<IconName, React.ComponentType<any>> = {
	check: FaCheck,
	close: FaTimes,
	settings: FaCog,
	user: FaUser,
	home: FaHome,
	star: FaStar,
	search: FaSearch,
	heart: FaHeart,
	bell: FaBell,
	'arrow-left': FaArrowLeft,
	'arrow-right': FaArrowRight,
	copy: FaRegCopy,
	warning: FaExclamationTriangle,
	success: FaCheckCircle,
	danger: FaExclamationCircle,
};

export const Icons: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '', ...props }) => {
	const IconComponent = icons[name];
	if (!IconComponent) return null;
	return <IconComponent size={size} color={color} className={className} {...props} />;
};

export default Icons;
