import React, { forwardRef } from 'react';
import UnifiedTable, {
	UnifiedTableProps,
} from './UnifiedTable';

// ========================================
// Props Interface
// ========================================

export interface TableProps
	extends Omit<UnifiedTableProps, 'kind'> {
	// Make kind optional and default to 'data-table'
	kind?: UnifiedTableProps['kind'];
}

// ========================================
// Table Component
// ========================================

/**
 * Table - A simple wrapper around UnifiedTable
 *
 * This component provides a simplified interface for basic table usage,
 * defaulting to 'data-table' kind while still allowing customization.
 */
const Table = forwardRef<HTMLTableElement, TableProps>(
	(props, ref) => {
		const { kind = 'data-table', ...restProps } = props;

		return (
			<UnifiedTable {...restProps} kind={kind} ref={ref} />
		);
	}
);

Table.displayName = 'Table';

export default Table;
