import type {
	BannerKind,
	BannerConfiguration,
	BannerAction,
} from '../configurations';

export interface BannerProps {
	'kind'?: BannerKind;
	'message'?: string;
	'className'?: string;
	'player'?: {
		username: string;
		avatarUrl?: string;
		groupsSolved: number;
		mistakes: number;
		isYou?: boolean;
	};
	'opponent'?: {
		username: string;
		avatarUrl?: string;
		groupsSolved: number;
		mistakes: number;
	};
	'timer'?: string;
	'totalGroups'?: number;
	'showMistakes'?: boolean;
	'showTimer'?: boolean;
	'onEmoteClick'?: () => void;
	'type'?:
		| 'burn'
		| 'achievement'
		| 'system'
		| 'taunt'
		| 'success'
		| 'error'
		| 'info'
		| 'warning';
	'index'?: number;
	'icon'?: React.ReactNode;
	'duration'?: number;
	'configuration'?: Partial<BannerConfiguration>;
	'variant'?:
		| 'feedback'
		| 'notification'
		| 'toast'
		| 'status'
		| 'global';
	'position'?:
		| 'top'
		| 'bottom'
		| 'fixed'
		| 'relative'
		| 'center';
	'close'?: () => void;
	'autoClose'?: boolean;
	'aria-live'?: 'polite' | 'assertive' | 'off';
	'children'?: React.ReactNode;
	'actions'?: BannerAction[];
	[key: string]: any;
}
