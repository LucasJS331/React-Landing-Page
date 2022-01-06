/* eslint-disable */

import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {
        children: " Hellou,Dolly",
        background: true
        
    },
    argTypes:{
        background: {type: "boolean"},
        children: {type: 'string'}
    },
   
   
}

export const Temp = (args) => <SectionBackground {...args} />
