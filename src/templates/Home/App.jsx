
import { BaseTemplate } from '../Base';
import {baseData} from '../../data/initialData'
import {GridTwoColumns} from '../../components/GridTwoColumns/index';
import {GridContent} from '../../components/GridContent/index';
import {loremData} from '../../data/lorem';
import {GridText} from '../../components/GridText/index';
import {Galery} from '../../components/Galery/index';
import { imagesData } from '../../data/imagesData';
import img from '../../img/javascript.svg';


function App() {
  return (
    <div>
     <BaseTemplate {...baseData}>
        <GridTwoColumns title={loremData.title1} text={loremData.text1} srcImg={img}/>
        <GridContent title={loremData.title2} text={loremData.text2}/>
        <GridText title={loremData.title3} description={loremData.text3} gridContent={loremData.textArr}/>
        <Galery text={loremData.textArr[2].text} title={'Galery'} grid={imagesData}/>
     </BaseTemplate>
    </div>
  );
}

export default App;
