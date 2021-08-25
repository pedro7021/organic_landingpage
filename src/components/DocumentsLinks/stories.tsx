import { Meta, Story } from '@storybook/react/types-6-0';
import { DocumentsLinks, DocumentsLinksProps } from '.';

export default {
  title: 'DocumentsLinks',
  component: DocumentsLinks,
} as Meta;

export const Template: Story<DocumentsLinksProps> = (args) => {
  return (
    <div>
      <DocumentsLinks {...args} />
    </div>
  );
};
