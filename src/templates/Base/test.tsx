import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Base />', () => {
  it('should render the base template', () => {
    renderTheme(
      <Base>
        <p>teste</p>
      </Base>,
    );
    expect(screen.getByText('teste')).toBeInTheDocument();
    expect(screen.getByText('Copyright', { exact: false })).toBeInTheDocument();
  });
});
