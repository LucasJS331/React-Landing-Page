import styled, { css } from 'styled-components';
import { Heading, MainTitle } from '../heading';
import { SectionBackground } from '../SectionBackground/index';
import { TextComponent } from '../textComponent';
import P from 'prop-types';

const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 58rem;
    margin: 0 auto;

    ${background === true &&
    css`
      ${MainTitle} {
        color: white;
      }
    `}
    ${MainTitle} {
      margin-bottom: ${theme.sizes.medium};
    }

    @media ${theme.media.default} {
      ${MainTitle} {
        font-size: ${theme.sizes.big};
      }
    }
  `}
`;

export const GridContent = ({
  title,
  text,
  background = false,
  size = 'xlarge',
}) => {
  return (
    <SectionBackground background={background}>
      <Container background={background} id="GridContent">
        <Heading as="h2" title={title} size={size} />
        <TextComponent>{text}</TextComponent>
      </Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  text: P.string.isRequired,
  background: P.bool,
  title: P.string.isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'xlarge', 'extra']),
};
