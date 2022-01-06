import styled, { css } from 'styled-components';
import { TextComponent } from '../textComponent';
import P from 'prop-types';

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
  `}
`;

export const Footer = ({ text, background = false, href = '/' }) => {
  return (
    <Container id="Footer">
      <TextComponent>
        <a href={href}>{text}</a>
      </TextComponent>
    </Container>
  );
};

Footer.propTypes = {
  text: P.string.isRequired,
  background: P.bool,
  href: P.string,
};
