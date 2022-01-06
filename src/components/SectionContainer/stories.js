/* eslint-disable */

import {SectionContainer } from ".";

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>Oiiiiiii</h1>
                <p>Hello,Dolly!</p>
            </div>
        ),
        
        
    },
    argTypes:{
     
    },
   
   
}


export const Temp = (args) => <SectionContainer {...args} />
