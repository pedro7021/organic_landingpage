import { screen } from '@testing-library/react';
import { Header, HeaderProps } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props: HeaderProps = mock;

describe('<Header />', () => {
  it('should render Header', () => {
    renderTheme(<Header {...props} />);
    expect(screen.getByAltText('organic app screenshot')).toBeInTheDocument();
    expect(screen.getByText(props.heading)).toBeInTheDocument();
    expect(screen.getByText('Já disponível para download')).toBeInTheDocument();
  });
});
