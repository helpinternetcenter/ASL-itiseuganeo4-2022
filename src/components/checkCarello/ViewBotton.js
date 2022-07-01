import React from 'react'
import { View } from 'react-native'
import { Button } from '@ui-kitten/components'
import { styles } from './ViewBotton_style'

function ViewBotton (props) {
  function ControlInput (address, province, country, payment, state) {
    let value = true

    if (address === '' || province === '' || state === '' || country === '' || payment === null) {
      value = true
    } else {
      value = false
    }

    return (value)
  }

  return (
    <>
      <View style={{
        height: 5,
        width: '90%',
        backgroundColor: '#6bc1d6',
        borderWidth: 0,
        marginLeft: '5%',
        marginBottom: '5%',
        borderRadius: 50
      }}
      />

      <Button
        disabled={ControlInput(props.values.address, props.values.province, props.values.country, props.values.payment, props.values.state)}
        onPress={props.onClick}
        style={styles.button}
      >
        {props.titleBotton}
      </Button>
    </>
  )
}

export default ViewBotton
