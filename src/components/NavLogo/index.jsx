import styled, { css } from 'styled-components';
import P from 'prop-types';

export const ContainerLogo = styled.a`
   

    ${({theme})=> css`
        color: ${theme.colors.primary_color};
        display: flex;
        font-weight: bold;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 1px;

        > img{
            max-width: 2em;
            max-height: 4em;
        }
    `}

`

export const NavLogo = ({text, srcImg = ''}) => {
    return (
        <ContainerLogo href='#'>
             {srcImg.trim() !== '' && 
               <img src={srcImg} alt={text} />
            }

            {srcImg.trim() === '' && 
                <span>{text}</span>
            }
        </ContainerLogo>
    )
}


NavLogo.propTypes = {
    text: P.string.isRequired,
    srcImg: P.string.isRequired,
}