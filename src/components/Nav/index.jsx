import styled, { css } from 'styled-components';
import { NavLink } from '../navLink';
import propType from 'prop-types';

export const NavMenu = styled.nav`
    ${({theme})=> css`
        @media ${theme.media.default} {
            display: flex;
            flex-flow: column wrap;
            align-content: center;
        }
    `}

`


export const Nav = ({links = []})=>{

    return(
        <NavMenu>
            {links.map((link)=>{
                return <NavLink key={link.text} {...link} />
            })}
        </NavMenu>
    )
}


Nav.propType = {
    links: propType.arrayOf(
        propType.shape({
            text: propType.string.isRequired,
            link: propType.string.isRequired,
            target: propType.string.isRequired
        })
    )
}