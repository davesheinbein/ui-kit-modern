export { default as UnifiedTable } from './UnifiedTable';
export type { UnifiedTableProps } from './UnifiedTable';

// Keep the original Table component for backward compatibility
export { default as Table } from './Table';
export type { TableProps } from './Table';

// Export enhanced table configuration system
export * from './TableConfigurations';

// Export enhanced table factory and ultra-DRY system
export {
	default as TableFactory,
	T,
	TablePresets,
} from './TableFactoryDRY';
