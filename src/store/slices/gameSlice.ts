/**
 * Game Slice - Game Domain State Management
 *
 * Responsible for:
 * - Game session state
 * - Match data and history
 * - Leaderboards and rankings
 * - Game-related achievements
 *
 * Simple game domain focused on game business logic
 */

import {
	createSlice,
	createAsyncThunk,
	PayloadAction,
} from '@reduxjs/toolkit';

// Game interfaces
export interface GameSession {
	id: string;
	gameType: string;
	status:
		| 'waiting'
		| 'active'
		| 'paused'
		| 'completed'
		| 'aborted';
	players: GamePlayer[];
	currentTurn: string | null;
	startTime: number;
	endTime?: number;
	settings: Record<string, any>;
}

export interface GamePlayer {
	id: string;
	username: string;
	avatar?: string;
	isReady: boolean;
	isConnected: boolean;
	score: number;
	stats: Record<string, number>;
}

export interface Match {
	id: string;
	gameType: string;
	players: GamePlayer[];
	winner: string | null;
	duration: number;
	completedAt: number;
	stats: Record<string, any>;
}

export interface LeaderboardEntry {
	rank: number;
	playerId: string;
	username: string;
	avatar?: string;
	score: number;
	gamesPlayed: number;
	winRate: number;
	stats: Record<string, number>;
}

export interface Achievement {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: string;
	difficulty: 'easy' | 'medium' | 'hard' | 'legendary';
	progress: number;
	maxProgress: number;
	unlocked: boolean;
	unlockedAt?: number;
	rewards: Record<string, any>;
}

export interface GameState {
	// Current session
	currentSession: GameSession | null;
	sessionLoading: boolean;
	sessionError: string | null;

	// Match history
	matches: Match[];
	matchesLoading: boolean;
	matchesError: string | null;

	// Leaderboards
	leaderboards: {
		[gameType: string]: LeaderboardEntry[];
	};
	leaderboardsLoading: boolean;
	leaderboardsError: string | null;

	// Achievements
	achievements: Achievement[];
	achievementsLoading: boolean;
	achievementsError: string | null;

	// Statistics
	playerStats: {
		totalGames: number;
		totalWins: number;
		totalLosses: number;
		winRate: number;
		averageScore: number;
		bestScore: number;
		totalPlayTime: number;
		favoriteGameType: string | null;
		streaks: {
			current: number;
			best: number;
		};
	};

	// Game preferences
	preferences: {
		difficulty: 'easy' | 'medium' | 'hard';
		soundEnabled: boolean;
		musicEnabled: boolean;
		animationsEnabled: boolean;
		autoAcceptMatches: boolean;
		preferredGameTypes: string[];
	};
}

const initialState: GameState = {
	// Current session
	currentSession: null,
	sessionLoading: false,
	sessionError: null,

	// Match history
	matches: [],
	matchesLoading: false,
	matchesError: null,

	// Leaderboards
	leaderboards: {},
	leaderboardsLoading: false,
	leaderboardsError: null,

	// Achievements
	achievements: [],
	achievementsLoading: false,
	achievementsError: null,

	// Statistics
	playerStats: {
		totalGames: 0,
		totalWins: 0,
		totalLosses: 0,
		winRate: 0,
		averageScore: 0,
		bestScore: 0,
		totalPlayTime: 0,
		favoriteGameType: null,
		streaks: {
			current: 0,
			best: 0,
		},
	},

	// Preferences
	preferences: {
		difficulty: 'medium',
		soundEnabled: true,
		musicEnabled: true,
		animationsEnabled: true,
		autoAcceptMatches: false,
		preferredGameTypes: [],
	},
};

// Async thunks
export const createGameSession = createAsyncThunk(
	'game/createSession',
	async (params: {
		gameType: string;
		settings: Record<string, any>;
	}) => {
		// Mock API call
		const response = await fetch('/api/game/session', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(params),
		});

		if (!response.ok) {
			throw new Error('Failed to create game session');
		}

		return response.json();
	}
);

export const joinGameSession = createAsyncThunk(
	'game/joinSession',
	async (sessionId: string) => {
		// Mock API call
		const response = await fetch(
			`/api/game/session/${sessionId}/join`,
			{
				method: 'POST',
			}
		);

		if (!response.ok) {
			throw new Error('Failed to join game session');
		}

		return response.json();
	}
);

export const fetchMatches = createAsyncThunk(
	'game/fetchMatches',
	async (
		params: { limit?: number; offset?: number } = {}
	) => {
		// Mock API call
		const response = await fetch(
			`/api/game/matches?limit=${params.limit || 20}&offset=${params.offset || 0}`
		);

		if (!response.ok) {
			throw new Error('Failed to fetch matches');
		}

		return response.json();
	}
);

export const fetchLeaderboard = createAsyncThunk(
	'game/fetchLeaderboard',
	async (gameType: string) => {
		// Mock API call
		const response = await fetch(
			`/api/game/leaderboard/${gameType}`
		);

		if (!response.ok) {
			throw new Error('Failed to fetch leaderboard');
		}

		return { gameType, data: await response.json() };
	}
);

export const fetchAchievements = createAsyncThunk(
	'game/fetchAchievements',
	async () => {
		// Mock API call
		const response = await fetch('/api/game/achievements');

		if (!response.ok) {
			throw new Error('Failed to fetch achievements');
		}

		return response.json();
	}
);

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		// Session management
		updateSession: (
			state,
			action: PayloadAction<Partial<GameSession>>
		) => {
			if (state.currentSession) {
				state.currentSession = {
					...state.currentSession,
					...action.payload,
				};
			}
		},

		endSession: (state) => {
			if (state.currentSession) {
				state.currentSession.status = 'completed';
				state.currentSession.endTime = Date.now();
			}
		},

		clearSession: (state) => {
			state.currentSession = null;
		},

		// Player management
		updatePlayer: (
			state,
			action: PayloadAction<{
				playerId: string;
				updates: Partial<GamePlayer>;
			}>
		) => {
			if (state.currentSession) {
				const player = state.currentSession.players.find(
					(p) => p.id === action.payload.playerId
				);
				if (player) {
					Object.assign(player, action.payload.updates);
				}
			}
		},

		setPlayerReady: (
			state,
			action: PayloadAction<{
				playerId: string;
				ready: boolean;
			}>
		) => {
			if (state.currentSession) {
				const player = state.currentSession.players.find(
					(p) => p.id === action.payload.playerId
				);
				if (player) {
					player.isReady = action.payload.ready;
				}
			}
		},

		// Achievements
		unlockAchievement: (
			state,
			action: PayloadAction<string>
		) => {
			const achievement = state.achievements.find(
				(a) => a.id === action.payload
			);
			if (achievement && !achievement.unlocked) {
				achievement.unlocked = true;
				achievement.unlockedAt = Date.now();
				achievement.progress = achievement.maxProgress;
			}
		},

		updateAchievementProgress: (
			state,
			action: PayloadAction<{
				achievementId: string;
				progress: number;
			}>
		) => {
			const achievement = state.achievements.find(
				(a) => a.id === action.payload.achievementId
			);
			if (achievement && !achievement.unlocked) {
				achievement.progress = Math.min(
					action.payload.progress,
					achievement.maxProgress
				);
				if (
					achievement.progress >= achievement.maxProgress
				) {
					achievement.unlocked = true;
					achievement.unlockedAt = Date.now();
				}
			}
		},

		// Statistics
		updatePlayerStats: (
			state,
			action: PayloadAction<
				Partial<GameState['playerStats']>
			>
		) => {
			state.playerStats = {
				...state.playerStats,
				...action.payload,
			};
		},

		incrementGameCount: (state) => {
			state.playerStats.totalGames += 1;
		},

		recordWin: (
			state,
			action: PayloadAction<{
				score: number;
				gameType: string;
			}>
		) => {
			state.playerStats.totalWins += 1;
			state.playerStats.winRate =
				state.playerStats.totalWins /
				state.playerStats.totalGames;
			state.playerStats.streaks.current += 1;
			state.playerStats.streaks.best = Math.max(
				state.playerStats.streaks.current,
				state.playerStats.streaks.best
			);

			if (
				action.payload.score > state.playerStats.bestScore
			) {
				state.playerStats.bestScore = action.payload.score;
			}

			// Update average score
			const totalScore =
				state.playerStats.averageScore *
					(state.playerStats.totalGames - 1) +
				action.payload.score;
			state.playerStats.averageScore =
				totalScore / state.playerStats.totalGames;
		},

		recordLoss: (state) => {
			state.playerStats.totalLosses += 1;
			state.playerStats.winRate =
				state.playerStats.totalWins /
				state.playerStats.totalGames;
			state.playerStats.streaks.current = 0;
		},

		// Preferences
		updatePreferences: (
			state,
			action: PayloadAction<
				Partial<GameState['preferences']>
			>
		) => {
			state.preferences = {
				...state.preferences,
				...action.payload,
			};
		},

		toggleSound: (state) => {
			state.preferences.soundEnabled =
				!state.preferences.soundEnabled;
		},

		toggleMusic: (state) => {
			state.preferences.musicEnabled =
				!state.preferences.musicEnabled;
		},

		toggleAnimations: (state) => {
			state.preferences.animationsEnabled =
				!state.preferences.animationsEnabled;
		},

		setDifficulty: (
			state,
			action: PayloadAction<'easy' | 'medium' | 'hard'>
		) => {
			state.preferences.difficulty = action.payload;
		},

		// Error handling
		clearSessionError: (state) => {
			state.sessionError = null;
		},

		clearMatchesError: (state) => {
			state.matchesError = null;
		},

		clearLeaderboardsError: (state) => {
			state.leaderboardsError = null;
		},

		clearAchievementsError: (state) => {
			state.achievementsError = null;
		},
	},
	extraReducers: (builder) => {
		// Create session
		builder
			.addCase(createGameSession.pending, (state) => {
				state.sessionLoading = true;
				state.sessionError = null;
			})
			.addCase(
				createGameSession.fulfilled,
				(state, action) => {
					state.sessionLoading = false;
					state.currentSession = action.payload;
				}
			)
			.addCase(
				createGameSession.rejected,
				(state, action) => {
					state.sessionLoading = false;
					state.sessionError =
						action.error.message ||
						'Failed to create session';
				}
			);

		// Join session
		builder.addCase(
			joinGameSession.fulfilled,
			(state, action) => {
				state.currentSession = action.payload;
			}
		);

		// Fetch matches
		builder
			.addCase(fetchMatches.pending, (state) => {
				state.matchesLoading = true;
				state.matchesError = null;
			})
			.addCase(fetchMatches.fulfilled, (state, action) => {
				state.matchesLoading = false;
				state.matches = action.payload;
			})
			.addCase(fetchMatches.rejected, (state, action) => {
				state.matchesLoading = false;
				state.matchesError =
					action.error.message || 'Failed to fetch matches';
			});

		// Fetch leaderboard
		builder
			.addCase(fetchLeaderboard.pending, (state) => {
				state.leaderboardsLoading = true;
				state.leaderboardsError = null;
			})
			.addCase(
				fetchLeaderboard.fulfilled,
				(state, action) => {
					state.leaderboardsLoading = false;
					state.leaderboards[action.payload.gameType] =
						action.payload.data;
				}
			)
			.addCase(
				fetchLeaderboard.rejected,
				(state, action) => {
					state.leaderboardsLoading = false;
					state.leaderboardsError =
						action.error.message ||
						'Failed to fetch leaderboard';
				}
			);

		// Fetch achievements
		builder
			.addCase(fetchAchievements.pending, (state) => {
				state.achievementsLoading = true;
				state.achievementsError = null;
			})
			.addCase(
				fetchAchievements.fulfilled,
				(state, action) => {
					state.achievementsLoading = false;
					state.achievements = action.payload;
				}
			)
			.addCase(
				fetchAchievements.rejected,
				(state, action) => {
					state.achievementsLoading = false;
					state.achievementsError =
						action.error.message ||
						'Failed to fetch achievements';
				}
			);
	},
});

// Export actions
export const {
	updateSession,
	endSession,
	clearSession,
	updatePlayer,
	setPlayerReady,
	unlockAchievement,
	updateAchievementProgress,
	updatePlayerStats,
	incrementGameCount,
	recordWin,
	recordLoss,
	updatePreferences,
	toggleSound,
	toggleMusic,
	toggleAnimations,
	setDifficulty,
	clearSessionError,
	clearMatchesError,
	clearLeaderboardsError,
	clearAchievementsError,
} = gameSlice.actions;

// Selectors
export const selectGame = (state: { game: GameState }) =>
	state.game;
export const selectCurrentSession = (state: {
	game: GameState;
}) => state.game.currentSession;
export const selectMatches = (state: { game: GameState }) =>
	state.game.matches;
export const selectLeaderboards = (state: {
	game: GameState;
}) => state.game.leaderboards;
export const selectLeaderboard =
	(gameType: string) => (state: { game: GameState }) =>
		state.game.leaderboards[gameType];
export const selectAchievements = (state: {
	game: GameState;
}) => state.game.achievements;
export const selectUnlockedAchievements = (state: {
	game: GameState;
}) => state.game.achievements.filter((a) => a.unlocked);
export const selectPlayerStats = (state: {
	game: GameState;
}) => state.game.playerStats;
export const selectGamePreferences = (state: {
	game: GameState;
}) => state.game.preferences;
export const selectGameLoading = (state: {
	game: GameState;
}) =>
	state.game.sessionLoading ||
	state.game.matchesLoading ||
	state.game.leaderboardsLoading ||
	state.game.achievementsLoading;

export default gameSlice.reducer;
