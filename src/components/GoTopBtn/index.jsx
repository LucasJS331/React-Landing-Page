import styled, { css } from 'styled-components';
import { ArrowCircleUp } from '@styled-icons/material-outlined/ArrowCircleUp';

const Container = styled.a`
  ${({ theme }) => css`
    width: 4.7rem;
    height: 4.7rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    transition: all 300ms ease-in-out;

    @media ${theme.media.default} {
      width: 4rem;
      height: 4rem;
    }

    :hover {
      transform: scale(1.1);
    }
  `}
`;
export const GoTopBtn = () => {
  return (
    <Container href="#" aria-label="Go to Top" title="Go to Top">
      <ArrowCircleUp />
    </Container>
  );
};
