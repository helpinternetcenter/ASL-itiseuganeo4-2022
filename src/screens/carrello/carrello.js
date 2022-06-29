/* eslint-disable react/jsx-key */
import * as React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Titolo from '../../components/compHome/titoloHome'
import SceltaProdotto from '../../components/compHome/prodottoHome'
import { ProdottoScreen } from '../navigaitor'
import prodotti from '../../api/specificheProdotti.json'
import utente from '../../api/credenziali.json'

function Home ({ navigation, route }) {
  const { idIdentificativo } = route.params
  console.log(prodotti)
  return (
    <View style={styles.container}>
      <Titolo valore={utente.data[idIdentificativo].nomeCredenziali} />
      <ScrollView style={{ paddingBottom: 200 }}>
        {prodotti.data.map(el => {
          return (
            <SceltaProdotto
              nomeMobile={el.nomeMobile}
              descrizione={el.descrizioneMobile}
              cambioScheda={() => {
                navigation.navigate(ProdottoScreen.id, { itemId: el.idMobile })
              }}
              numeroRender={el.idMobile}
            />
          )
        }
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center'
  },

  viewTitolo: {
    height: '20%',
    width: '100%',

    borderWidth: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center'
  },

  viewProdotti: {
    backgroundColor: 'red'
  },

  testoTitolo: {
    marginTop: '5%',
    marginLeft: '5%'
  },

  testoSottotitolo: {
    marginLeft: '5%'
  }
})

export default Home
