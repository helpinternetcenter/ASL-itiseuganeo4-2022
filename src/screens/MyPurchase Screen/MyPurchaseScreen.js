import React, { useState } from 'react'
import { ScrollView, View, Alert, Modal, StyleSheet, Pressable } from 'react-native'
import { Layout, IndexPath, Icon } from '@ui-kitten/components'
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto'
import styles from './MyPurchaseScreen_style'
import { PurchaseScreen } from '../navigaitor'
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
  const [state, setState] = React.useState(new IndexPath(0))
  const [popUp, setPopUp] = useState(false)

  function GoBackAction () {
    navigation.goBack()
  }

  function GoToPurchaseScreen () {
    navigation.navigate(PurchaseScreen.id)
  }

  function GoBack () {
    setPopUp(!popUp)
    navigation.goBack()
    navigation.goBack()
  }

  return (
    <>
      <TitleProdotto
        name='MyPurchaseScreen'
        action={GoBackAction}
        action2={GoToPurchaseScreen}
      />

      <ScrollView>
        <Layout level='3' style={styles.viewMain}>
          <ViewData
            elencoTitoli={elencoTitoli}
            address={address}
            setAddress={(nextValue => setAddress(nextValue))}
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
        GoBack={GoBack}
        setPopPup={setPopUp}
      />

    </>

  )
}

export default MyPurchaseScreen
