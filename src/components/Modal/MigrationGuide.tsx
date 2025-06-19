/**
 * Modal Migration Guide - How to replace specific modal components
 *
 * This guide shows how to migrate from specific modal components
 * (like EndGameModal, PreGameModal, etc.) to the new DRY modal system.
 */

import React, { useState } from 'react';
import { SimpleModalFactory } from '../Modal';

// ===== BEFORE: Specific Modal Components =====

/*
// Old way - separate components for each modal type
import { EndGameModal } from '../EndGameModal';
import { PreGameModal } from '../PreGameModal';
import { PurchaseModal } from '../PurchaseModal';
import { RulesModal } from '../RulesModal';
import { SignInModal } from '../SignInModal';
import { StatisticsModal } from '../StatisticsModal';
import { VSModeModal } from '../VSModeModal';
import { VSRoomModal } from '../VSRoomModal';

function OldGameComponent() {
  const [showPreGame, setShowPreGame] = useState(false);
  const [showEndGame, setShowEndGame] = useState(false);
  const [showRules, setShowRules] = useState(false);
  
  return (
    <div>
      <PreGameModal 
        open={showPreGame}
        onClose={() => setShowPreGame(false)}
        onReady={() => console.log('ready')}
        onGoHome={() => console.log('go home')}
      />
      
      <EndGameModal 
        message="Great job!"
        score={1200}
        attemptsLeft={3}
        burnBonus={100}
        win={true}
        onShare={() => console.log('share')}
        finishTime="2:35"
      />
      
      <RulesModal 
        open={showRules}
        onClose={() => setShowRules(false)}
        columnCount={4}
        mode="daily"
        wildcardsActive={false}
      />
    </div>
  );
}
*/

// ===== AFTER: DRY Modal System =====

// New way - single factory creates all modal types
function NewGameComponent() {
	const [showPreGame, setShowPreGame] = useState(false);
	const [showEndGame, setShowEndGame] = useState(false);
	const [showRules, setShowRules] = useState(false);

	return (
		<div>
			{/* Pre-game modal - same functionality, cleaner code */}
			{SimpleModalFactory.preGame(
				showPreGame,
				() => setShowPreGame(false),
				() => console.log('ready'),
				() => console.log('go home')
			)}

			{/* End game modal - same functionality, cleaner code */}
			{SimpleModalFactory.endGame(
				showEndGame,
				() => setShowEndGame(false),
				() => console.log('share'),
				{
					score: 1200,
					attemptsLeft: 3,
					burnBonus: 100,
					win: true,
					finishTime: '2:35',
				}
			)}

			{/* Rules modal - same functionality, cleaner code */}
			{SimpleModalFactory.rules(
				showRules,
				() => setShowRules(false),
				{
					columnCount: 4,
					mode: 'daily',
					wildcardsActive: false,
				}
			)}
		</div>
	);
}

// ===== COMPARISON: Before vs After =====

// BEFORE: Each modal requires separate component and imports
export const BeforeExample = () => {
	// Lots of specific imports needed
	// Each modal has different prop interfaces
	// Code duplication across modal components
	// Hard to maintain consistency

	return (
		<div>
			{/* Separate components with different APIs */}
		</div>
	);
};

// AFTER: Single factory handles all modal types
export const AfterExample = () => {
	// Single import for all modals
	// Consistent API across all modal types
	// DRY principle - no code duplication
	// Easy to maintain and extend

	return (
		<div>
			{/* Pre-game modal */}
			{SimpleModalFactory.preGame(
				true,
				() => {},
				() => {},
				() => {}
			)}

			{/* Confirmation modal */}
			{SimpleModalFactory.deleteConfirmation(
				true,
				() => console.log('deleted'),
				() => console.log('cancelled')
			)}

			{/* Alert modal */}
			{SimpleModalFactory.errorAlert(
				true,
				() => {},
				'Something went wrong!'
			)}

			{/* VS mode modal */}
			{SimpleModalFactory.vsMode(
				true,
				() => {},
				(mode) => console.log('selected mode:', mode)
			)}

			{/* Purchase modal */}
			{SimpleModalFactory.purchase(
				true,
				() => {},
				{ id: 'theme', name: 'Premium Theme', price: 500 },
				async (item) => console.log('purchasing:', item),
				{ id: 1, name: 'User' }
			)}

			{/* Custom modal with full flexibility */}
			{SimpleModalFactory.create(
				'custom-puzzle',
				true,
				() => {},
				{
					title: 'Custom Puzzle',
					children: <div>Custom content here</div>,
				}
			)}
		</div>
	);
};

// ===== MIGRATION STEPS =====

/*
1. Replace individual modal component imports:
   - Remove: import { EndGameModal } from '../EndGameModal';
   - Add: import { SimpleModalFactory } from '../Modal';

2. Replace modal JSX:
   - Remove: <EndGameModal prop1={value1} prop2={value2} />
   - Add: {SimpleModalFactory.endGame(open, onClose, onShare, gameData)}

3. Update prop structure:
   - Group related props into objects (e.g., gameData)
   - Always provide open and onClose as first two params
   - Use factory method specific to modal type

4. Remove unused specific modal component files:
   - EndGameModal.tsx
   - PreGameModal.tsx  
   - PurchaseModal.tsx
   - RulesModal.tsx
   - SignInModal.tsx
   - StatisticsModal.tsx
   - VSModeModal.tsx
   - VSRoomModal.tsx
   - CustomPuzzleModal.tsx
   - ShareModalContent.tsx

5. Update stories to use the new system:
   - Replace component stories with factory examples
   - Show different modal types created via factory

6. Benefits of migration:
   - Single source of truth for all modals
   - Consistent API across modal types
   - Easier to add new modal types
   - Better type safety
   - Reduced bundle size
   - Easier testing
*/

// ===== HOOK-BASED USAGE =====

import { useModal } from '../Modal';

export const HookExample = () => {
	const { modals, showConfirmation, showAlert, close } =
		useModal();

	const handleDelete = () => {
		showConfirmation(
			'delete-item',
			'Delete Item',
			'Are you sure you want to delete this item?',
			() => {
				console.log('Item deleted');
				showAlert(
					'success',
					'Success',
					'Item deleted successfully'
				);
			}
		);
	};

	return (
		<div>
			<button onClick={handleDelete}>Delete Item</button>
			{modals}
		</div>
	);
};

export default {
	NewGameComponent,
	AfterExample,
	HookExample,
};
