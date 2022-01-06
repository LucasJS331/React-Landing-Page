import styled, { css } from 'styled-components';
import { Heading, MainTitle } from '../heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../textComponent';
import P from 'prop-types';

const Container = styled.section`
  ${({ theme }) => css`
    ${MainTitle} {
      margin-bottom: 10px;
    }

    > p {
      margin-bottom: ${theme.sizes.big};
    }
  `}
`;
const Grid = styled.div`
  ${({ theme }) => css`
    /* coloque seu css aqui */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 0 auto;
    text-align: center;
  `}
`;

const Article = styled.article``;

export const GridText = ({
  background = true,
  description,
  gridContent = [],
  title,
}) => {
  return (
    <SectionBackground background={background}>
      <Container background={background} className="Grid-txt" id="GridText">
        <Heading title={title} size="extra" background={background} />
        <TextComponent>{description}</TextComponent>
        <Grid>
          {gridContent.map((element) => {
            return (
              <Article key={element.title}>
                <Heading
                  title={element.title}
                  size="medium"
                  background={background}
                />
                <TextComponent>{element.text}</TextComponent>
              </Article>
            );
          })}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  description: P.string.isRequired,
  background: P.bool,
  title: P.string.isRequired,
  gridContent: P.array,
};
