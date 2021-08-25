import { screen } from '@testing-library/react';
import { Smartphone } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Smartphone />', () => {
  it('should render a Smartphone with an image inside', () => {
    renderTheme(
      <Smartphone>
        <img src="assets/images/screenshot.svg" alt="a screenshot" />
      </Smartphone>,
    );
    expect(screen.getByRole('figure').firstChild).toHaveAttribute(
      'src',
      'assets/images/screenshot.svg',
    );
  });
});
