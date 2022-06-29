import React, { useState } from 'react'
import { ScrollView, View, Alert, Modal, StyleSheet } from 'react-native'
import { Button, Text, Layout, Input, Select, SelectItem, RadioGroup, Radio, Divider, IndexPath, Icon } from '@ui-kitten/components'
import TitleCarrello from './titoloCarrello'
import styles from './pagamentoCarrelloStyle'

function CheckIcon (props) {
  return (
    <Icon {...props} style={{ width: 100, height: 100 }} name='checkmark' fill='green' />
  )
}

function BottomRadioGroup (props) {
  return (
    <RadioGroup
      style={props.style}
      selectedIndex={props.value}
      onChange={(index) => (props.action(index))}
    >
      <Radio>PayPal</Radio>
      <Radio>Visa</Radio>
      <Radio>Mastercard</Radio>
    </RadioGroup>
  )
}

function PagamentoCarrello ({ navigation }) {
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
  const value = elencoTitoli[state - 1]
  const [popUp, setPopUp] = useState(false)

  function GoBackAction () {
    navigation.goBack()
  }

  function RenderOption (title, key) {
    return (
      <SelectItem title={title} key={key} />

    )
  }

  function ControlInputStream () {
    if (address === '' || province === '' || state === '' || country === '' || payment == null) {
      setPopUp(false)
    } else {
      setPopUp(true)
    }
  }

  function GoBack () {
    setPopUp(!popUp)
    navigation.goBack()
  }

  function BackIcon (props) {
    return (
      <Icon {...props} name='arrow-back' />
    )
  }

  return (
    <>
      <TitleCarrello name='Dati Carta' action={() => GoBackAction()} style={StyleMod.modTitolo} />

      <ScrollView>
        <Layout level='3' style={styles.viewMain}>

          <View style={styles.viewProdotto}>
            <Text category='h3' style={styles.testoTitolo}> Dati Personali </Text>
            <View style={styles.viewMargin} />
            <Input
              placeholder='Indirizzo'
              label='Indirizzo'
              value={address}
              style={styles.testoTitolo}
              onChangeText={nextValue => setAddress(nextValue)}
            />

            <Select selectedIndex={state} onSelect={(index) => setState(index)} label='Stato' value={value} style={styles.testoTitolo}>
              {elencoTitoli.map((el, key) => RenderOption(el, key))}

            </Select>

            <Input
              style={styles.testoTitolo}
              placeholder='Paese'
              label='Paese'
              value={country}
              onChangeText={nextValue => setCountry(nextValue)}

            />

            <Input
              placeholder='Provincia'
              style={{ ...styles.testoTitolo, paddingBottom: 20 }}
              label='Provincia'
              value={province}
              onChangeText={nextValue => setProvince(nextValue)}
            />
          </View>

          <View style={{ ...styles.viewProdotto, marginTop: 20, marginBottom: 40 }}>
            <Text category='h3' style={styles.testoTitolo}> Pagamento </Text>
            <View style={styles.viewMargin} />
            <BottomRadioGroup action={setPayment} value={payment} style={styles.testoTitolo} />
          </View>

          <Divider style={{ color: 'black', backgroundColor: '#6bc1d6', marginBottom: 10 }} />
          <Button onPress={() => ControlInputStream()} style={{ appearance: 'ghost', marginLeft: '10%', marginRight: '10%', marginBottom: 50 }}>

            CONFERMA
          </Button>

        </Layout>
      </ScrollView>

      <Modal animationType='slide' transparent visible={popUp} onRequestClose={Alert}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>Dati confermati</Text>
            <CheckIcon />
            <Button style={styles.button} onPress={() => GoBack()} accessoryLeft={(props) => BackIcon(props)}>Vai al Carrello</Button>

          </View>
        </View>
      </Modal>

    </>

  )
}

const StyleMod = StyleSheet.create({
  modTitolo: {
    backgroundColor: '#6bc1d6',
    height: '4%',
    width: '100%'
  }

})
export default PagamentoCarrello
