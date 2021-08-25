import { screen } from '@testing-library/react';
import { DocumentsHtmlViewer, DocumentsHtmlViewerProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: DocumentsHtmlViewerProps = mock;

describe('<DocumentsHtmlViewer />', () => {
  it('should render a document with title and its content', () => {
    renderTheme(<DocumentsHtmlViewer {...props} />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(
      screen.getByText('This page is used to inform visitors', {
        exact: false,
      }),
    ).toBeInTheDocument();
  });
});
