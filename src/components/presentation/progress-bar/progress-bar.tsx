import './progress-bar.scss';

import { Progress } from '@ark-ui/react/progress';
import clsx from 'clsx';

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
      className={clsx('Progress-bar__root', className)}
      {...props}
    >
      <Progress.Track className="Progress-bar__root__track">
        <Progress.Range className="Progress-bar__root__track__range" />
      </Progress.Track>
    </Progress.Root>
  );
}

export default ProgressBar;
