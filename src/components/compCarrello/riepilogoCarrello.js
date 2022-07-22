import React, { useState, useContext } from 'react'
import { Text, Button, Icon } from '@ui-kitten/components'
import { View, Modal, Alert, Image } from 'react-native'
import { styles } from './riepilogoCarrelloStyle'
// import inCarrello from '../../api/inCarrello.json'
import specificheProdotti from '../../api/specificheProdotti.json'
import { carrelloUtente } from '../../api/'
import { Context } from '../../context/AuthContext'

function CheckIcon (props) {
  return (
    <Icon {...props} style={{ width: 100, height: 100 }} name='checkmark' fill='green' />
  )
}

function Riepilogo (props) {
  const [popUp, setPopUp] = useState(false)
  const [carrelloOgg, setCarrello] = useState([])
  const { state } = useContext(Context)

  React.useEffect(() => {
    carrelloUtente(state._id).then((carrello) => {
      setCarrello(carrello)
    })
  }, [])

  function ControlInputStream () {
    setPopUp(true)
  }
  function GoBack () {
    setPopUp(!popUp)
    props.onPressGoBack()
  }

  function BackIcon (props) {
    return (
      <Icon {...props} name='arrow-back' />
    )
  }
  return (
    <View style={styles.viewMain}>
      <View style={styles.riepilogo}>
        <Text category='h3' style={styles.titoloRiepilogo}>Riepilogo</Text>
        <View style={styles.viewMargin} />
        {console.log('-------------------------')}
        {console.log('CARRELLO = ', carrelloOgg)}
        {console.log('-------------------------')}
        {carrelloOgg.map((el, key) =>
          (
            <View key={key}>
              <Text
                style={styles.riepProdotti} category='p1' label='direction'
              >{specificheProdotti.data[el].nomeMobile}
              </Text>

              <Text
                style={styles.riepProdottiPrezzo} category='h1' label='direction'
              >{specificheProdotti.data[el].prezzo}
              </Text>

              <Text
                style={styles.riepProdottiDescrizione} category='p2' label='direction'
              >{specificheProdotti.data[el].descrizioneMobile}
              </Text>

              <Image source={{ uri: specificheProdotti.data[el].linkImmagini[0] }} style={styles.logo} />
              <View style={styles.viewMargin2} />
            </View>
          )
        )}
        <View style={styles.viewMargin2} />

        <Button style={styles.button} onPress={() => ControlInputStream()} disabled={!props.status}>Compra</Button>

        <Modal animationType='slide' transparent visible={popUp} onRequestClose={Alert}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <Text style={styles.modalText}>Hai confermato l'acquisto </Text>
              <CheckIcon />
              <Button style={styles.popButton} onPress={() => GoBack()} accessoryLeft={(props) => BackIcon(props)}>FINITO</Button>

            </View>
          </View>
        </Modal>

      </View>
    </View>
  )
}

export default Riepilogo
