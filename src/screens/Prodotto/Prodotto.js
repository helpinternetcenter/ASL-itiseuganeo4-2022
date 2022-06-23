import * as React from 'react';
import { IconRegistry, Layout} from '@ui-kitten/components';
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto';
import ScroolImage from '../../components/ScroolView/ScroolView';
import Description from '../../components/Description/Description';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


function Prodotto() {
    return (
      <>
        <IconRegistry icons = {EvaIconsPack}></IconRegistry>
        <Layout>
          <TitleProdotto name = 'MyProdotto'></TitleProdotto>
          <ScroolImage></ScroolImage>
          <Description></Description>
      </Layout>
      </>
    );
  }

export default Prodotto;