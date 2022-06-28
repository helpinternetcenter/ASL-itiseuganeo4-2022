import React from 'react'
import { Card, Text, Button } from '@ui-kitten/components'
import { View } from 'react-native'
import dati from '../../api/specificheProdotti.json'

function Header (props) {
  return (
    <View {...props} style={{ paddingLeft: 15 }}>
      <Text category='h5'> Prezzo </Text>
    </View>
  )
}

function PriceDescription (props) {
  return (
    <Card status='info' header={Header} style={{ margin: 26, borderRadius: 10 }}>
      <Text category='h2' style={{ fontWeight: 'normal' }}>
        {dati.data[props.numeroRender].prezzo}
      </Text>
      <Button size='small' onPress={props.action}>
        Agg. Carrello
      </Button>

    </Card>
  )
}

export default PriceDescription
