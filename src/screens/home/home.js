/* eslint-disable react/jsx-key */
import React, { useState, useContext } from 'react'
import { View, ScrollView } from 'react-native'
import Titolo from '../../components/compHome/titoloHome'
import SceltaProdotto from '../../components/compHome/prodottoHome'
import { ProdottoScreen } from '../navigaitor'
import { home, idUtente } from '../../api/'
import { Context } from '../../context/AuthContext'
import { styles } from './homeStyle'

function Home ({ navigation }) {
  const { state } = useContext(Context)
  const [prod, setProdotti] = useState([])
  const [idUt, setIdUt] = useState([])

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

export default Home
