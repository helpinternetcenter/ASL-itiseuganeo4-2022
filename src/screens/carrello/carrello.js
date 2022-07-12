import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { PagamentoCarrelloScreen, HomeScreen } from '../navigaitor'
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import Riepilogo from '../../components/compCarrello/riepilogoCarrello'
import CartaCarrello from '../../components/compCarrello/cartaCarrello'
import Tab from '../../components/compCarrello/tabNavigazione'

function Carrello ({ route, navigation }) {
  function GoBackAction () {
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1 }}>
      {/*<TitoloCarrello name='Carrello' style={StyleMod.modTitolo} action={() => GoBackAction()} />*/}
      <View style={{ flex: 18 }}>
        <ScrollView>
          <CartaCarrello cambioScheda={() => navigation.navigate(PagamentoCarrelloScreen.id)} />
          <Riepilogo onPressGoBack={() => GoBackAction()} />
        </ScrollView>
      </View>
      {/*
      <Tab
        style={{ flex: 1.5 }} margine={{ marginLeft: '74%' }}
        cambioScheda={() => {
          navigation.navigate(HomeScreen.id)
        }}
      />
      */}
    </View>
  )
}
const StyleMod = StyleSheet.create({
  modTitolo: {
    flex: 1,
    backgroundColor: '#6bc1d6',
    height: '4%',
    width: '100%'

  }
}
)
export default Carrello
