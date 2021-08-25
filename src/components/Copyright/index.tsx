import * as S from './styles';

export function Copyright() {
  return (
    <S.Wrapper>
      © Copyright {new Date().getFullYear()} . All rights reserved.
    </S.Wrapper>
  );
}
