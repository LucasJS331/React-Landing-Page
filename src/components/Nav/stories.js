/* eslint-disable */

import { Nav } from ".";
import { mockyNavLinks } from "./mocky";

export default {
    title: 'Nav',
    component: Nav,
    args: {
        links: mockyNavLinks
        
    },
    argTypes:{
        links: {type: ""},
    },
   
   
}

export const NavTemp = (args) => <Nav {...args} />
