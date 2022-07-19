/* eslint-disable react/jsx-key */
import * as React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Titolo from '../../components/compHome/titoloHome'
import SceltaProdotto from '../../components/compHome/prodottoHome'
import { ProdottoScreen } from '../navigaitor'
import { home, idUtente } from '../../api/'
import { Context } from '../../context/AuthContext'

function Home ({ navigation, route }) {
  const { state } = React.useContext(Context)

  /* const { idIdentificativo } = route.params */
  const [prod, setProdotti] = React.useState([])
  const [idUt, setIdUt] = React.useState([])

  React.useEffect(() => {
    console.log('HELO')
    home().then((prodotti) => {
      setProdotti(prodotti)
    })
    idUtente(state.id).then(({ nome, cognome, username }) => {
      setIdUt(nome, cognome, username)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Titolo valore={idUt} style={{ flex: 4 }} />
      <View style={{ flex: 15 }}>
        <ScrollView>
          {prod.map((el, key) => {
            return (
              <SceltaProdotto
                key={key}
                nomeMobile={el.nomeMobile}
                descrizione={el.descrizioneMobile}
                linkImmagine={el.linkImmagini[0]}
                colore={el.colore}
                prezzo={el.prezzo}
                materiale={el.materiale}
                cambioScheda={() => {
                  navigation.navigate(ProdottoScreen.id, { itemId: el.idMobile })
                }}
                numeroRender={el.idMobile}
              />
            )
          })}
        </ScrollView>
      </View>
      {/*
      <Tab
        style={{ flex: 1.5 }} margine={{ marginLeft: '7%' }} cambioScheda={() => {
          navigation.navigate(CarrelloScreen.id)
        }}
      />
      */}
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
