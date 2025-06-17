#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of story files that need updating (found by grep earlier)
const storyFiles = [
	'/Users/davidsheinbein/code/ui-kit/src/stories/Statistics/StatisticsSummary.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Settings/UserSettingsProvider.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Settings/SessionDebugger.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Settings/SettingsPanel.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Chat/MatchChatWindow.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Cards/FriendCard.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Modals/VSModeModal.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Modals/VSRoomModal.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Modals/ShareModalContent.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Grids/VSBotGame.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Grids/VSMultiplayerGame.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Grids/VSStatusBar.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Grids/VSQuickChatBar.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Grids/SolvedGroupsDisplay.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Banners/GlobalToast.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Banners/FeedbackBanner.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Banners/VSStatusBar.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Theme/ThemeSelector.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Theme/ThemePaletteProvider.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Headers/BrowseHeader.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Graphs/Graphs.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Friends/FriendsToggleButton.stories.tsx',
	'/Users/davidsheinbein/code/ui-kit/src/stories/Friends/FriendsSidebar.stories.tsx',
];

function updateStoryFile(filePath) {
	try {
		const content = fs.readFileSync(filePath, 'utf8');

		// Skip if already has autodocs
		if (content.includes('autodocs')) {
			console.log(`Skipping ${filePath} - already updated`);
			return;
		}

		console.log(`Updating ${filePath}`);

		// Basic pattern to add autodocs and Meta type
		let updatedContent = content;

		// Add Meta and StoryObj imports if not present
		if (
			!updatedContent.includes(
				'import type { Meta, StoryObj }'
			)
		) {
			updatedContent = updatedContent.replace(
				/import React from 'react';/,
				`import React from 'react';\nimport type { Meta, StoryObj } from '@storybook/react';`
			);
		}

		// Update export default to use Meta type and add autodocs
		const exportDefaultRegex =
			/export default \{([^}]+)\};/s;
		const match = updatedContent.match(exportDefaultRegex);

		if (match) {
			const metaContent = match[1];

			// Extract component name from title
			const titleMatch = metaContent.match(
				/title:\s*['"`]([^'"`]+)['"`]/
			);
			const componentMatch = metaContent.match(
				/component:\s*([^,\n]+)/
			);

			if (titleMatch && componentMatch) {
				const title = titleMatch[1];
				const componentName = componentMatch[1].trim();

				const newMeta = `const meta: Meta<typeof ${componentName}> = {
	title: '${title}',
	component: ${componentName},
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'Component description to be updated.',
			},
		},
	},
	argTypes: {
		// Add argTypes here
	},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;`;

				updatedContent = updatedContent.replace(
					exportDefaultRegex,
					newMeta
				);
			}
		}

		// Convert Template.bind({}) stories to new format
		updatedContent = updatedContent.replace(
			/export const (\w+) = Template\.bind\(\{\}\);/g,
			'export const $1: Story = {\n\targs: {},\n};'
		);

		// Remove Template definitions
		updatedContent = updatedContent.replace(
			/const Template = \([^}]+\};\n\n/s,
			''
		);

		fs.writeFileSync(filePath, updatedContent);
		console.log(`Successfully updated ${filePath}`);
	} catch (error) {
		console.error(
			`Error updating ${filePath}:`,
			error.message
		);
	}
}

// Update all story files
storyFiles.forEach(updateStoryFile);

console.log('Story update complete!');
