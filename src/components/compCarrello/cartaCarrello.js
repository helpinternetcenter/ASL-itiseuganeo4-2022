
import * as React from 'react'
import { Text, Button } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import datiPersonali from '../../api/datiPersonali.json'

function Dati (value) {
  const values = value.values
  console.log(values.stateValue)
  return (
    <View>
      <Text style={styles.datiRiassunto} category='p1'>{values.country} {values.address} ({values.province}) {values.stateValue}</Text>
      <Text style={styles.datiRiassunto} category='p1'>Pagamento: {values.statePagamento}</Text>
    </View>
  )
}

function CartaCarrello (props) {
  return (
    <View style={styles.viewMain}>
      <View style={styles.riepilogo}>
        <Text category='h3' style={styles.titolo}>Inserisci le informazioni:</Text>
        <View style={styles.viewMargin} />
        <Button style={styles.button} onPress={() => props.cambioScheda()}>Modifica</Button>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  viewMain: {

    paddingTop: 20,
    paddingBottom: 50

  },

  titolo: {
    marginTop: '5%',
    marginLeft: '5%'
  },

  datiRiassunto: {
    fontSize: 20,
    marginLeft: '5%'

  },

  viewMargin: {
    height: '2%',
    width: '60%',
    backgroundColor: '#6bc1d6',
    borderWidth: 0,
    marginTop: '3%',
    marginLeft: '5%',
    borderRadius: 50
  },
  riepilogo: {
    width: '96%',
    backgroundColor: '#dedede',
    borderWidth: 0,
    // marginTop: '10%',
    marginLeft: '2%',
    borderRadius: 20
  },

  button: {
    width: '94%',
    marginLeft: '2%',
    marginTop: '5%',
    marginBottom: '7%'
  }
})

export default CartaCarrello
