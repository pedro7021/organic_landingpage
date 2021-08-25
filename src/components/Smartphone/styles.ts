import styled from 'styled-components';
import media from 'styled-media-query';

export const Phone = styled.figure`
  margin: ${({ theme }) => theme.spacings.small};
  position: relative;
  border-radius: 2.4rem;
  max-width: 30rem;
  padding: 0.8rem;
  padding-top: 2rem;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  box-shadow: 0 0.8rem 1.6rem 0 rgba(18, 1, 64, 0.1);
  > :only-child {
    max-width: 100%;
    border-radius: 1.6rem;
  }
  ::before {
    content: '';
    position: absolute;
    top: 0.6rem;
    left: 50%;
    margin-left: -0.4rem;
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.8rem;
    background-color: rgba(127, 127, 127, 0.25);
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`;
