import React from 'react'
import CartaCarrello from '../../components/compCarrello/cartaCarrello'
import Riepilogo from '../../components/compCarrello/riepilogoCarrello'
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import { ScrollView, View } from 'react-native'
import { Layout } from '@ui-kitten/components'
import ViewData from '../../components/componentPurchase/ViewData/ViewData'
import ViewPayment from '../../components/componentPurchase/ViewPayment/ViewPayment'
import ViewBotton from '../../components/componentPurchase/ViewBotton/ViewBotton'
import PopUp from '../../components/checkCarello/PopUp'
import { ControlInputStream } from '../../Utils/check'
import { styles } from '../checkCarello/checkCarello_style'

function ComponentsCarello (props) {
  const values = props.values
  return (
    <View>
      <TitoloCarrello name='Carrello' style={styles.titleCarello} action={() => props.GoBackAction()} />
      <ScrollView>
        <CartaCarrello setStatus={(bol) => props.setStatus(bol)} status={props.status} values={values} settingMethodos={props.settingMethods} />
        <Riepilogo onPressGoBack={() => props.GoBackAction()} status={props.status} />
      </ScrollView>
    </View>
  )
}

function PagamentoCarello (props) {
  const settingMethodos = props.settingMethods
  const values = props.values
  return (
    <>
      <TitoloCarrello
        name='Dati Carta'
        action={() => props.GoBackAction()}
        style={styles.titleCarello}
      />

      <ScrollView>
        <Layout level='3' style={styles.viewMain}>
          <ViewData
            elencoTitoli={values.elencoTitoli}
            address={values.address}
            setAddress={(nextValue) => settingMethodos.setAddress(nextValue)}
            state={values.state}
            setState={(index) => settingMethodos.setState(index)}
            value={values.stateValue}
            country={values.country}
            setCountry={(nextValue) => settingMethodos.setCountry(nextValue)}
            provincia={values.province}
            setProvincia={(nextValue) => settingMethodos.setProvince(nextValue)}
          />

          <ViewPayment
            title='Pagamento'
            elencoPagamento={values.elencoPagamento}
            value={values.payment}
            setPayment={(index) => settingMethodos.setPayment(index)}
          />

          <ViewBotton
            titleBotton='CONFERMA'
            onClick={() => ControlInputStream(settingMethodos.setPopUp, values.address, values.state, values.province, values.country, values.payment)}
          />

        </Layout>
      </ScrollView>

      <PopUp
        visible={values.popUp}
        nameBotton='Va al carello'
        text='Dati Confermati'
        setStatus={(bol) => {
          props.setStatus(bol)
          settingMethodos.setPopUp(!values.popUp)
        }}
      />
    </>
  )
}

function CheckCarello ({ navigation }) {
  const [status, setStatus] = React.useState(false)
  const [address, setAddress] = React.useState('')
  const [province, setProvince] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [payment, setPayment] = React.useState(0)
  const [state, setState] = React.useState(null)
  const [popUp, setPopUp] = React.useState(false)

  const settingMethods = {
    setAddress: (text) => setAddress(text),
    setProvince: (text) => setProvince(text),
    setCountry: (text) => setCountry(text),
    setPayment: (index) => setPayment(index),
    setState: (index) => setState(index),
    setPopUp: (bol) => setPopUp(bol)
  }

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
  const elencoPagamento = [
    'PayPal',
    'Visa',
    'Mastercard'
  ]

  const values = {
    address: address,
    province: province,
    country: country,
    payment: payment,
    state: state,
    popUp: popUp,
    stateValue: elencoTitoli[state - 1],
    statePagamento: elencoPagamento[payment],
    elencoTitoli: elencoTitoli,
    elencoPagamento: elencoPagamento

  }

  function GoBackAction () {
    navigation.goBack()
  }

  return (
    <>
      {status
        ? <ComponentsCarello GoBackAction={() => GoBackAction()} setStatus={(bol) => setStatus(bol)} status={status} values={values} settingMethods={settingMethods} />
        : <PagamentoCarello GoBackAction={() => GoBackAction()} setStatus={(bol) => setStatus(bol)} status={status} settingMethods={settingMethods} values={values} />}
    </>
  )
}

export default CheckCarello
