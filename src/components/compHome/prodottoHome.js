import * as React from 'react'
import { Text, Button, Icon, IconRegistry } from '@ui-kitten/components'
import { View, Image } from 'react-native'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { styles } from './prodottoHomeStyles'

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
export default SceltaProdotto
