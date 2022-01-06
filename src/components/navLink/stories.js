/* eslint-disable */

import { NavLink } from ".";

export default {
    title: 'navLink',
    component: NavLink,
    args: {
        text: 'default text',
        url: 'www.google.com',
        target: '_blank'
        
        
    },
    argTypes:{
        text: {type: "string"},
        url: {type: 'string'},
        target: {type: 'string'}
    },
  
   
}


export const NavLink1 = (args) => <NavLink {...args} />
