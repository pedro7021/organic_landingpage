import { MadeWithLove } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MadeWithLove />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<MadeWithLove />);
    expect(container.firstChild.textContent).toBe(
      'Feito com❤por Pedro de Carli',
    );
  });
});
