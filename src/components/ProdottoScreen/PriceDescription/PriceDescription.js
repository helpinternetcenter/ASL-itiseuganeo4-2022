import * as React from 'react'
import { View } from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import styles from './PriceDescription_style'

function PriceDescription (props) {
  return (
    <View style={styles.container}>
      <Text category='h2' style={styles.price}>
        {props.price}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonPlus}
          accessoryLeft={props.iconButtonPlus}
          onPress={() => { props.setActionPlusButton() }}
        />
        <Text style={styles.text}>{props.value}</Text>
        <Button
          style={styles.buttonMinus}
          accessoryLeft={props.iconButtonMinus}
          onPress={() => { props.setActionMinusButton() }}
        />
      </View>
    </View>
  )
}

export default PriceDescription
