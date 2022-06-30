import * as React from 'react'
import { Text, Button } from '@ui-kitten/components'
import { StyleSheet, View, Image } from 'react-native'

function SceltaProdotto (props) {
  // const { itemId } = route?.params
  return (
    <View style={styles.viewMain}>

      <View style={styles.viewProdotto}>
        <Image source={{ uri: props.linkImmagine }} style={styles.logo} />
        <Text category='h3' style={styles.testoTitolo}> {props.nomeMobile} </Text>
        <View style={styles.viewMargin} />
        <Text category='p1' style={styles.testoSottotitolo}>{props.descrizione} </Text>
        <Text category='h6' style={styles.testoSpecifiche}>{props.colore}, {props.materiale}  </Text>
        <Button style={styles.button} appearance='ghost' onPress={() => props.cambioScheda()}>
          COMPRA
        </Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  viewMain: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10
  },
  button: {
    marginTop: '3%'
  },
  viewProdotto: {
    width: '98%',
    backgroundColor: '#dedede',
    borderWidth: 0,
    // marginTop: '10%',
    marginLeft: '1%',
    borderRadius: 20,
    paddingBottom: 15
  },

  viewMargin: {
    height: '3%',
    width: '40%',
    backgroundColor: '#6bc1d6',
    borderWidth: 0,
    marginLeft: '5%',
    borderRadius: 50,
    alignSelf: 'flex-end'
  },

  testoTitolo: {
    marginTop: '3%',
    marginLeft: '5%',
    alignSelf: 'flex-end'
  },

  testoSottotitolo: {
    marginLeft: '49%',
    alignSelf: 'flex-end'
  },

  testoSpecifiche: {
    marginTop: '1%',
    marginLeft: '49%',
    alignSelf: 'flex-end',
    fontSize: 15
  },
  logo: {
    marginLeft: '5%',
    width: 150,
    height: 120,
    marginTop: 10,
    marginBottom: 50,
    position: 'absolute',
    borderRadius: 5
  }

})
export default SceltaProdotto
