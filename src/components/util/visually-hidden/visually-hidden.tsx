import { forwardRef } from 'react';

import styles from './VisuallyHidden.module.scss';

type Props = React.ComponentProps<'span'>;

/**
 * VisuallyHidden hides its children visually while keeping them visible to screen readers.
 * Used for labeling icons, providing instructions, or hidden form elements.
 */
const VisuallyHidden = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  return <span {...props} ref={ref} className={styles.visuallyHidden} />;
});

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
