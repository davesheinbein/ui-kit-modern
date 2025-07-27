import React from 'react';
import type { GridProps } from './types';

interface GroupRendererProps {
	finalGroups: any[];
	finalGroupDirection: string;
	groupRenderer?: GridProps['groupRenderer'];
	showGroupTitles?: boolean;
	groupLayout?: string;
}

const GroupRenderer: React.FC<GroupRendererProps> = ({
	finalGroups,
	finalGroupDirection,
	groupRenderer,
	showGroupTitles = true,
	groupLayout = 'list',
}) => {
	if (groupRenderer) {
		return (
			<>
				{finalGroups.map((group, idx) =>
					groupRenderer(group, idx)
				)}
			</>
		);
	}
	return (
		<div
			className={`grid-group grid-group--${finalGroupDirection} grid-group--${groupLayout}`}
		>
			{finalGroups.map((group, idx) => (
				<div
					key={group.id || idx}
					className='grid-group__item'
				>
					{showGroupTitles && (
						<div className='grid-group__title'>
							{group.title}
						</div>
					)}
					<div className='grid-group__words'>
						{group.words.map(
							(word: string, widx: number) => (
								<span
									key={widx}
									className='grid-group__word'
								>
									{word}
								</span>
							)
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default GroupRenderer;
