import { Header, HeaderProps } from '../../components/Header';
import { Base } from '../Base';

export type LandingPageTemplateProps = {
  header: HeaderProps;
};

export function LandingPageTemplate({ header }: LandingPageTemplateProps) {
  return (
    <>
      <Base>
        <Header {...header} />
      </Base>
    </>
  );
}
