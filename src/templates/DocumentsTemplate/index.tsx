import {
  DocumentsHtmlViewer,
  DocumentsHtmlViewerProps,
} from '../../components/DocumentsHtmlViewer';
import { Base } from '../Base';

export type DocumentsTemplateProps = {
  documentData: DocumentsHtmlViewerProps;
};

export function DocumentsTemplate({ documentData }: DocumentsTemplateProps) {
  return (
    <>
      <Base>
        <DocumentsHtmlViewer {...documentData} />
      </Base>
    </>
  );
}
