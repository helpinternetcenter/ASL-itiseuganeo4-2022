import * as React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import styles from './ViewOrdini_style'
import specificheProdotti from '../../../api/specificheProdotti.json'
import SpecificheOrdini from '../../account/specificheOrdine/specificheOrdine'

function ViewOrdini (props) {
  const data = []
  props.value.forEach((element) => {
    element.acquisti.forEach((acquisto) => {
      specificheProdotti.data.forEach((item) => {
        if (acquisto.idMobile === item.idMobile) {
          data.push({ ...item, data: element.data, ore: element.ore })
        }
      })
    })
  })
  return (
    <View style={styles.container}>
      <Text style={styles.testoTitolo}> Ordini </Text>
      {data.map((element, Key) => {
        console.log(element)
        return (
          <SpecificheOrdini
            Key={Key}
            image={element.linkImmagini[0]}
            title={element.nomeMobile}
            subtitle={element.descrizioneMobile}
            price={element.prezzo}
            ore={element.ore}
            data={element.data}
          />
        )
      })}
    </View>
  )
}

export default ViewOrdini
