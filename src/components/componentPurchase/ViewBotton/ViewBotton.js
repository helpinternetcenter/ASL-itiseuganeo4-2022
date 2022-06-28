import React from 'react'
import { View } from 'react-native'
import { Button } from '@ui-kitten/components'
import { styles } from './ViewBotton_style'

function ViewBotton (props) {
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
        onPress={props.onClick}
        style={styles.button}
      >
        {props.titleBotton}
      </Button>
    </>
  )
}

export default ViewBotton
