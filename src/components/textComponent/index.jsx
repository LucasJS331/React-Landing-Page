import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
const sizes = {
  small: (theme) => theme.sizes.small,
  medium: (theme) => theme.sizes.medium,
  big: (theme) => theme.sizes.big,
};
export const Text = styled.p`
  font-size: ${({ size, theme }) => sizes[size](theme)};

  ${({ theme }) => css`
    @media ${theme.media.default} {
      font-size: 2rem;
      padding: 1rem;
    }
  `}
`;

export const TextComponent = ({ children, size = 'medium' }) => {
  return <Text size={size}>{children}</Text>;
};

TextComponent.propTypes = {
  children: propTypes.node,
  size: propTypes.string,
};
