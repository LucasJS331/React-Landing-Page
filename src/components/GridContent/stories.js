/* eslint-disable */

import {GridContent } from ".";

export default {
    title: 'GridContent',
    component: GridContent,
    args: {
        title: 'January Bring Us firefox 85',
        text: 'Hello Dolly This is miss Dolly Its so nice to have you back where you belong Youre lookin swell, Dolly I can tell, Dolly Youre still glowin, youre still crowin, youre still goin strong',
        background: false,        
        
    },
    argTypes:{
        title: {type: "string"},
        text: {type: 'string'},
        background: {type: "boolean"},
    },
   
}

export const GridContentTemplate = (args) => <GridContent {...args} />
