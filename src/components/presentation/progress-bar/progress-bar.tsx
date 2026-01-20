import { Progress } from '@ark-ui/react/progress';
import clsx from 'clsx';

import style from './progress-bar.module.scss';

type Props = {
  className?: string;
  value: number;
  maxValue?: number;
  onValueChange?: (v: number) => void;
};

function ProgressBar({
  value,
  className,
  onValueChange,
  maxValue = 100,
  ...props
}: Props) {
  return (
    <Progress.Root
      max={maxValue}
      value={value}
      className={clsx(style.root, className)}
      {...props}
    >
      <Progress.Track className={style.track}>
        <Progress.Range className={style.trackIndicator} />
      </Progress.Track>
    </Progress.Root>
  );
}

export default ProgressBar;
