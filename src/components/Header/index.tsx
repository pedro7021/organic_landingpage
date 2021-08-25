import { Background } from '../Background';
import { IsAppAvailable, IsAppAvailableProps } from '../IsAppAvailable';
import { Logo } from '../Logo';
import { Smartphone } from '../Smartphone';
import * as S from './styles';

export type HeaderProps = {
  heading: string;
  isAppAvailable: IsAppAvailableProps;
};

export function Header({ heading, isAppAvailable }: HeaderProps) {
  return (
    <Background>
      <S.Wrapper>
        <Smartphone>
          <img
            src="assets/images/screenshot.svg"
            alt="organic app screenshot"
          />
        </Smartphone>
        <S.Container>
          <Logo />
          <S.Heading>{heading}</S.Heading>
          <IsAppAvailable {...isAppAvailable} />
        </S.Container>
      </S.Wrapper>
    </Background>
  );
}
