import { Meta, Story } from '@storybook/react/types-6-0';
import { DocumentsTemplate, DocumentsTemplateProps } from '.';
import mock from './mock';

export default {
  title: 'DocumentsTemplate',
  component: DocumentsTemplate,
  args: mock,
} as Meta;

export const Template: Story<DocumentsTemplateProps> = (args) => {
  return (
    <div>
      <DocumentsTemplate {...args} />
    </div>
  );
};
