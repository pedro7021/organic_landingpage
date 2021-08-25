import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.colors.lightBg};
    color: ${theme.colors.black};
    padding-bottom: ${theme.spacings.xsmall};
  `}
`;
