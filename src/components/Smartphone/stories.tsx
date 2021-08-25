import { Meta, Story } from '@storybook/react/types-6-0';
import { Smartphone, SmartphoneProps } from '.';

export default {
  title: 'Smartphone',
  component: Smartphone,
} as Meta;

export const Template: Story<SmartphoneProps> = () => {
  return (
    <div>
      <Smartphone>
        <img src="assets/images/screenshot.svg" alt="a screenshot" />
      </Smartphone>
    </div>
  );
};
