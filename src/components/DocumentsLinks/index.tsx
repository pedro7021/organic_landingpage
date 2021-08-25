import Link from 'next/link';
import * as S from './styles';

export type DocumentsLinksProps = {
  title?: string;
};

export function DocumentsLinks() {
  return (
    <S.Wrapper>
      <Link href="/legal/terms" passHref>
        <S.LinkText>termos e condições</S.LinkText>
      </Link>
      <span> . </span>
      <Link href="/legal/privacy-policy" passHref>
        <S.LinkText>politica de privacidade</S.LinkText>
      </Link>
    </S.Wrapper>
  );
}
