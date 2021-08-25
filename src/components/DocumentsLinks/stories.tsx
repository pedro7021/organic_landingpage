import { Meta, Story } from '@storybook/react/types-6-0';
import { DocumentsLinks } from '.';

export default {
  title: 'DocumentsLinks',
  component: DocumentsLinks,
} as Meta;

export const Template: Story = () => {
  return (
    <div>
      <DocumentsLinks />
    </div>
  );
};
