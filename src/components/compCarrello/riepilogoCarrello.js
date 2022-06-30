import React, { useState } from 'react'
import { Text, Button, Icon } from '@ui-kitten/components'
import { StyleSheet, View, Modal, Alert } from 'react-native'
import inCarrello from '../../api/inCarrello.json'
import specificheProdotti from '../../api/specificheProdotti.json'

function CheckIcon (props) {
  return (
    <Icon {...props} style={{ width: 100, height: 100 }} name='checkmark' fill='green' />
  )
}

function Riepilogo ({
  onPressGoBack = () => {}
}) {
  const [popUp, setPopUp] = useState(false)

  function ControlInputStream () {
    setPopUp(true)
  }
  function GoBack () {
    setPopUp(!popUp)
    onPressGoBack()
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
        {inCarrello.data[0].idOggetti.map((el, key) =>
          (<Text key={key} style={styles.riepProdotti} category='p1'>{specificheProdotti.data[el].nomeMobile} : {specificheProdotti.data[el].prezzo}</Text>)
        )}
        <View style={styles.viewMargin2} />

        <Button style={styles.button} onPress={() => ControlInputStream()}>Compra</Button>

        <Modal animationType='slide' transparent visible={popUp} onRequestClose={Alert}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <Text style={styles.modalText}>Hai confermato l'acquisto</Text>
              <CheckIcon />
              <Button style={styles.popButton} onPress={() => GoBack()} accessoryLeft={(props) => BackIcon(props)}>FINITO</Button>

            </View>
          </View>
        </Modal>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  viewMain: {
    flex: 1
  },
  titoloRiepilogo: {
    marginLeft: '5%',
    marginTop: '5%'
  },
  button: {
    width: '60%',
    marginLeft: '35%',
    marginTop: '5%',
    marginBottom: '40%'

  },
  riepProdotti: {
    fontSize: 25,
    marginLeft: '5%',
    marginBottom: 1,
    paddingBottom: 15

  },
  viewMargin: {
    height: '1%',
    width: '60%',
    backgroundColor: '#6bc1d6',
    borderWidth: 0,
    marginTop: '3%',
    marginLeft: '5%',
    marginBottom: '2%',
    borderRadius: 50
  },
  viewMargin2: {
    height: '1%',
    width: '90%',
    backgroundColor: '#a6a6a6',
    borderWidth: 0,
    marginLeft: '5%',
    borderRadius: 50,
    marginBottom: '3%'
  },

  viewMargin3: {
    height: '1%',
    width: '1%',
    backgroundColor: '#a6a6a6',
    borderWidth: 0,
    marginLeft: '5%',
    borderRadius: 50,
    marginBottom: '10%'
  },

  riepilogo: {
    width: '94%',
    backgroundColor: '#dedede',
    borderWidth: 0,
    // marginTop: '50%',
    marginLeft: '3%',
    borderRadius: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  popButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})

export default Riepilogo
