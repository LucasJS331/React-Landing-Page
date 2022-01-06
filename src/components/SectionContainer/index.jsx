import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 3.2rem 7rem;

    @media ${theme.media.default} {
      margin: 4rem auto;
      padding: 3.2rem;
    }
  `}
`;
