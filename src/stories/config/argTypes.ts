// Common argument types for Storybook controls

export const commonArgTypes = {
	variant: {
		control: 'select',
		options: [
			'default',
			'primary',
			'secondary',
			'danger',
			'success',
			'warning',
		],
		description: 'Component variant/style',
	},
	size: {
		control: 'select',
		options: ['small', 'medium', 'large'],
		description: 'Component size',
	},
	disabled: {
		control: 'boolean',
		description: 'Disable the component',
	},
	loading: {
		control: 'boolean',
		description: 'Show loading state',
	},
	className: {
		control: 'text',
		description: 'Additional CSS classes',
	},
	children: {
		control: 'text',
		description: 'Content to display',
	},
};

export const buttonArgTypes = {
	...commonArgTypes,
	onClick: { action: 'clicked' },
	type: {
		control: 'select',
		options: ['button', 'submit', 'reset'],
		description: 'Button type',
	},
};

export const modalArgTypes = {
	open: {
		control: 'boolean',
		description: 'Whether the modal is open',
	},
	onClose: { action: 'closed' },
	title: {
		control: 'text',
		description: 'Modal title',
	},
	size: {
		control: 'select',
		options: ['small', 'medium', 'large', 'fullscreen'],
		description: 'Modal size',
	},
};

export const cardArgTypes = {
	...commonArgTypes,

	// === CORE CARD PROPS ===
	kind: {
		control: { type: 'select' },
		options: [
			'default',
			'elevated',
			'outlined',
			'filled',
			'friend',
			'game',
			'profile',
			'notification',
			'stats',
			'settings',
			'achievement',
			'puzzle',
			'leaderboard',
			'chat-preview',
			'room-info',
			'match-summary',
			'user-status',
			'custom',
		],
		description:
			'Card type/variant for specialized layouts',
		table: {
			type: { summary: 'ExtendedCardKind' },
			defaultValue: { summary: 'default' },
		},
	},
	variant: {
		control: { type: 'select' },
		options: ['default', 'elevated', 'outlined', 'filled'],
		description: 'Visual style variant',
		table: {
			type: {
				summary:
					"'default' | 'elevated' | 'outlined' | 'filled'",
			},
			defaultValue: { summary: 'default' },
		},
	},
	size: {
		control: { type: 'select' },
		options: ['small', 'medium', 'large'],
		description: 'Card size',
		table: {
			type: { summary: "'small' | 'medium' | 'large'" },
			defaultValue: { summary: 'medium' },
		},
	},
	padding: {
		control: { type: 'select' },
		options: ['none', 'small', 'medium', 'large'],
		description: 'Internal padding amount',
		table: {
			type: {
				summary: "'none' | 'small' | 'medium' | 'large'",
			},
			defaultValue: { summary: 'medium' },
		},
	},
	hover: {
		control: { type: 'boolean' },
		description: 'Enable hover effects',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
	clickable: {
		control: { type: 'boolean' },
		description: 'Make card clickable/interactive',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
	shape: {
		control: { type: 'select' },
		options: [
			'horizontal-rect',
			'vertical-rect',
			'square',
			'circle',
		],
		description: 'Card shape/aspect ratio',
		table: {
			type: {
				summary:
					"'horizontal-rect' | 'vertical-rect' | 'square' | 'circle'",
			},
			defaultValue: { summary: 'horizontal-rect' },
		},
	},

	// === CONTENT PROPS ===
	title: {
		control: { type: 'text' },
		description: 'Card title text',
		table: {
			type: { summary: 'string' },
		},
	},
	subtitle: {
		control: { type: 'text' },
		description: 'Card subtitle text',
		table: {
			type: { summary: 'string' },
		},
	},
	content: {
		control: { type: 'text' },
		description: 'Card body content',
		table: {
			type: { summary: 'React.ReactNode' },
		},
	},
	actions: {
		control: { type: 'object' },
		description: 'Action buttons/elements',
		table: {
			type: { summary: 'React.ReactNode' },
		},
	},

	// === SIZING PROPS ===
	w: {
		control: { type: 'text' },
		description: 'Card width (CSS value)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	h: {
		control: { type: 'text' },
		description: 'Card height (CSS value)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	minW: {
		control: { type: 'text' },
		description: 'Minimum width (CSS value)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	minH: {
		control: { type: 'text' },
		description: 'Minimum height (CSS value)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	maxW: {
		control: { type: 'text' },
		description: 'Maximum width (CSS value)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	maxH: {
		control: { type: 'text' },
		description: 'Maximum height (CSS value)',
		table: {
			type: { summary: 'string | number' },
		},
	},

	// === NOTIFICATION CARD PROPS ===
	notificationType: {
		control: { type: 'select' },
		options: ['info', 'warning', 'error', 'success'],
		description:
			'Notification type (for notification cards)',
		table: {
			type: {
				summary: "'info' | 'warning' | 'error' | 'success'",
			},
			defaultValue: { summary: 'info' },
		},
	},

	// === FRIEND CARD PROPS ===
	friend: {
		control: { type: 'object' },
		description: 'Friend data object (for friend cards)',
		table: {
			type: { summary: 'FriendData' },
		},
	},
	onChallenge: {
		action: 'challenge',
		description: 'Challenge friend callback',
		table: {
			type: { summary: '(id: string) => void' },
		},
	},
	onMessage: {
		action: 'message',
		description: 'Message friend callback',
		table: {
			type: { summary: '(id: string) => void' },
		},
	},
	onRemove: {
		action: 'remove',
		description: 'Remove friend callback',
		table: {
			type: { summary: '(id: string) => void' },
		},
	},
	unreadCount: {
		control: { type: 'number' },
		description: 'Unread message count',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '0' },
		},
	},

	// === STATS CARD PROPS ===
	statValue: {
		control: { type: 'text' },
		description: 'Primary stat value',
		table: {
			type: { summary: 'string | number' },
		},
	},
	statLabel: {
		control: { type: 'text' },
		description: 'Primary stat label',
		table: {
			type: { summary: 'string' },
		},
	},
	additionalStats: {
		control: { type: 'object' },
		description: 'Additional statistics array',
		table: {
			type: {
				summary:
					'Array<{label: string, value: string | number}>',
			},
		},
	},

	// === PROFILE CARD PROPS ===
	profile: {
		control: { type: 'object' },
		description: 'Profile data object (for profile cards)',
		table: {
			type: { summary: 'ProfileData' },
		},
	},

	// === ROOM INFO CARD PROPS ===
	roomInfo: {
		control: { type: 'object' },
		description:
			'Room information object (for room-info cards)',
		table: {
			type: { summary: 'RoomInfoData' },
		},
	},

	// === OTHER SPECIALIZED PROPS ===
	leaderboard: {
		control: { type: 'object' },
		description:
			'Leaderboard data array (for leaderboard cards)',
		table: {
			type: { summary: 'LeaderboardEntry[]' },
		},
	},
	puzzle: {
		control: { type: 'object' },
		description: 'Puzzle data object (for puzzle cards)',
		table: {
			type: { summary: 'PuzzleData' },
		},
	},
	matchSummary: {
		control: { type: 'object' },
		description:
			'Match summary data (for match-summary cards)',
		table: {
			type: { summary: 'MatchSummaryData' },
		},
	},
	userStatus: {
		control: { type: 'object' },
		description: 'User status data (for user-status cards)',
		table: {
			type: { summary: 'UserStatusData' },
		},
	},

	// === EVENT PROPS ===
	onClick: {
		action: 'clicked',
		description: 'Click event handler',
		table: {
			type: {
				summary: '(event: React.MouseEvent) => void',
			},
		},
	},
};

export const chartArgTypes = {
	data: {
		control: 'object',
		description: 'Chart data array',
	},
	title: {
		control: 'text',
		description: 'Chart title',
	},
	colorScheme: {
		control: 'select',
		options: [
			'default',
			'primary',
			'secondary',
			'rainbow',
			'monochrome',
		],
		description: 'Color scheme',
	},
	height: {
		control: 'number',
		description: 'Chart height in pixels',
	},
	showLegend: {
		control: 'boolean',
		description: 'Show chart legend',
	},
	showGrid: {
		control: 'boolean',
		description: 'Show grid lines',
	},
};

export const gridArgTypes = {
	// Core Grid Props
	kind: {
		control: { type: 'select' as const },
		options: ['grid', 'pregame', 'solved'],
		description:
			'Grid variant that determines layout and behavior',
		table: {
			type: { summary: "'grid' | 'pregame' | 'solved'" },
			defaultValue: { summary: 'grid' },
		},
	},
	words: {
		control: { type: 'object' as const },
		description:
			'Array of words/items to display in grid cells',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	gridSize: {
		control: { type: 'object' as const },
		description: 'Grid dimensions (rows x cols)',
		table: {
			type: { summary: '{ rows: number; cols: number }' },
			defaultValue: { summary: '{ rows: 4, cols: 4 }' },
		},
	},

	// Interactive Props
	selected: {
		control: { type: 'object' as const },
		description: 'Array of currently selected words',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	locked: {
		control: { type: 'object' as const },
		description: 'Array of locked/disabled words',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	wildcards: {
		control: { type: 'object' as const },
		description:
			'Array of wildcard words with special styling',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	onSelect: {
		action: 'word-selected',
		description: 'Callback when a word is selected',
		table: {
			type: { summary: '(word: string) => void' },
		},
	},

	// State Props
	isLocked: {
		control: { type: 'boolean' as const },
		description:
			'Whether the entire grid is locked/disabled',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
	preview: {
		control: { type: 'boolean' as const },
		description: 'Preview mode - disables interactions',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},

	// VS Mode Props
	opponentSelected: {
		control: { type: 'object' as const },
		description:
			'Array of words selected by opponent (VS mode)',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	playerId: {
		control: { type: 'text' as const },
		description: 'Current player ID for VS mode',
		table: {
			type: { summary: 'string' },
		},
	},
	opponentId: {
		control: { type: 'text' as const },
		description: 'Opponent player ID for VS mode',
		table: {
			type: { summary: 'string' },
		},
	},
	playerColor: {
		control: { type: 'color' as const },
		description: 'Color for current player selections',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '#2563eb' },
		},
	},
	opponentColor: {
		control: { type: 'color' as const },
		description: 'Color for opponent selections',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '#ef4444' },
		},
	},
	botDifficulty: {
		control: { type: 'select' as const },
		options: ['easy', 'medium', 'hard'],
		description: 'Bot difficulty level for VS bot mode',
		table: {
			type: { summary: 'string' },
		},
	},

	// Solved Mode Props
	solvedBy: {
		control: { type: 'object' as const },
		description: 'Record of which player solved each word',
		table: {
			type: { summary: 'Record<string, string[]>' },
			defaultValue: { summary: '{}' },
		},
	},
	pendingSolvedGroups: {
		control: { type: 'object' as const },
		description:
			'Array of solved groups to display (solved mode)',
		table: {
			type: {
				summary: '{ groupIdx: number; words: string[] }[]',
			},
			defaultValue: { summary: '[]' },
		},
	},
	activePuzzle: {
		control: { type: 'object' as const },
		description: 'Puzzle metadata including group labels',
		table: {
			type: { summary: '{ groupLabels?: string[] }' },
		},
	},
	categoryDirection: {
		control: { type: 'select' as const },
		options: ['row', 'column'],
		description: 'Direction to layout solved categories',
		table: {
			type: { summary: "'row' | 'column'" },
			defaultValue: { summary: 'column' },
		},
	},

	// Styling Props
	className: {
		control: { type: 'text' as const },
		description:
			'Additional CSS classes for grid container',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
	},
	cellClassName: {
		control: { type: 'text' as const },
		description: 'Additional CSS classes for grid cells',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
	},
	style: {
		control: { type: 'object' as const },
		description: 'Inline styles for grid container',
		table: {
			type: { summary: 'React.CSSProperties' },
		},
	},
} as const;

export const wrapperArgTypes = {
	// === LAYOUT PROPS ===
	layout: {
		control: 'select',
		options: ['flex', 'grid', undefined],
		description:
			'Layout display type (flex, grid, or block)',
		table: {
			type: { summary: "'flex' | 'grid' | undefined" },
			defaultValue: { summary: 'undefined (block)' },
		},
	},
	direction: {
		control: 'select',
		options: ['row', 'column'],
		description: 'Direction for flex/grid layout',
		table: {
			type: { summary: "'row' | 'column'" },
		},
	},
	center: {
		control: 'boolean',
		description:
			'Center content horizontally and vertically',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
	gap: {
		control: 'number',
		description:
			'Gap between children (px or valid CSS value)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	columns: {
		control: 'number',
		description: 'Number of columns for grid layout',
		table: {
			type: { summary: 'number | string' },
		},
	},
	rows: {
		control: 'number',
		description: 'Number of rows for grid layout',
		table: {
			type: { summary: 'number | string' },
		},
	},

	// === SPACING PROPS ===
	p: {
		control: 'text',
		description: 'Padding (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	padding: {
		control: 'text',
		description:
			'Padding (full name, takes precedence over p)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	m: {
		control: 'text',
		description: 'Margin (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	margin: {
		control: 'text',
		description:
			'Margin (full name, takes precedence over m)',
		table: {
			type: { summary: 'string | number' },
		},
	},

	// === BORDER PROPS ===
	border: {
		control: 'text',
		description: 'CSS border shorthand',
		table: {
			type: { summary: 'string' },
		},
	},
	radius: {
		control: 'number',
		description: 'Border radius (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	borderRadius: {
		control: 'number',
		description:
			'Border radius (full name, takes precedence over radius)',
		table: {
			type: { summary: 'string | number' },
		},
	},

	// === SIZING PROPS ===
	w: {
		control: 'text',
		description: 'Width (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	width: {
		control: 'text',
		description:
			'Width (full name, takes precedence over w)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	h: {
		control: 'text',
		description: 'Height (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	height: {
		control: 'text',
		description:
			'Height (full name, takes precedence over h)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	minW: {
		control: 'text',
		description: 'Minimum width (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	minWidth: {
		control: 'text',
		description:
			'Minimum width (full name, takes precedence over minW)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	minH: {
		control: 'text',
		description: 'Minimum height (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	minHeight: {
		control: 'text',
		description:
			'Minimum height (full name, takes precedence over minH)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	maxW: {
		control: 'text',
		description: 'Maximum width (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	maxWidth: {
		control: 'text',
		description:
			'Maximum width (full name, takes precedence over maxW)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	maxH: {
		control: 'text',
		description: 'Maximum height (abbreviated)',
		table: {
			type: { summary: 'string | number' },
		},
	},
	maxHeight: {
		control: 'text',
		description:
			'Maximum height (full name, takes precedence over maxH)',
		table: {
			type: { summary: 'string | number' },
		},
	},

	// === APPEARANCE PROPS ===
	bg: {
		control: 'color',
		description: 'Background color (abbreviated)',
		table: {
			type: { summary: 'string' },
		},
	},
	background: {
		control: 'color',
		description:
			'Background color (full name, takes precedence over bg)',
		table: {
			type: { summary: 'string' },
		},
	},
	shadow: {
		control: 'text',
		description: 'Box shadow (abbreviated)',
		table: {
			type: { summary: 'string' },
		},
	},
	boxShadow: {
		control: 'text',
		description:
			'Box shadow (full name, takes precedence over shadow)',
		table: {
			type: { summary: 'string' },
		},
	},

	// === POSITIONING PROPS ===
	position: {
		control: 'select',
		options: [
			'static',
			'relative',
			'absolute',
			'fixed',
			'sticky',
		],
		description: 'CSS position property',
		table: {
			type: {
				summary:
					"'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'",
			},
		},
	},
	top: {
		control: 'text',
		description: 'CSS top property',
		table: {
			type: { summary: 'string | number' },
		},
	},
	right: {
		control: 'text',
		description: 'CSS right property',
		table: {
			type: { summary: 'string | number' },
		},
	},
	bottom: {
		control: 'text',
		description: 'CSS bottom property',
		table: {
			type: { summary: 'string | number' },
		},
	},
	left: {
		control: 'text',
		description: 'CSS left property',
		table: {
			type: { summary: 'string | number' },
		},
	},
	zIndex: {
		control: 'number',
		description: 'CSS z-index property',
		table: {
			type: { summary: 'number' },
		},
	},

	// === OVERFLOW PROPS ===
	overflow: {
		control: 'select',
		options: ['visible', 'hidden', 'scroll', 'auto'],
		description: 'CSS overflow property',
		table: {
			type: {
				summary: "'visible' | 'hidden' | 'scroll' | 'auto'",
			},
		},
	},
	overflowX: {
		control: 'select',
		options: ['visible', 'hidden', 'scroll', 'auto'],
		description: 'CSS overflow-x property',
		table: {
			type: {
				summary: "'visible' | 'hidden' | 'scroll' | 'auto'",
			},
		},
	},
	overflowY: {
		control: 'select',
		options: ['visible', 'hidden', 'scroll', 'auto'],
		description: 'CSS overflow-y property',
		table: {
			type: {
				summary: "'visible' | 'hidden' | 'scroll' | 'auto'",
			},
		},
	},

	// === DISPLAY PROPS ===
	display: {
		control: 'select',
		options: [
			'block',
			'inline',
			'inline-block',
			'flex',
			'inline-flex',
			'grid',
			'inline-grid',
			'none',
			'contents',
		],
		description:
			'CSS display property (overrides layout prop)',
		table: {
			type: {
				summary:
					"'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none' | 'contents'",
			},
		},
	},

	// === TRANSFORM & TRANSITION PROPS ===
	transform: {
		control: 'text',
		description: 'CSS transform property',
		table: {
			type: { summary: 'string' },
		},
	},
	transition: {
		control: 'text',
		description: 'CSS transition property',
		table: {
			type: { summary: 'string' },
		},
	},

	// === BOX MODEL PROPS ===
	boxSizing: {
		control: 'select',
		options: ['border-box', 'content-box'],
		description: 'CSS box-sizing property',
		table: {
			type: { summary: "'border-box' | 'content-box'" },
		},
	},

	// === BASIC PROPS ===
	className: {
		control: 'text',
		description: 'Additional CSS classes',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
	},
	style: {
		control: 'object',
		description:
			'Inline styles (merged last for overrides)',
		table: {
			type: { summary: 'React.CSSProperties' },
		},
	},
};

export const headerArgTypes = {
	// === CORE HEADER PROPS ===
	kind: {
		control: { type: 'select' },
		options: [
			'browse',
			'browse-tabbed',
			'dashboard',
			'dashboard-simple',
			'modal',
			'modal-close-only',
			'page',
			'page-with-nav',
			'sidebar',
			'navigation',
			'simple',
			'simple-centered',
			'game-header',
			'settings-header',
			'profile-header',
			'custom',
		],
		description:
			'Header type/variant for specialized layouts',
		table: {
			type: { summary: 'ExtendedHeaderKind' },
			defaultValue: { summary: 'custom' },
		},
	},
	title: {
		control: { type: 'text' },
		description: 'Header title text',
		table: {
			type: { summary: 'string' },
		},
	},
	subtitle: {
		control: { type: 'text' },
		description: 'Header subtitle text',
		table: {
			type: { summary: 'string' },
		},
	},
	icon: {
		control: { type: 'object' },
		description: 'Header icon element',
		table: {
			type: { summary: 'React.ReactNode' },
		},
	},

	// === LAYOUT PROPS ===
	layout: {
		control: { type: 'select' },
		options: [
			'horizontal',
			'vertical',
			'split',
			'stacked',
			'bottom',
		],
		description: 'Header layout arrangement',
		table: {
			type: {
				summary:
					"'horizontal' | 'vertical' | 'split' | 'stacked' | 'bottom'",
			},
		},
	},
	position: {
		control: { type: 'select' },
		options: ['top', 'bottom', 'sidebar'],
		description: 'Header position',
		table: {
			type: { summary: "'top' | 'bottom' | 'sidebar'" },
			defaultValue: { summary: 'top' },
		},
	},
	sticky: {
		control: { type: 'boolean' },
		description: 'Make header sticky when scrolling',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},

	// === BEHAVIOR PROPS ===
	collapsible: {
		control: { type: 'boolean' },
		description: 'Allow header to be collapsed',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
	isCollapsed: {
		control: { type: 'boolean' },
		description: 'Current collapsed state',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},

	// === APPEARANCE PROPS ===
	background: {
		control: { type: 'select' },
		options: [
			'transparent',
			'primary',
			'secondary',
			'custom',
		],
		description: 'Background style',
		table: {
			type: {
				summary:
					"'transparent' | 'primary' | 'secondary' | 'custom'",
			},
		},
	},
	customBackgroundColor: {
		control: { type: 'color' },
		description:
			'Custom background color (when background=custom)',
		table: {
			type: { summary: 'string' },
		},
	},
	borderBottom: {
		control: { type: 'boolean' },
		description: 'Show bottom border',
		table: {
			type: { summary: 'boolean' },
		},
	},

	// === TAB PROPS ===
	tabs: {
		control: { type: 'object' },
		description: 'Tab configuration array',
		table: {
			type: { summary: 'TabConfiguration[]' },
		},
	},
	currentTab: {
		control: { type: 'text' },
		description: 'Currently active tab ID',
		table: {
			type: { summary: 'string' },
		},
	},

	// === ACTION PROPS ===
	actions: {
		control: { type: 'object' },
		description: 'Action buttons/elements array',
		table: {
			type: { summary: 'HeaderAction[]' },
		},
	},

	// === SECTIONS PROPS ===
	sections: {
		control: { type: 'object' },
		description: 'Custom section slots for flexible layout',
		table: {
			type: { summary: 'HeaderSections' },
		},
	},

	// === ACCESSIBILITY PROPS ===
	ariaLabel: {
		control: { type: 'text' },
		description: 'Accessibility label',
		table: {
			type: { summary: 'string' },
		},
	},
	role: {
		control: { type: 'text' },
		description: 'ARIA role',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'banner' },
		},
	},

	// === EVENT PROPS ===
	onTabChange: {
		action: 'tab-changed',
		description: 'Tab change callback',
		table: {
			type: { summary: '(tab: string) => void' },
		},
	},
	onToggleCollapse: {
		action: 'collapse-toggled',
		description: 'Collapse toggle callback',
		table: {
			type: { summary: '() => void' },
		},
	},
};

export const utilityArgTypes = {
	// === CORE UTILITY PROPS ===
	kind: {
		control: { type: 'select' },
		options: [
			'tooltip',
			'popover',
			'dropdown-menu',
			'context-menu',
			'modal-overlay',
			'divider',
			'separator',
			'spacer',
			'section-break',
			'tag',
			'chip',
			'badge',
			'label',
			'pill',
			'status-indicator',
			'stepper',
			'breadcrumb',
			'pagination',
			'wizard-steps',
			'rating-stars',
			'rating-hearts',
			'thumbs-rating',
			'numeric-rating',
			'feedback-scale',
			'container',
			'grid-item',
			'flex-item',
			'stack',
			'inline-stack',
		],
		description: 'Utility component type',
		table: {
			type: { summary: 'UtilityKind' },
			defaultValue: { summary: 'tooltip' },
		},
	},
	label: {
		control: { type: 'text' },
		description: 'Label text for the utility',
		table: {
			type: { summary: 'string' },
		},
	},
	description: {
		control: { type: 'text' },
		description: 'Description text',
		table: {
			type: { summary: 'string' },
		},
	},
	icon: {
		control: { type: 'object' },
		description: 'Icon element',
		table: {
			type: { summary: 'React.ReactNode' },
		},
	},

	// === BEHAVIOR PROPS ===
	placement: {
		control: { type: 'select' },
		options: [
			'top',
			'bottom',
			'left',
			'right',
			'top-start',
			'top-end',
			'bottom-start',
			'bottom-end',
		],
		description: 'Placement for tooltips/popovers',
		table: {
			type: { summary: 'UtilityPlacement' },
		},
	},
	trigger: {
		control: { type: 'select' },
		options: ['hover', 'click', 'focus', 'manual'],
		description: 'Trigger method for interactive utilities',
		table: {
			type: {
				summary: "'hover' | 'click' | 'focus' | 'manual'",
			},
		},
	},
	delay: {
		control: { type: 'number' },
		description: 'Delay before showing (milliseconds)',
		table: {
			type: { summary: 'number' },
		},
	},
	dismissible: {
		control: { type: 'boolean' },
		description: 'Allow dismissing the utility',
		table: {
			type: { summary: 'boolean' },
		},
	},
	interactive: {
		control: { type: 'boolean' },
		description: 'Make utility interactive',
		table: {
			type: { summary: 'boolean' },
		},
	},

	// === STATE PROPS ===
	active: {
		control: { type: 'boolean' },
		description: 'Active/selected state',
		table: {
			type: { summary: 'boolean' },
		},
	},
	disabled: {
		control: { type: 'boolean' },
		description: 'Disabled state',
		table: {
			type: { summary: 'boolean' },
		},
	},
	loading: {
		control: { type: 'boolean' },
		description: 'Loading state',
		table: {
			type: { summary: 'boolean' },
		},
	},

	// === VALUE PROPS ===
	value: {
		control: { type: 'number' },
		description: 'Current value (for ratings/steppers)',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '0' },
		},
	},
	maxValue: {
		control: { type: 'number' },
		description: 'Maximum value (for ratings)',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '5' },
		},
	},
	currentStep: {
		control: { type: 'number' },
		description: 'Current step (for steppers)',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '0' },
		},
	},
	totalSteps: {
		control: { type: 'number' },
		description: 'Total steps (for steppers)',
		table: {
			type: { summary: 'number' },
			defaultValue: { summary: '3' },
		},
	},

	// === STYLE PROPS ===
	variant: {
		control: { type: 'select' },
		options: [
			'default',
			'primary',
			'secondary',
			'success',
			'warning',
			'error',
			'info',
		],
		description: 'Visual variant',
		table: {
			type: { summary: 'UtilityVariant' },
		},
	},
	size: {
		control: { type: 'select' },
		options: ['xs', 'sm', 'md', 'lg', 'xl'],
		description: 'Size variant',
		table: {
			type: { summary: 'UtilitySize' },
		},
	},
	color: {
		control: { type: 'color' },
		description: 'Custom text color',
		table: {
			type: { summary: 'string' },
		},
	},
	backgroundColor: {
		control: { type: 'color' },
		description: 'Custom background color',
		table: {
			type: { summary: 'string' },
		},
	},
	borderRadius: {
		control: { type: 'text' },
		description: 'Custom border radius',
		table: {
			type: { summary: 'string' },
		},
	},

	// === ACTION PROPS ===
	actions: {
		control: { type: 'object' },
		description: 'Action configuration array',
		table: {
			type: { summary: 'UtilityAction[]' },
		},
	},

	// === EVENT PROPS ===
	onClick: {
		action: 'clicked',
		description: 'Click event handler',
		table: {
			type: { summary: '() => void' },
		},
	},
	onDismiss: {
		action: 'dismissed',
		description: 'Dismiss event handler',
		table: {
			type: { summary: '() => void' },
		},
	},
	onValueChange: {
		action: 'value-changed',
		description: 'Value change handler (for ratings)',
		table: {
			type: { summary: '(value: number) => void' },
		},
	},
	onStepChange: {
		action: 'step-changed',
		description: 'Step change handler (for steppers)',
		table: {
			type: { summary: '(step: number) => void' },
		},
	},

	// === BASIC PROPS ===
	componentId: {
		control: { type: 'text' },
		description: 'Unique component identifier',
		table: {
			type: { summary: 'string' },
		},
	},
};
