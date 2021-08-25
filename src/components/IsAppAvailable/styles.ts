import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

export const Stores = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > * {
      margin: ${theme.spacings.xsmall} 0;
    }
    ${media.lessThan('medium')`
    flex-direction: column;
    `}
  `}
`;
export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.giant};
    margin-bottom: ${theme.spacings.small};
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`;
