import { screen } from '@testing-library/react';
import { DocumentsLinks } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<DocumentsLinks />', () => {
  it('should match snapshot', () => {
    renderTheme(<DocumentsLinks />);
    expect(screen.getAllByRole('link').length).toBe(2);
  });
});
