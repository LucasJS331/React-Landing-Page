/* eslint-disable */

import { NavLogo } from ".";

export default {
    title: 'NavLogo',
    component: NavLogo,
    args: {
        text: 'default text',
        srcImg: '/assets/img/twitter-logo-4.png',
        
        
    },
    argTypes:{
        text: {type: "string"},
        srcImg: {type: 'string'}
    },
  
   
}


export const NavLogoText = (args) => <NavLogo {...args} />
export const NavLogoImg = (args) => <NavLogo {...args} />

NavLogoText.args ={
    srcImg: ''
}
