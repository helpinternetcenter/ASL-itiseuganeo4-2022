import * as React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StyleSheet, View, Button } from 'react-native';
import Titolo from '../../components/compHome/titoloHome';


function Home() {

  return (
    <View style={styles.container}>
      <Titolo>t</Titolo>
      <View style={styles.viewProdotti}>
      <Titolo>t</Titolo>

        
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'center'
  },

  viewTitolo: {
    height: '20%',
    width: '100%',
    backgroundColor: '#6bc1d6',
    borderWidth: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
  },

  viewProdotti: {

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