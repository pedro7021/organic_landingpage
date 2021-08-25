import { screen } from '@testing-library/react';
import { DocumentsTemplate, DocumentsTemplateProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: DocumentsTemplateProps = mock;

describe('<DocumentsTemplate />', () => {
  it('should render an entire document', () => {
    renderTheme(<DocumentsTemplate {...props} />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });
});
