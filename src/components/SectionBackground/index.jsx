import styled, { css } from 'styled-components';
import { SectionContainer } from '../SectionContainer';
import bg from '../../img/main-bg.svg';
import P from 'prop-types';

export const Container = styled.div`
    ${({theme, background})=> css`
        
        min-height: 100vh;
        display: flex;
        align-items: center;
       
        ${background === true &&  css`
            color: white;
            background-image: url(${bg});
            background-size: contain;
        `}
        
        ${!background  &&  css`
            color: ${theme.colors.primary_color};
            background: white;
        `}
        
    `}

`

export const SectionBackground = ({children, background = true})=>{
    return(
        <Container background={background}>
            <SectionContainer>
                {children}
            </SectionContainer>
        </Container>
    )
}

SectionBackground.propTypes = {
    children: P.node.isRequired,
    background: P.bool,
 
}