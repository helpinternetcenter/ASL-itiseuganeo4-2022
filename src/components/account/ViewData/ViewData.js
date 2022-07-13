import * as React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import { styles } from './ViewData_style'

function Label (props) {
  return (
    <Text style={props.style}> {props.text}</Text>
  )
}

function ViewData (props) {
  const value = props.value
  return (
    <View style={styles.container}>
      <Text style={styles.testoTitolo}> Dati Personali </Text>

      <Label style={styles.input} text={value.nome} />
      <Label style={styles.input} text={value.cognome} />
      <Label style={styles.input} text={value.username} />
      <Label style={{ ...styles.input, marginBottom: '20%' }} text={value.password} />

    </View>
  )
}

export default ViewData
