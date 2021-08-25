import { MobileStoreButton } from '../MobileStoreButton';
import * as S from './styles';

export type IsAppAvailableProps = {
  androidUrl?: string;
  iosUrl?: string;
};

export function IsAppAvailable({ androidUrl, iosUrl }: IsAppAvailableProps) {
  return (
    <S.Wrapper>
      <S.Text>
        {!!androidUrl || !!iosUrl
          ? 'Já disponível para download'
          : 'Em breve nas lojas de aplicativos'}
      </S.Text>
      <S.Stores>
        {!!androidUrl && <MobileStoreButton store="android" url={androidUrl} />}
        {!!iosUrl && <MobileStoreButton store="ios" url={iosUrl} />}
      </S.Stores>
    </S.Wrapper>
  );
}
