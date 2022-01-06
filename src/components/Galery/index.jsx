import styled, { css } from 'styled-components';
import { Heading } from '../heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent, Text } from '../textComponent';
import P from 'prop-types';

const Container = styled.div`
  ${({ theme }) => css`
    ${Text} {
      margin-bottom: 4rem;
    }
  `}
`;

const GaleryGrid = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;

    > img {
      width: 100%;
      border-radius: 5px;
      transition: all 300ms ease-in-out;
      height: 288px;
    }
    & > img:hover {
      transform: scale(1.05);
    }
  `}
`;

export const Galery = ({ background = false, title, text, grid }) => {
  return (
    <SectionBackground background={background}>
      <Container id="Galery">
        <Heading as="h3" title={title} size="extra" background={background} />
        <TextComponent>{text}</TextComponent>
        <GaleryGrid>
          {grid.map((element) => {
            return (
              <img
                key={element.title}
                alt={element.title}
                src={element.srcImg}
              />
            );
          })}
        </GaleryGrid>
      </Container>
    </SectionBackground>
  );
};

Galery.propTypes = {
  text: P.string.isRequired,
  background: P.bool,
  title: P.string,
  grid: P.arrayOf(
    P.shape({
      title: P.string,
      srcImg: P.string,
    }),
  ),
};
