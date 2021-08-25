import { screen } from '@testing-library/react';
import { MobileStoreButton } from '.';
import { renderTheme } from '../../styles/render-theme';

const url = 'https://google.com';

describe('<MobileStoreButton />', () => {
  it('should render App Store Download Image', () => {
    renderTheme(<MobileStoreButton store="ios" url={url} />);
    expect(screen.getByAltText('App Store')).toBeInTheDocument();
  });

  it('should render Google Play download image', () => {
    renderTheme(<MobileStoreButton store="android" url={url} />);
    expect(screen.getByAltText('Google Play')).toBeInTheDocument();
  });
});
