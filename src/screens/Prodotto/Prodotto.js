import * as React from 'react';
import { IconRegistry, Layout} from '@ui-kitten/components';
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto';
import ScroolImage from '../../components/ScroolImage/ScroolImage';
import Description from '../../components/Description/Description';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ScrollView } from 'react-native';
import PriceDescription from '../../components/PriceDescription/PriceDescription';


function Prodotto() {
    return (
      <>
        <IconRegistry icons = {EvaIconsPack}></IconRegistry>
        <ScrollView>
          <Layout level = '3'>
            <TitleProdotto name = 'MyProdotto'></TitleProdotto>
            <ScroolImage></ScroolImage>
            <Description></Description>
            <PriceDescription prezzo = '81,90$'></PriceDescription>
          </Layout>
        </ScrollView>
      </>
    );
  }

export default Prodotto;