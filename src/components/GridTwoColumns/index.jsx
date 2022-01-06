import styled, { css } from 'styled-components';
import { SectionBackground } from '../SectionBackground';
import { Heading, MainTitle } from '../heading';
import { TextComponent } from '../textComponent';
import P from 'prop-types';

const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 15px;

    ${background === true &&
    css`
      ${MainTitle} {
        color: white;
      }
    `}

    @media ${theme.media.default} {
      grid-template-columns: 1fr;

      ${MainTitle} {
        font-size: ${theme.sizes.big};
      }
    }

    ${MainTitle} {
      margin-bottom: 1.6rem;
    }
  `}
`;

const TextContainer = styled.div``;

const ImgContainer = styled.div``;

export const GridTwoColumns = ({ title, text, srcImg, background = true }) => {
  return (
    <SectionBackground background={background}>
      <Container background={background} id="GridTwoColumns">
        <TextContainer>
          <Heading title={title} size="xlarge" />
          <TextComponent size={'medium'}>{text}</TextComponent>
        </TextContainer>
        <ImgContainer>
          <img src={srcImg} alt={title} />
        </ImgContainer>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  text: P.string.isRequired,
  background: P.bool,
  title: P.string.isRequired,
  srcImg: P.string.isRequired,
};
