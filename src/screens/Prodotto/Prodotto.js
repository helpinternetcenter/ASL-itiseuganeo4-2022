import * as React from 'react';
import { Layout} from '@ui-kitten/components';
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto';
import ScroolImage from '../../components/ScroolView/ScroolView';


function Prodotto() {
    return (
      <Layout>
        <TitleProdotto name = 'Title'></TitleProdotto>
        <ScroolImage></ScroolImage>
      </Layout>
    );
  }

export default Prodotto;