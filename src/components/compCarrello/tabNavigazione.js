import * as React from 'react'
import { Button, Icon } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'

const Home = (props) => (
  <Icon {...props} name='home-outline' />
)

const Person = (props) => (
  <Icon {...props} name='person-outline' />
)

const CarrelTruck = (props) => (
  <Icon {...props} name='shopping-cart-outline' />
)
function Titolo (props) {
  return (
    <View style={[styles.viewTitolo, props.style]}>
      <View style={{ flexDirection: 'row', flex: 6 }}>
        <Button
          style={{ flex: 1 }}
          appearance='ghost'
          status='info'
          accessoryLeft={Home}
          onPress={() => props.cambioScheda()}
        />
        <Button style={{ flex: 1 }} appearance='ghost' status='info' accessoryLeft={Person} />
        <Button
          style={{ flex: 1 }}
          appearance='ghost' status='info'
          accessoryLeft={CarrelTruck}
          onPress={() => props.cambioScheda()}
        />
      </View>
      <View style={[styles.viewPag, props.margine]} />
    </View>
  )
}

const styles = StyleSheet.create({

  viewTitolo: {
    height: '100%',
    width: '100%',
    backgroundColor: '#e6e6e6',
    borderWidth: 0,
    justifyContent: 'center'

  },

  viewPag: {
    flex: 0.7,
    backgroundColor: '#6bc1d6',
    width: '20%',
    borderRadius: 30,
    marginBottom: '2%'
  },

  bottone1: {
    position: 'absolute',
    width: '50%'

  },

  bottone2: {
    position: 'absolute',
    marginLeft: '50%',
    width: '50%'

  },

  testoTitolo: {
    marginTop: '5%',
    marginLeft: '5%'
  },

  testoSottotitolo: {
    marginLeft: '5%'
  }
})
export default Titolo
