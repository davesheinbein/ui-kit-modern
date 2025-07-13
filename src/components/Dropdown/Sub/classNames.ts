import classNames from 'classnames';
import styles from '../dropdown.module.scss';

export function getContainerClasses({
	isOpen,
	disabled,
	error,
	loading,
	variant,
	size,
	searchable,
	className,
}: {
	isOpen: boolean;
	disabled?: boolean;
	error?: string;
	loading?: boolean;
	variant: string;
	size: string;
	searchable?: boolean;
	className?: string;
}) {
	return classNames(
		styles.dropdownContainer,
		styles[`variant-${variant}`],
		styles[`size-${size}`],
		{
			[styles.open]: isOpen,
			[styles.disabled]: disabled,
			[styles.error]: !!error,
			[styles.loading]: loading,
			[styles.multiple]: variant === 'multiselect',
			[styles.searchable]: searchable,
		},
		className
	);
}
