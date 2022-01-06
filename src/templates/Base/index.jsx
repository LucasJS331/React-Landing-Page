import styled, { css } from 'styled-components';
import { Footer } from '../../components/Footer';
import { GoTopBtn } from '../../components/GoTopBtn';
import { Menu } from '../../components/Menu/index';
import P from 'prop-types';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const BaseTemplate = ({
  links = [],
  logoData,
  children,
  footerTxt,
  footerHref,
}) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>{children}</Container>
      <Footer text={footerTxt} href={footerHref} />
      <GoTopBtn />
    </>
  );
};

BaseTemplate.propTypes = {
  footerTxt: P.string.isRequired,
  links: P.array,
  footerHref: P.string.isRequired,
  logoData: P.object,
  children: P.node,
};
