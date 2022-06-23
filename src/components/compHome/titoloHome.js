import * as React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StyleSheet, View, Button } from 'react-native';

function Titolo (props){
    return(
        <View style={styles.viewTitolo}>
        <Text category='h1' style={styles.testoTitolo}>Ciao {props.nome} !</Text>
        <Text category='h6' style={styles.testoSottotitolo}>Tutti i prodotti a portata di un click</Text>
      </View>
    )
    
}

const styles = StyleSheet.create({
  
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
export default Titolo