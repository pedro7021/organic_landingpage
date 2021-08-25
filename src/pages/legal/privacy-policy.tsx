import { GetStaticProps } from 'next';
import Head from 'next/head';
import data from '../../api/data';
import {
  DocumentsTemplate,
  DocumentsTemplateProps,
} from '../../templates/DocumentsTemplate';

export type PrivacyPolicyProps = {
  settings: {
    title: string;
    description: string;
  };
} & DocumentsTemplateProps;

export default function PrivacyPolicy({
  documentData,
  settings,
}: PrivacyPolicyProps) {
  return (
    <>
      <Head>
        <title>
          {settings.title}-legal-{documentData.title}
        </title>
        <meta name="description" content={settings.description} />
      </Head>
      <DocumentsTemplate documentData={documentData} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = () => {
  return {
    props: {
      settings: data.settings,
      documentData: data.legal['privacy-policy'],
    },
  };
};
