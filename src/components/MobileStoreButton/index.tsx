import * as Styled from './styles';

export type MobileStoreButtonProps = {
  store: 'ios' | 'android';
  url: string;
};

export function MobileStoreButton({ store, url }: MobileStoreButtonProps) {
  const iosSrc = 'assets/stores/appstore.svg';
  const iosAlt = 'App Store';
  const androidSrc = 'assets/stores/googleplay.svg';
  const androidAlt = 'Google Play';
  return (
    <Styled.Wrapper href={url} target="_blank">
      <Styled.StoreImg
        src={store === 'ios' ? iosSrc : androidSrc}
        alt={store === 'ios' ? iosAlt : androidAlt}
      />
    </Styled.Wrapper>
  );
}
