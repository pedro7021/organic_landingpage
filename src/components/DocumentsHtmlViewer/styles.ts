import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.large};
    box-shadow: 0 0 ${theme.spacings.xxsmall} ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium} - 0.4rem;
    width: 100%;
    padding: ${theme.spacings.large};
    margin: 0 auto;
    max-width: ${theme.contentWidth.max};
    margin-bottom: ${theme.spacings.small};
    p {
      margin: ${theme.spacings.medium} 0;
    }
    a,
    a:visited,
    a:link {
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }
    a:hover {
      filter: brightness(50%);
    }
    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors.gray};
      padding: 0.2rem;
      margin: 0.2rem;
    }
    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.medium} 0;
      width: 100%;
      overflow-x: auto;
    }
    pre code {
      color: inherit;
      background: inherit;
    }
    img {
      max-width: 100%;
    }
    .image {
      background: ${theme.colors.gray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }
    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }
    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacings.medium} 0;
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.gray};
    }

    ul,
    ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${theme.spacings.medium} 0;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.gray};
    }
    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.gray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }
    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.small};
      .image-style-side {
        max-width: 50%;
        float: right;
        margin: ${theme.spacings.medium};
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    text-align: center;
    padding: ${theme.spacings.small} 0;
  `}
`;
