import * as React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'

function Description (props) {
  const { description } = props
  return (
    <View style={props.styles}>
      <Text category='h6'>Descrizione</Text>
      <View>
        <Text category='p1'>Colore:   <Text category='p1' />{description.colore}</Text>
        <Text category='p1'>Materiale:   <Text category='p1'>{description.materiale}</Text></Text>
        <Text category='p1'>Dimensione Articolo:   <Text category='p1'>{description.dimensione}</Text></Text>
        <Text category='p1'>Peso massimo racomandato:   <Text category='p1'>{description.pesoMassimo}</Text></Text>
        <Text category='p1'>Peso articolo:   <Text category='p1'>{description.pesoArticolo}</Text></Text>
      </View>
    </View>
  )
}

export default Description
