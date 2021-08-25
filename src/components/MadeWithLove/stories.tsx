import { Meta, Story } from '@storybook/react/types-6-0';
import { MadeWithLove } from '.';

export default {
  title: 'MadeWithLove',
  component: MadeWithLove,
} as Meta;

export const Template: Story = () => {
  return (
    <div>
      <MadeWithLove />
    </div>
  );
};
