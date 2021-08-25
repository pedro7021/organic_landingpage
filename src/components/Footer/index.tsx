import { Copyright } from '../Copyright';
import { DocumentsLinks } from '../DocumentsLinks';
import { MadeWithLove } from '../MadeWithLove';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Wrapper>
      <hr />
      <MadeWithLove />
      <DocumentsLinks />
      <Copyright />
    </S.Wrapper>
  );
};
