import './visually-hidden.scss';

import { forwardRef } from 'react';

type Props = React.ComponentProps<'span'>;

/**
 * VisuallyHidden hides its children visually while keeping them visible to screen readers.
 * Used for labeling icons, providing instructions, or hidden form elements.
 */
const VisuallyHidden = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  return <span {...props} ref={ref} className="VisuallyHidden__span" />;
});

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
