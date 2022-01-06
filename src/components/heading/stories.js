import { Heading } from ".";

export default {
    title: 'Heading',
    component: Heading,
    args: {
        title: 'default text',
        light: false,
        
        
    },
    argTypes:{
        title: {type: "string"},
        light: {type: 'boolean'}
    },
    parameters: {
        backgrounds:{
            default: 'DarkBlue'
        }
    }
   
}

export const Light = (args) => <Heading {...args} />

export const Dark = (args) => <Heading {...args}  />
  

Light.parameters = {
    backgrounds: {
        default: 'Light'
    }
}

Dark.args = {
    light: true
}