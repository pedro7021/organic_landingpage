import { screen } from '@testing-library/react';
import { Copyright } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Copyright />', () => {
  it('should render Copyright element with the current year', () => {
    renderTheme(<Copyright />);
    expect(
      screen.getByText(
        `© Copyright ${new Date().getFullYear()} . All rights reserved.`,
      ),
    ).toBeInTheDocument();
  });
});
