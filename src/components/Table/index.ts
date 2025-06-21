export { default as UnifiedTable } from './UnifiedTable';
export type { UnifiedTableProps } from './UnifiedTable';

// Keep the original Table component for backward compatibility
export { default as Table } from './Table';
export type { TableProps } from './Table';

export * from './configurations';

export {
	default as TableFactory,
	T,
	TablePresets,
} from './factory';
