import styled, { css } from 'styled-components';
import P from 'prop-types';

export const Link = styled.a`
    ${({theme})=> css`
        color: ${theme.colors.primary_color};
        text-decoration: none;
        font-weight: bold;
        padding: 1em;
        transition: all .5s ease-in;
        border-bottom: 0 solid red;
        display: inline-block;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 0.2rem;
            background: ${theme.colors.secondary_color};
            transition: all 300ms ease-in-out;
        }
        &:hover::after {
            left: 25%;
            width: 50%;
        }
    `}

`

export const NavLink = ({text, target, url})=>{
    return (
        <Link href={url} target={target}>{text}</Link>
    )
}

NavLink.propTypes = {
    text: P.string.isRequired,
    target: P.string,
    url: P.string.isRequired,   
}