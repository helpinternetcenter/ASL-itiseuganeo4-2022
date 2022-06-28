import * as React from 'react';
import { IconRegistry, Layout} from '@ui-kitten/components';
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto';
import ScroolImage from '../../components/ScroolImage/ScroolImage';
import Description from '../../components/Description/description';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ScrollView } from 'react-native';
import PriceDescription from '../../components/PriceDescription/PriceDescription';
import {PurchaseScreen}from '../navigaitor'


function Prodotto({route , navigation}) {
  const { itemId } = route.params;

    function GoBackAction(){
      navigation.goBack();
    }

   


    function GoToPurchaseScreen(){
      navigation.navigate(PurchaseScreen.id)
    }

    return (
      <>
        <IconRegistry icons = {EvaIconsPack}></IconRegistry>
        <TitleProdotto name = 'MyProdotto' action = {GoBackAction} action2 = {GoToPurchaseScreen} action3 = {GoForwardAction}></TitleProdotto>
        <ScrollView>
          <Layout level = '3'>
            <ScroolImage numeroRender={itemId}></ScroolImage>
            <Description numeroRender={itemId}></Description>
            <PriceDescription numeroRender={itemId} prezzo = '81,90€'></PriceDescription>
          </Layout>
        </ScrollView>
      </>
    );
  }

export default Prodotto;