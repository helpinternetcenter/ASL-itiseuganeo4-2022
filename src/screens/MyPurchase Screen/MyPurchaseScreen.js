import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Layout } from '@ui-kitten/components'
import TitleCarrello from '../../components/compCarrello/titoloCarrello'
import styles from './MyPurchaseScreen_style'
import ViewData from '../../components/componentPurchase/ViewData/ViewData'
import ViewPayment from '../../components/componentPurchase/ViewPayment/ViewPayment'
import ViewBotton from '../../components/componentPurchase/ViewBotton/ViewBotton'
import { ControlInputStream } from '../../Utils/check'
import PopUp from '../../components/componentPurchase/PopUp/PopUp'

function MyPurchaseScreen ({ navigation }) {
  const elencoTitoli = [
    'Italy',
    'Germany',
    'USA',
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
  const [popUp, setPopUp] = useState(false)

  function GoBackAction () {
    navigation.goBack()
  }

  function GoBack () {
    setPopUp(!popUp)
    navigation.goBack()
    navigation.goBack()
  }

  return (
    <>
      <TitleCarrello
        name='MyPurchaseScreen'
        action={() => GoBackAction()}
        style={styles.TitleCarrello}
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
export default MyPurchaseScreen
