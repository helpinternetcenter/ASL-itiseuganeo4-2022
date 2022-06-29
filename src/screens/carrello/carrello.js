import * as React from 'react'
import { View } from 'react-native'
import { PurchaseScreen } from '../../screens/navigaitor'
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import Riepilogo from '../../components/compCarrello/riepilogoCarrello'
import CartaCarrello from '../../components/compCarrello/cartaCarrello'

function Carrello ({ route, navigation }) {
  function GoBackAction () {
    navigation.goBack()
  }
  console.log('ciao mondo')
  return (
    <View>
      <TitoloCarrello name='Carrello' action={() => GoBackAction} />
      <CartaCarrello cambioScheda={() => navigation.navigate(PurchaseScreen.id)} />
      <Riepilogo />

    </View>
  )
}

export default Carrello
