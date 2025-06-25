export { default as Modal } from './Modal';
export { default as Modal } from './UnifiedModal';
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
