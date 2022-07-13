import React from 'react'
import { Text, Layout, Card } from '@ui-kitten/components'
import { View } from 'react-native'
import dati from '../../api/specificheProdotti.json'
import styles from './description_style'

function Header(props) {
  return (
    <View style={{ paddingLeft: 15 }}>
      <Text category='h5'>Descrizione</Text>
    </View>
  )
}

function Description(props) {
  console.log(props.numeroRender)
  return (
    <>
      <Card
        header={Header}
        style={
          styles.card
        }
      >
        <Text category='p1'>Colore:   <Text category='p1' />{dati.data[props.numeroRender].colore}</Text>
        <Text category='p1'>Materiale:   <Text category='p1'>{dati.data[props.numeroRender].materiale}</Text></Text>
        <Text category='p1'>Dimensione Articolo:   <Text category='p1'>{dati.data[props.numeroRender].dimensioni}</Text></Text>
        <Text category='p1'>Peso massimo racomandato:   <Text category='p1'>{dati.data[props.numeroRender].pesoMasimo}</Text></Text>
        <Text category='p1'>Peso articolo:   <Text category='p1'>{dati.data[props.numeroRender].pesoArticolo}</Text></Text>
      </Card>
    </>
  )
}
export default Description
