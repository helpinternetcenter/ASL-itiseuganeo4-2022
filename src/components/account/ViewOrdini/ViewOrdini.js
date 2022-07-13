import * as React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import styles from './ViewOrdini_style'
import specificheProdotti from '../../../api/specificheProdotti.json'
import SpecificheOrdini from '../../account/specificheOrdine/specificheOrdine'

function ViewOrdini (props) {
  const data = []
  props.value[0].acquisti.map((acquisto) => {
    specificheProdotti.data.map((item) => {
      if (acquisto.idMobile === item.idMobile) {
        data.push(item)
      }
    })
  })
  return (
    <View style={styles.container}>
      <Text style={styles.testoTitolo}> Ordini </Text>
      {data.map((element, Key) => {
        return (
          <SpecificheOrdini
            Key={Key}
            image={element.linkImmagini[0]}
            title={element.nomeMobile}
            subtitle={element.descrizioneMobile}
            price={element.prezzo}
          />
        )
      })}
    </View>
  )
}

export default ViewOrdini
