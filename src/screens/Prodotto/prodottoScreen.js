import * as React from 'react';
import { IconRegistry, Layout} from '@ui-kitten/components';
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto';
import ScroolImage from '../../components/ScroolImage/ScroolImage';
import Description from '../../components/Description/description';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ScrollView } from 'react-native';
import PriceDescription from '../../components/PriceDescription/PriceDescription';
import {CarrelloScreen}from '../navigaitor'
import dati from '../../api/specificheProdotti.json'


function Prodotto({route , navigation}) {
  const { itemId } = route.params;

    function GoBackAction(){
      navigation.goBack();
    }

    function GoToCarrello(){
      navigation.navigate(CarrelloScreen.id)
    }
    console.log(itemId);

    return (
      <>
        <IconRegistry icons = {EvaIconsPack}></IconRegistry>
        <TitleProdotto name ={dati.data[itemId].nomeMobile} action = {GoBackAction}></TitleProdotto>
        <ScrollView>
          <Layout level = '3'>
            <ScroolImage numeroRender={itemId}></ScroolImage>
            <Description numeroRender={itemId}></Description>
            <PriceDescription numeroRender={itemId} prezzo = '81,90€' action = {GoToCarrello}></PriceDescription>
          </Layout>
        </ScrollView>
      </>
    );
  }

export default Prodotto;