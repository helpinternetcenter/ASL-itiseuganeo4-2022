import React from 'react'
import CartaCarrello from '../../components/compCarrello/cartaCarrello'
import Riepilogo from '../../components/compCarrello/riepilogoCarrello'
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import { ScrollView, View } from 'react-native'
import { Layout } from '@ui-kitten/components'
import ViewData from '../../components/componentPurchase/ViewData/ViewData'
import ViewPayment from '../../components/componentPurchase/ViewPayment/ViewPayment'
import ViewBotton from '../../components/componentPurchase/ViewBotton/ViewBotton'
import PopUp from '../../components/componentPurchase/PopUp/PopUp'
import { ControlInputStream } from '../../Utils/check'

function CheckCarello ({ navigation }) {
  const [status, setStatus] = React.useState(false)

  function ComponentsCarello () {
    function GoBackAction () {
      navigation.goBack()
    }
    return (
      <View>
        <TitoloCarrello name='Carrello' style={StyleMod.modTitolo} action={() => GoBackAction()} />
        <ScrollView>
          <CartaCarrello setStatus={(condizione) => setStatus(condizione)} />
          <Riepilogo onPressGoBack={() => GoBackAction()} />
        </ScrollView>
      </View>
    )
  }

  function PagamentoCarello () {
    const elencoTitoli = [
      'Italy',
      'Germany',
      'USA',
      'England',
      'Poland',
      'Spain',
      'Portugal',
      'France'
    ]
    const [address, setAddress] = React.useState('')
    const [province, setProvince] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [payment, setPayment] = React.useState(0)
    const [state, setState] = React.useState(null)
    const [popUp, setPopUp] = React.useState(false)
    function GoBackAction () {
      navigation.goBack()
    }
    return (
      <>
        <TitoloCarrello
          name='Dati Carta'
          action={() => GoBackAction()}
          style={StyleMod.modTitolo}
        />

        <ScrollView>
          <Layout level='3' style={styles.viewMain}>
            <ViewData
              elencoTitoli={elencoTitoli}
              address={address}
              setAddress={(nextValue) => setAddress(nextValue)}
              state={state}
              setState={(index) => setState(index)}
              value={elencoTitoli[state - 1]}
              country={country}
              setCountry={(nextValue) => setCountry(nextValue)}
              provincia={province}
              setProvincia={(nextValue) => setProvince(nextValue)}
            />

            <ViewPayment
              title='Pagamento'
              value={payment}
              setPayment={(index) => setPayment(index)}
            />

            <ViewBotton
              titleBotton='CONFERMA'
              onClick={() => ControlInputStream(setPopUp, address, state, province, country, payment)}
            />

          </Layout>
        </ScrollView>

        <PopUp
          visible={popUp}
          GoBack={() => GoBack()}
          setPopPup={setPopUp}
        />
      </>
    )
  }

  return (
    <>
      {status ? <ComponentsCarello /> : <PagamentoCarello />}
    </>
  )
}

export default CheckCarello
