import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  LandingPageTemplate,
  LandingPageTemplateProps,
} from '../templates/LandingPageTemplate';
import data from '../api/data';

export type IndexProps = {
  settings: {
    title: string;
    description: string;
  };
} & LandingPageTemplateProps;

export default function Index({ header, settings }: IndexProps) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta name="description" content={settings.description} />
      </Head>
      <LandingPageTemplate header={header} />
    </>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = () => {
  return {
    props: {
      settings: data.settings,
      header: data.header,
    },
  };
};
