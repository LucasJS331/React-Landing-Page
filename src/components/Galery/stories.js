/* eslint-disable */

import { Galery } from ".";
import { galeryMocky } from "./mocky";

export default {
    title: 'Galery',
    component: Galery,
    args: {
        title: 'default text',
        text: 'default',
        grid: galeryMocky,
        background: false
        
        
    },
    argTypes:{
        title: {type: "string"},
        text: {type: 'string'},
        background: {type: 'boolean'}
    },
  
   
}

export const GaleryTemp = (args) => <Galery {...args} />
