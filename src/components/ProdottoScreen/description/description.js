import * as React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import dati from '../../../api/specificheProdotti.json'

function Description (props) {
  const { description } = props.styles
  return (
    <View style={description}>
      <Text category='h6'>Descrizione</Text>
      <View>
        <Text category='p1'>Colore:   <Text category='p1' />{dati.data[0].colore}</Text>
        <Text category='p1'>Materiale:   <Text category='p1'>{dati.data[0].materiale}</Text></Text>
        <Text category='p1'>Dimensione Articolo:   <Text category='p1'>{dati.data[0].dimensioni}</Text></Text>
        <Text category='p1'>Peso massimo racomandato:   <Text category='p1'>{dati.data[0].pesoMasimo}</Text></Text>
        <Text category='p1'>Peso articolo:   <Text category='p1'>{dati.data[0].pesoArticolo}</Text></Text>
      </View>
    </View>
  )
}

export default Description
