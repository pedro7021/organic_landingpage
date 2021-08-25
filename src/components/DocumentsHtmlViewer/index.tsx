import * as S from './styles';

export type DocumentsHtmlViewerProps = {
  title: string;
  html: string;
};

export function DocumentsHtmlViewer({ title, html }: DocumentsHtmlViewerProps) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Container dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
