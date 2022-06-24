import * as React from 'react';
import { ApplicationProvider, Layout, Text, Divider } from '@ui-kitten/components';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import Titolo from '../../components/compHome/titoloHome';
import SceltaProdotto from '../../components/compHome/prodottoHome';
import { ProdottoScreen } from '../navigaitor';
import prodotti from '../../api/visualizzaProdottiHome.json'


function Home({navigation, route}) {
  const { itemId } = route.params;
  console.log(prodotti);
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Titolo>t</Titolo>
      <View style={styles.viewProdotti}>
      <Titolo>t</Titolo>

=======
      <Titolo valore={itemId}/>
      <ScrollView style={{paddingBottom: 200}}>
>>>>>>> c90f300e345912a13b02722529e4bf156f2a324f
        
        {prodotti.data.map(el=>(<SceltaProdotto nomeMobile ={el.nomeMobile} descrizione = {el.descrizioneMobile} cambioScheda={() => navigation.navigate(ProdottoScreen.id)}/>))}




      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  viewTitolo: {
    height: '20%',
    width: '100%',

    borderWidth: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
  },

  viewProdotti: {
   backgroundColor:'red',

  },

  testoTitolo: {
    marginTop: '5%',
    marginLeft: '5%',
  },

  testoSottotitolo: {
    marginLeft: '5%',
  }
})

export default Home;