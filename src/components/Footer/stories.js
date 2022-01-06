/* eslint-disable */

import { Footer } from ".";

export default {
    title: 'Footer',
    component: Footer,
    args: {
        text: 'Feito por Lucas G.',
        href: 'https://github.com/LucasJS331'
        
        
    },
    argTypes:{
        title: {type: "string"},
        href: {type: 'string'}
    },
   
   
}

//export const Template = (args)=> <Heading {...args} />

export const FooterTemp = (args) => <Footer {...args} />
