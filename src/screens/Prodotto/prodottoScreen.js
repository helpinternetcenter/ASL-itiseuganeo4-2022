import * as React from 'react';
import { IconRegistry, Layout} from '@ui-kitten/components';
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto';
import ScroolImage from '../../components/ScroolImage/ScroolImage';
import Description from '../../components/Description/description';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ScrollView } from 'react-native';
import PriceDescription from '../../components/PriceDescription/PriceDescription';
import {PurchaseScreen}from '../navigaitor'


function Prodotto({navigation}) {

    function GoBackAction(){
      navigation.goBack();
    }

    function GoToPurchaseScreen(){
      navigation.navigate(PurchaseScreen.id)
    }

    return (
      <>
        <IconRegistry icons = {EvaIconsPack}></IconRegistry>
        <ScrollView>
          <Layout level = '3'>
            <TitleProdotto name = 'MyProdotto' action = {GoBackAction}></TitleProdotto>
            <ScroolImage uri = {['https://cdn.sklum.com/it/wk/1079151/sedia-in-velluto-glamm.jpg' , 'https://cdn.sklum.com/it/wk/1079163/sedia-in-velluto-glamm.jpg']}></ScroolImage>
            <Description></Description>
            <PriceDescription prezzo = '81,90€' action = {GoToPurchaseScreen}></PriceDescription>
          </Layout>
        </ScrollView>
      </>
    );
  }

export default Prodotto;