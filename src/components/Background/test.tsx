import { screen } from '@testing-library/react';
import { Background } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Background />', () => {
  it('should render background', () => {
    renderTheme(
      <Background>
        <p>teste</p>
      </Background>,
    );
    expect(screen.getByText('teste').parentElement).toHaveStyleRule(
      'background-image',
      `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('assets/images/waves_background.svg')`,
    );
  });
});
