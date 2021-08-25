import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should match snapshot', () => {
    renderTheme(<Logo />);
    expect(screen.getByAltText('logo do app organic')).toBeInTheDocument();
  });
});
