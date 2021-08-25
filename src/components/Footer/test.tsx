import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render Footer', () => {
    renderTheme(<Footer />);
    expect(
      screen.getByText('termos e condições', {
        exact: false,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Copyright', {
        exact: false,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Pedro de Carli', {
        exact: false,
      }),
    ).toBeInTheDocument();
  });
});
