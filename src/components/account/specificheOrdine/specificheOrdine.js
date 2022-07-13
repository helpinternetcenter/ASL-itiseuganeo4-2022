import * as React from 'react'
import { View, Image } from 'react-native'
import { Text } from '@ui-kitten/components'
import styles from './specificheOrdini_style'

function SpecificheOrdini (props) {
  const { image, title, subtitle, price, ore, data } = props
  return (
    <View style={styles.viewProdotto}>
      <Image source={{ uri: image }} style={styles.logo} />
      <Text category='h3' style={styles.testoTitolo}> {title} </Text>
      <Text category='p1' style={styles.testoSottotitolo}>{subtitle} </Text>
      <Text category='p1' style={styles.prezzo}>{price} </Text>
      <View style={styles.time}>
        <Text style={styles.labelTime}><Text category='s1'>comprato il  </Text>{data}</Text>
        <Text style={styles.labelTime}><Text category='s1'>alle ore  </Text>{ore}</Text>
      </View>
    </View>
  )
}

export default SpecificheOrdini
