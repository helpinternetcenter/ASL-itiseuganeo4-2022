import React from 'react'
import { Text, Layout, Card } from '@ui-kitten/components'
import { View } from 'react-native'
import dati from '../../api/specificheProdotti.json'

function Header (props) {
  return (
    <View style={{ paddingLeft: 15 }}>
      <Text category='h5'>Descrizione</Text>
    </View>
  )
}

function Description (props) {
  console.log(props.numeroRender)
  return (
    <>
      <Layout
        style={{
          paddingLeft: 20,
          paddingTop: 10
        }}
        level='3'
      >
        <Card
          header={Header}
          status='info'
          style={{
            margin: 10,
            marginRight: 30,
            borderRadius: 10
          }}
        >
          <Text category='p1'>Colore:   <Text category='p1' />{dati.data[props.numeroRender].colore}</Text>
          <Text category='p1'>Materiale:   <Text category='p1'>{dati.data[props.numeroRender].materiale}</Text></Text>
          <Text category='p1'>Dimensione Articolo:   <Text category='p1'>{dati.data[props.numeroRender].dimensioni}</Text></Text>
          <Text category='p1'>Peso massimo racomandato:   <Text category='p1'>{dati.data[props.numeroRender].pesoMasimo}</Text></Text>
          <Text category='p1'>Peso articolo:   <Text category='p1'>{dati.data[props.numeroRender].pesoArticolo}</Text></Text>
        </Card>
      </Layout>
    </>
  )
}

export default Description
