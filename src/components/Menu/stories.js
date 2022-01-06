/* eslint-disable */

import { Menu } from ".";
import { mockyNavLinks } from "../Nav/mocky";

export default {
    title: 'Menu',
    component: Menu,
    args: {
        logoData: {
            text: 'Logo',
            srcImg: ''
        },
        links: mockyNavLinks    
    },
    argTypes:{
        logoData: {type: "object"},
        links: {type: 'array'}
    },
    
}


export const MenuTemp = (args) => <Menu {...args} />

export const MenuTempImg = (args) => <Menu {...args} />

MenuTempImg.args ={
    logoData: {
        text: 'Logo',
        srcImg: 'assets/img/twitter-logo-4.png'
    },
}
