import { mockyNavLinks } from '../../components/Nav/mocky';
import img from '../../img/Plane.png';
import { GridText } from '../../components/GridText';
import { gridTextMocky } from '../../components/GridText/mocky';

export const baseMocky = {
  links: mockyNavLinks,
  logoData: {
    text: 'mocky',
    srcImg: img,
  },
  footerTxt: 'Luuucaaas',
  footerHref: 'http://www.google.com',
  children: (
    <>
      <GridText
        background={true}
        description={'Test'}
        title={'Test Title'}
        gridContent={gridTextMocky}
      />
      <GridText
        background={false}
        description={'Test'}
        title={'Test Title2'}
        gridContent={gridTextMocky}
      />
      <GridText
        background={true}
        description={'Test'}
        title={'Test Title3'}
        gridContent={gridTextMocky}
      />
    </>
  ),
};
