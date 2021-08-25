import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Logo } from '../Logo/styles';
export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: ${theme.contentWidth.max};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small};
    width: 100%;
    text-align: center;
    ${Logo} {
      ${media.greaterThan('medium')`
      display: none;
    `}
    }
  `}
`;
export const Heading = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.huge};
  `}
`;
