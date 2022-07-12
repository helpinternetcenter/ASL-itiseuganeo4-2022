import * as React from 'react'
import { Text, Button, Icon, IconRegistry } from '@ui-kitten/components'
import { StyleSheet, View, Image } from 'react-native'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

function SceltaProdotto (props, navigation, el) {
  // const { itemId } = route?.params

  const ShoppingCart = (props) => (
    <Icon {...props} name='shopping-cart-outline' height='30' width='30' />
  )

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <View style={styles.viewMain}>

        <View style={styles.viewProdotto}>
          <Image source={{ uri: props.linkImmagine }} style={styles.logo} />
          <Text category='h3' style={styles.testoTitolo}> {props.nomeMobile} </Text>
          <Text category='p1' style={styles.testoSottotitolo}>{props.descrizione} </Text>
          <Text category='p1' style={styles.prezzo}>{props.prezzo} </Text>
          <Button
            style={styles.button}
            appearance='ghost'
            accessoryLeft={ShoppingCart}
            onPress={() => props.cambioScheda()}
          />

        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({

  viewMain: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10
  },
  button: {
    marginBottom: 20,
    alignSelf: 'flex-end',
    height: 30,
    position: 'absolute',
    top: 110
  },
  viewProdotto: {
    width: '98%',
    height: 160,
    backgroundColor: '#ffffff',
    borderWidth: 0,
    // marginTop: '10%',
    marginLeft: '1%',
    borderRadius: 20,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 10

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
    marginLeft: '48%',
    fontSize: 25

  },

  testoSottotitolo: {
    marginLeft: '50%',
    fontSize: 15
  },

  prezzo: {
    marginLeft: '50%',
    color: '#6bc1d6',
    fontSize: 25,
    fontWeight: 'bold'
  },
  testoSpecifiche: {
    marginTop: '1%',
    marginLeft: '49%',
    alignSelf: 'flex-end',
    fontSize: 15
  },
  logo: {
    marginLeft: '5%',
    width: 90,
    height: 80,
    marginTop: 40,
    marginBottom: 50,
    position: 'absolute',
    borderRadius: 5
  }

})
export default SceltaProdotto
