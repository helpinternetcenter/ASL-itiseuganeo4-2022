import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { PagamentoCarrelloScreen } from '../navigaitor'
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import Riepilogo from '../../components/compCarrello/riepilogoCarrello'
import CartaCarrello from '../../components/compCarrello/cartaCarrello'

function Carrello ({ route, navigation }) {
  const { conferma } = route.params
  function GoBackAction () {
    navigation.goBack()
  }

  return (
    <View>
      <TitoloCarrello name='Carrello' style={StyleMod.modTitolo} action={() => GoBackAction()} />
      <CartaCarrello cambioScheda={() => navigation.navigate(PagamentoCarrelloScreen.id)} />
      <Riepilogo onPressGoBack={() => GoBackAction()} statePage={conferma} />
    </View>
  )
}
const StyleMod = StyleSheet.create({
  modTitolo: {
    backgroundColor: '#6bc1d6',
    height: '9%',
    width: '100%'

  }
}
)
export default Carrello
