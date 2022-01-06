/* eslint-disable */

import { GridText } from ".";
import { gridTextMocky } from "./mocky";

export default {
    title: 'GridTxt',
    component: GridText,
    args: {
        title: 'default text',
        description: 'Mocky Txt',
        gridContent: gridTextMocky,
        background: false
        
        
    },
    argTypes:{
        title: {type: "string"},
        description: {type: 'string'}
    },
    
   
}

export const GridTxt = (args) => <GridText {...args} />
