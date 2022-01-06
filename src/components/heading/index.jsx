import styled from 'styled-components';
import P from 'prop-types';
const sizes = {
  small: (theme) => theme.sizes.small,
  medium: (theme) => theme.sizes.medium,
  big: (theme) => theme.sizes.big,
  extra: (theme) => theme.sizes.extra,
  xlarge: (theme) => theme.sizes.xlarge,
};
export const MainTitle = styled.h1`
  color: ${({ theme, background }) =>
    background ? theme.colors.light_color : theme.colors.dark_color};
  font-size: ${({ size, theme }) => sizes[size](theme)};
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

export const Heading = ({
  title,
  background = false,
  as = 'h2',
  size = 'medium',
}) => {
  return (
    <MainTitle background={background} as={as} size={size}>
      {title}
    </MainTitle>
  );
};

Heading.propTypes = {
  title: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'xlarge', 'extra']),
  background: P.bool,
};
