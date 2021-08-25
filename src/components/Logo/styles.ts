import styled, { css } from 'styled-components';

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 7rem;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.white};
    border-radius: ${theme.border.medium};
  `}
`;
