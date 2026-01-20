import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProgressBar from './progress-bar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    maxValue: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 50,
    maxValue: 100,
  },
};
