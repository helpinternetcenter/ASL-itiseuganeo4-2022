import React from 'react'
import { View } from 'react-native'
import { Radio, RadioGroup, Text } from '@ui-kitten/components'
import { styles } from './ViewPayment_style'

function BottomRadioGroup (props) {
  return (
    <RadioGroup
      style={props.style}
      selectedIndex={props.value}
      onChange={(index) => (props.action(index))}
    >
      <Radio>PostePay</Radio>
      <Radio>PayPal</Radio>
      <Radio>Visa</Radio>
      <Radio>Mastercard</Radio>
    </RadioGroup>
  )
}

function ViewPayment (props) {
  return (
    <View style={styles.viewPayment}>
      <Text category='h3' style={styles.testoTitolo}> {props.title} </Text>
      <View style={styles.viewMargin} />
      <BottomRadioGroup action={props.setPayment} value={props.value} style={styles.testoTitolo} />
    </View>
  )
}

export default ViewPayment
