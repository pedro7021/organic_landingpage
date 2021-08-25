import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { IsAppAvailable, IsAppAvailableProps } from '.';
import mock from './mock';

const props: IsAppAvailableProps = mock;
describe('<IsAppAvailable />', () => {
  it('should render that the app is not available yet', () => {
    renderTheme(<IsAppAvailable />);
    expect(
      screen.queryByText('Em breve nas lojas de aplicativos'),
    ).toBeInTheDocument();
  });

  it('should render only app store', () => {
    renderTheme(<IsAppAvailable iosUrl={props.iosUrl} />);
    expect(
      screen.queryByText('Já disponível para download'),
    ).toBeInTheDocument();
    expect(screen.queryByAltText('App Store')).toBeInTheDocument();
    expect(screen.queryByAltText('Google Play')).not.toBeInTheDocument();
  });

  it('should render only google play', () => {
    renderTheme(<IsAppAvailable androidUrl={props.androidUrl} />);
    expect(
      screen.queryByText('Já disponível para download'),
    ).toBeInTheDocument();
    expect(screen.queryByAltText('App Store')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Google Play')).toBeInTheDocument();
  });

  it('should render both stores', () => {
    renderTheme(<IsAppAvailable {...props} />);
    expect(
      screen.queryByText('Já disponível para download'),
    ).toBeInTheDocument();
    expect(screen.queryByAltText('App Store')).toBeInTheDocument();
    expect(screen.queryByAltText('Google Play')).toBeInTheDocument();
  });
});
