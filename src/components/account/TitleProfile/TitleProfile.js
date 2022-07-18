import * as React from 'react'
import { Text } from '@ui-kitten/components'
import { View } from 'react-native'

function  TitleProfile (props) {
  const { viewTitolo, testTitolo } = props.styles
  return (
    <View style={viewTitolo}>
      <Text category='h1' style={testTitolo}>{props.name}</Text>
    </View>
  )
}

export default TitleProfile
