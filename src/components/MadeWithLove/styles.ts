import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;
export const Heart = styled.span`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xxsmall};
    display: inline-block;
    color: ${theme.colors.red};
    animation: ${pulse} 1s infinite;
    transition: all 300ms;
    &:hover {
      text-shadow: 0 0 10px ${theme.colors.red}, 0 0 10px ${theme.colors.red};
    }
  `}
`;

const pulse = keyframes`
  0%, 20% {
    transform: scale(2);
  }
  30% {
    transform: scale(2.4);
  }
  50% {
    transform: scale(2);
  }
  60% {
    transform: scale(2.2);
  }
  70%, 100% {
    transform: scale(2);
  }
`;
