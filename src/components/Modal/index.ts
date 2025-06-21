export { default as Modal } from './Modal';
export { default as UnifiedModal } from './UnifiedModal';
export {
	default as SimpleModalFactory,
	useModal,
} from './SimpleModalFactory';
export {
	default as ModalFactory,
	M,
	ModalPresets,
	createModal,
} from './factory';
export { default as ModalBodyFactory } from './ModalBodyFactory';
export { default as ModalFooterFactory } from './ModalFooterFactory';
export type {
	ModalKind,
	UnifiedModalProps,
} from './UnifiedModal';
export type {
	ExtendedModalKind,
	ModalConfiguration,
	ModalSize,
	ModalPosition,
	ModalAnimation,
} from './configurations';
export {
	getModalConfiguration,
	mergeModalConfiguration,
	MODAL_CONFIGURATIONS,
	MODAL_GROUPS,
	isGameModal,
	isVersusModal,
	isCommerceModal,
	isInteractionModal,
	isLayoutModal,
} from './configurations';
