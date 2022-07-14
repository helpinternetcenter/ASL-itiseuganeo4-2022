import * as React from 'react'
import { View } from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import styles from './PriceDescription_style'

function PriceDescription (props) {
  const [buttonPlus, setStatebuttonPlus] = React.useState(true)
  const [buttonMinus, setStateButtonMinus] = React.useState(true)

  return (
    <View style={styles.container}>
      <Text category='h2' style={styles.price}>
        {props.price}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={
            buttonMinus
              ? { ...styles.buttonMinus, backgroundColor: 'white' }
              : { ...styles.buttonMinus, backgroundColor: 'black' }
          }
          accessoryLeft={
            buttonMinus
              ? <props.iconButtonMinus color='black' />
              : <props.iconButtonMinus color='white' />
          }
          onPress={() => {
            props.setActionMinusButton()
            setStateButtonMinus(false)
            setTimeout(() => { setStateButtonMinus(true) }, 100)
          }}
        />
        <Text style={styles.text}>{props.value}</Text>
        <Button
          style={buttonPlus
            ? { ...styles.buttonPlus, backgroundColor: 'white' }
            : { ...styles.buttonPlus, backgroundColor: 'black' }}
          accessoryLeft={
            buttonPlus
              ? <props.iconButtonPlus color='black' />
              : <props.iconButtonPlus color='white' />
          }
          onPress={() => {
            props.setActionPlusButton()
            setStatebuttonPlus(false)
            setTimeout(() => { setStatebuttonPlus(true) }, 100)
          }}
        />
      </View>
    </View>
  )
}

export default PriceDescription
