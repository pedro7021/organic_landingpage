import { Meta, Story } from '@storybook/react/types-6-0';
import { Background, BackgroundProps } from '.';

export default {
  title: 'Background',
  component: Background,
} as Meta;

export const Template: Story<BackgroundProps> = () => {
  return (
    <div>
      <Background>
        <div style={{ height: '100vh', width: '100vw' }}></div>
      </Background>
    </div>
  );
};
