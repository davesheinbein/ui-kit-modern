export {
	default as ChatFactory,
	ChatFactoryClass,
	ChatFactoryShortcut,
	ChatPresets,
} from './ChatFactoryDRY';
export type { ChatFactoryProps } from './ChatFactoryDRY';

export * from './ChatConfigurations';

export { default as UnifiedChat } from './UnifiedChat';
export type { UnifiedChatProps } from './UnifiedChat';

export { default as Chat } from './Chat';
export type { ChatProps } from './Chat';

export { default as ChatBodyFactory } from './ChatBodyFactory';
export type { ChatBodyFactoryProps } from './ChatBodyFactory';

// VSQuickChatBar component (migrated into Chat system)
export { default as VSQuickChatBar } from './VSQuickChatBar';
export type { VSQuickChatBarProps } from './VSQuickChatBar';
