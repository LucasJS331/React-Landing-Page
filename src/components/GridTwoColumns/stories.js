/* eslint-disable */

import { GridTwoColumns } from ".";

export default {
    title: 'GridTwo',
    component: GridTwoColumns,
    args: {
        title: 'January Bring Us firefox 85',
        text: 'Hello Dolly This is miss Dolly Its so nice to have you back where you belong Youre lookin swell, Dolly I can tell, Dolly Youre still glowin, youre still crowin, youre still goin strong',
        background: true,
        srcImg: 'assets/img/javascript.svg'
        
        
    },
    argTypes:{
        title: {type: "string"},
        text: {type: 'string'},
        background: {type: "boolean"},
        srcImg: {type: 'string'}
    },
   
}

export const GridTwoColumnsTemplate = (args) => <GridTwoColumns {...args} />
