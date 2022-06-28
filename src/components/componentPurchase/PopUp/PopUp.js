import React from 'react'
import { Modal, View, Text } from 'react-native'
import { Icon, Button } from '@ui-kitten/components'
import { styles } from './PopUp_style'

function CheckIcon (props) {
  return (
    <Icon {...props} style={{ width: 100, height: 100 }} name='checkmark' fill='green' />
  )
}

function BackIcon (props) {
  return (
    <Icon {...props} name='arrow-back' />
  )
}

function PopUp (props) {
  return (
    <Modal
      animationType='slide' transparent visible={props.visible} onRequestClose={() => {
        Alert.alert('Modal has been closed.')
        props.setPopUp(!props.visible)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          <Text style={styles.modalText}>Hai confermato l'acquisto</Text>
          <CheckIcon />
          <Button style={styles.button} onPress={props.GoBack} accessoryLeft={BackIcon}>Torna alla Home</Button>
        </View>
      </View>
    </Modal>
  )
}

export default PopUp
