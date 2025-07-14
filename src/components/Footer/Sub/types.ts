import type {
	FooterKind,
	FooterConfiguration,
	FooterLink,
} from '../configurations';

export interface FooterProps
	extends Partial<FooterConfiguration> {
	kind?: FooterKind;
	children?: React.ReactNode;
}
