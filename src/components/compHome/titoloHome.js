import * as React from 'react'
import { Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'

function Titolo (props) {
  return (
    <View style={[styles.viewTitolo, props.style]}>
      <Text category='h1' style={styles.testoTitolo}>Ciao {props.valore}!</Text>
      <Text category='h6' style={styles.testoSottotitolo}>Tutti i prodotti a portata di un click</Text>
      <View style={[styles.viewCerca]}>
        <Input>Cerca</Input>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  viewTitolo: {
    height: '20%',
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 0,
    justifyContent: 'center'
  },

  viewCerca: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginTop: 10,
    height: '30%'
  },

  testoTitolo: {
    color: '#6bc1d6',
    marginTop: '5%',
    marginLeft: '7%',
    fontWeight: 'bold',
    fontSize: 25

  },

  testoSottotitolo: {
    marginLeft: '7%',
    fontWeight: 'normal',
    fontSize: 15
  }
})
export default Titolo
