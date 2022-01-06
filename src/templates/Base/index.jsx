import styled, { css } from 'styled-components';
import { Footer } from '../../components/Footer';
import { GoTopBtn } from '../../components/GoTopBtn';
import {Menu} from '../../components/Menu/index';

export const Container = styled.div`
    ${({theme})=> css`
        /* coloque seu css aqui */

        
    `}

`

export const BaseTemplate = ({links = [], logoData, children, footerTxt, footerHref})=>{
    return (
        <>
            <Menu links={links} logoData={logoData} />
            <Container>
                {children}
            </Container>
            <Footer text={footerTxt} href={footerHref}/>
            <GoTopBtn/>
        </>
    )
}