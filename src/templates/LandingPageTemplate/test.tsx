import { screen } from '@testing-library/react';
import { LandingPageTemplate, LandingPageTemplateProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: LandingPageTemplateProps = mock;
describe('<LandingPageTemplate />', () => {
  it('should render landing Page', () => {
    renderTheme(<LandingPageTemplate {...props} />);
    expect(screen.getByText('Organic')).toBeInTheDocument();
  });
});
