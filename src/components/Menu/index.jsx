import styled, { css } from 'styled-components';
import { Nav } from '../Nav';
import { NavLogo } from '../NavLogo';
import { SectionContainer } from '../SectionContainer';
import P from 'prop-types';
import {ContainerLogo} from '../NavLogo/index';
import {Menu as MenuBtn} from '@styled-icons/material-outlined/Menu';
import {Close as CloseIcon} from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

const Container = styled.div`
    ${({theme, visible})=> css`
        width: 100%;
        max-height: 100vh;
        background: ${theme.colors.light_color};
        overflow: hidden;
        transition: all 0.6s ease-in;
        z-index: 6;
        position: fixed;

        @media ${theme.media.default} {
            ${!visible &&  css`
                max-height: 0px;
         
            `}
            
        
                
        }

        ${SectionContainer}{
            padding: 0.5rem 8rem;
        }

  
        
    `}

`
const MenuContainer = styled.div`
  ${({theme})=> css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        @media ${theme.media.default} {
            display: flex;
            flex-flow: column wrap;
            align-content: center;

            > ${ContainerLogo} > img {
                 margin-bottom: 1.5rem;
            }
        }
  
    }
        
    `}

`

const Button = styled.button`
    ${({theme})=> css`

            display: none;

        @media ${theme.media.default} {
            display: inline-block;
            z-index: 8;
            position: fixed;
            top: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            background-color: ${theme.colors.primary_color};
            color: white;
            border: none;
            border-radius: 5px;
            transition: all .5s ease-in-out;
            animation: fade .8s linear;

            :hover{
                background-color: ${theme.colors.secondary_color};
            }


        @keyframes fade{
            0%{
                opacity: 0;
            }
        
            100%{
                opacity: 1;
            }
        }

        }
  
    `}

`

export const Menu = ({links, logoData})=> {
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsClosed] = useState(true);
    
    const handleBtn = ()=>{
        setVisible((s)=> !s);
        setIsClosed((c)=> !c);
    }
    return (
        <>
        <Button onClick={handleBtn}>
            {isOpen ? <MenuBtn/> : <CloseIcon/>}
        </Button>
        <Container visible={visible}>
            <SectionContainer>
                <MenuContainer>
                    <NavLogo {...logoData}/>
                    <Nav links={links} />
                </MenuContainer>
            </SectionContainer>
        </Container>
        </>
    )
}

Menu.propTypes = {
    logoData: P.shape(NavLogo.propTypes).isRequired,
    ...Nav.propTypes
}