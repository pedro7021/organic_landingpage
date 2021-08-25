import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
  `}
`;

export const LinkText = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    :visited,
    :link {
      color: ${theme.colors.gray};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }
    :hover {
      filter: brightness(50%);
    }
  `}
`;
