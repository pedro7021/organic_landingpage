import { Meta, Story } from '@storybook/react/types-6-0';
import { MobileStoreButton, MobileStoreButtonProps } from '.';

export default {
  title: 'MobileStoreButton',
  component: MobileStoreButton,
  args: {
    url: 'https://google.com',
  } as MobileStoreButtonProps,
} as Meta;

export const AppStore: Story<MobileStoreButtonProps> = (args) => {
  return (
    <div>
      <MobileStoreButton {...args} store="ios" />
    </div>
  );
};
export const GooglePlay: Story<MobileStoreButtonProps> = (args) => {
  return (
    <div>
      <MobileStoreButton {...args} store="android" />
    </div>
  );
};
