import { Meta, Story } from '@storybook/react/types-6-0';
import { LandingPageTemplate, LandingPageTemplateProps } from '.';
import mock from './mock';

export default {
  title: 'LandingPageTemplate',
  component: LandingPageTemplate,
  args: mock,
} as Meta;

export const Template: Story<LandingPageTemplateProps> = (args) => {
  return (
    <div>
      <LandingPageTemplate {...args} />
    </div>
  );
};
