import { Meta, Story } from '@storybook/react/types-6-0';
import { DocumentsHtmlViewer, DocumentsHtmlViewerProps } from '.';
import mock from './mock';
export default {
  title: 'DocumentsHtmlViewer',
  component: DocumentsHtmlViewer,
  args: mock,
} as Meta;

export const Template: Story<DocumentsHtmlViewerProps> = (args) => {
  return (
    <div>
      <DocumentsHtmlViewer {...args} />
    </div>
  );
};
