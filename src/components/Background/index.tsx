import * as S from './styles';

export type BackgroundProps = {
  children: React.ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
