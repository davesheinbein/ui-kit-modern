import * as React from 'react';
import classNames from 'classnames';
import styles from '../advertisements.module.scss';

const AdCloseButton: React.FC<{
  onClick?: () => void;
  closeText?: string;
  closeClassName?: string;
  closeStyle?: React.CSSProperties;
  closePosition?: string;
}> = ({
  onClick,
  closeText = '×',
  closeClassName = '',
  closeStyle = {},
  closePosition = 'top-right',
}) => {
  const className = [
    styles.advertisement__close_button,
    styles[`advertisement__close--${closePosition}`],
    closeClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={className}
      style={closeStyle}
      onClick={onClick}
      aria-label="Close advertisement"
    >
      {closeText}
    </button>
  );
};

export default AdCloseButton;
