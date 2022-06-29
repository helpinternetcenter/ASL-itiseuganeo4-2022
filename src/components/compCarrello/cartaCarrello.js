import * as React from 'react'
import { Text, Divider, Button } from '@ui-kitten/components'
import { StyleSheet, View, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProdottoScreen } from '../../screens/navigaitor'

function CartaCarrello (props) {
  return (
    <View style={styles.viewMain}>
      <View style={styles.riepilogo}>
        <Text category='h3' style={styles.titolo}>Inserisci le informazioni:</Text>
        <View style={styles.viewMargin} />
        <Button style={styles.button} onPress={props.cambioScheda}>Inserisci</Button>

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
    width: '60%',
    marginLeft: '35%',
    marginTop: '5%',
    marginBottom: '7%'
  }
})

export default CartaCarrello
