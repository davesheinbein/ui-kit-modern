import React from 'react';
import styles from '../Grid.module.scss';

interface PlaceholderRendererProps {
	rows: number;
	cols: number;
	placeholderContent?: React.ReactNode;
	placeholderRenderer?: (index: number) => React.ReactNode;
}

const PlaceholderRenderer: React.FC<
	PlaceholderRendererProps
> = ({
	rows,
	cols,
	placeholderContent = '×',
	placeholderRenderer,
}) => (
	<>
		{Array.from({ length: rows * cols }, (_, index) =>
			placeholderRenderer ?
				placeholderRenderer(index)
			:	<div key={index} className={styles.placeholderCell}>
					{placeholderContent}
				</div>
		)}
	</>
);

export default PlaceholderRenderer;
