import * as React from 'react'
import { View } from 'react-native'
import { Select, Input, SelectItem, Text } from '@ui-kitten/components'
import { styles } from './ViewData_style'

function ViewData (props) {
  return (
    <View style={styles.container}>
      <Text category='h3' style={styles.testoTitolo}> Dati Personali </Text>

      <Input
        placeholder='Indirizzo'
        label='Indirizzo'
        value={props.address}
        style={styles.input}
        onChangeText={(index) => {
          props.setAddress(index)
        }}
      />

      <Select
        selectedIndex={props.state}
        label='Stato'
        value={props.value}
        style={styles.testoTitolo}
        onSelect={(index) => {
          props.setState(index)
        }}
      >
        {props.elencoTitoli.map((el, key) => {
          return (
            <SelectItem key={key} title={el} />
          )
        }
        )}
      </Select>

      <Input
        style={styles.input}
        placeholder='Paese'
        label='Paese'
        value={props.country}
        onChangeText={(index) => {
          props.setCountry(index)
        }}
      />

      <Input
        placeholder='Provincia'
        style={{ ...styles.input, paddingBottom: '4%' }}
        label='Provincia'
        value={props.provincia}
        onChangeText={(index) => {
          props.setProvincia(index)
        }}
      />

    </View>
  )
}

export default ViewData
