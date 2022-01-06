import { TextComponent } from ".";

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: ' Lorem ipsulum Doler imundis lores fresdis Morem Adsa Melum keetiv',
        size: 'medium'
        
        
    },
    argTypes:{
        children: {type: "string"},
    },
    
   
}

export const Text = (args) => <TextComponent {...args} />
