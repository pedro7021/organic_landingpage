import { GetStaticProps } from 'next';
import Head from 'next/head';
import data from '../../api/data';
import {
  DocumentsTemplate,
  DocumentsTemplateProps,
} from '../../templates/DocumentsTemplate';

export type TermsProps = {
  settings: {
    title: string;
    description: string;
  };
} & DocumentsTemplateProps;

export default function Terms({ documentData, settings }: TermsProps) {
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

export const getStaticProps: GetStaticProps<TermsProps> = () => {
  return {
    props: {
      settings: data.settings,
      documentData: data.legal['terms-of-service'],
    },
  };
};
