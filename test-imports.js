// Test script to verify all component imports work correctly
const {
	// Buttons
	Button,
	PrimaryButton,
	SecondaryButton,
	IconButton,
	FriendsToggleButton,

	// Modals
	VSModeModal,
	VSRoomModal,
	EndGameModal,
	PreGameModal,

	// Complex Components
	Graphs,
	BrowseHeader,
	CustomizationCategory,

	// Providers
	SocketProvider,
	ThemePaletteProvider,

	// Theme
	ThemeSelector,
	themes,
	vsModeDefaults,

	// Statistics
	StatisticsSummary,

	// Others
	Footer,
	AchievementSocketListener,
} = require('./dist/index.cjs.js');

console.log('✅ All imports successful!');
console.log(
	'Available themes:',
	themes?.length || 'undefined'
);
console.log(
	'VSModeDefaults:',
	vsModeDefaults ? 'defined' : 'undefined'
);
console.log(
	'Components imported:',
	[
		Button && 'Button',
		VSModeModal && 'VSModeModal',
		Graphs && 'Graphs',
		ThemeSelector && 'ThemeSelector',
		StatisticsSummary && 'StatisticsSummary',
	]
		.filter(Boolean)
		.join(', ')
);
