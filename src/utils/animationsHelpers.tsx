import { RefObject } from 'react';

/**
 * Triggers a ripple animation on the given label element.
 * @param e Mouse event from the input element
 * @param labelRef Ref to the label element
 * @param rippleClassName CSS class for the ripple effect
 */
export function triggerRipple(
	e: React.MouseEvent<HTMLInputElement>,
	labelRef: RefObject<HTMLElement>,
	rippleClassName: string
) {
	const label = labelRef.current;
	if (!label) return;

	const rect = label.getBoundingClientRect();
	const size = Math.max(rect.width, rect.height);
	const ripple = document.createElement('span');
	ripple.className = rippleClassName;
	ripple.style.width = ripple.style.height = `${size}px`;
	ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
	ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
	label.appendChild(ripple);
	ripple.addEventListener('animationend', () => {
		if (ripple.parentNode)
			ripple.parentNode.removeChild(ripple);
	});
}
