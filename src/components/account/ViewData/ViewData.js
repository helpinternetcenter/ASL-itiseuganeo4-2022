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

      <Text style={styles.testoSottotitolo}> Nome </Text>
      <Label style={styles.input} text={value.nome} />

      <Text style={styles.testoSottotitolo}> Cognome </Text>
      <Label style={styles.input} text={value.cognome} />

      <Text style={styles.testoSottotitolo}> Username </Text>
      <Label style={styles.input} text={value.username} />

    </View>
  )
}

export default ViewData
