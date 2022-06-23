import * as React from 'react';
import { ApplicationProvider, Layout, Text, Divider } from '@ui-kitten/components';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import Titolo from '../../components/compHome/titoloHome';
import SceltaProdotto from '../../components/compHome/prodottoHome';
import { ProdottoScreen } from '../navigaitor';


function Home({navigation, route}) {
  const { itemId } = route.params;

  return (
    <View style={styles.container}>
      <Titolo valore={itemId}/>
      <ScrollView>
      <SceltaProdotto cambioScheda={() => navigation.navigate(ProdottoScreen.id)}/>
      <SceltaProdotto />
      <SceltaProdotto />
      <SceltaProdotto />



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center'
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