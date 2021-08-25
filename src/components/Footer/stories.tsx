import { Story } from '@storybook/react';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
};

export const Template: Story = () => {
  return (
    <div style={{ marginTop: '200px' }}>
      <Footer />
    </div>
  );
};
