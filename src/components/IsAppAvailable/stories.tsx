import { Meta, Story } from '@storybook/react/types-6-0';
import { IsAppAvailable, IsAppAvailableProps } from '.';
import mock from './mock';

export default {
  title: 'IsAppAvailable',
  component: IsAppAvailable,
  args: mock,
  parameters: { backgrounds: { default: 'dark' } },
} as Meta;

export const Template: Story<IsAppAvailableProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', width: '100%' }}>
      <IsAppAvailable {...args} />
    </div>
  );
};
