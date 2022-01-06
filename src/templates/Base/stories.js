/* eslint-disable */

import {BaseTemplate } from ".";
import { GridText } from "../../components/GridText";
import { gridTextMocky } from "../../components/GridText/mocky";
import { baseMocky } from "./mocky";

export default {
    title: 'Templates/Base',
    component: BaseTemplate,
    args: {
        children: (
            <>
                <GridText background={true} description={'Test'} title={'Test Title'}  gridContent={gridTextMocky} />
                <GridText background={false} description={'Test'} title={'Test Title2'} gridContent={gridTextMocky}/>
                <GridText background={true} description={'Test'} title={'Test Title3'}  gridContent={gridTextMocky} />
            </>
            
        ),
        ...baseMocky
        
        
    },
    argTypes:{
        title: {type: "string"},
    },
   
}


export const Base = (args) => <BaseTemplate {...args} />
