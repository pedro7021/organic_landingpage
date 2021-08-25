import { Meta, Story } from '@storybook/react/types-6-0';
import { Copyright } from '.';

export default {
  title: 'Copyright',
  component: Copyright,
} as Meta;

export const Template: Story = () => {
  return (
    <div>
      <Copyright />
    </div>
  );
};
