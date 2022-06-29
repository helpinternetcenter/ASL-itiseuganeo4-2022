import React from 'react'
import { SelectItem, Input, Text, Select } from '@ui-kitten/components'
import { View } from 'react-native'
import { styles } from './ViewData_style'

function ViewData (props) {
  function RenderOption (el, key) {
    return (
      <SelectItem key={key} title={el} />
    )
  }

  return (
    <View style={styles.viewProdotto}>

      <Text category='h3' style={styles.testoTitolo}> Dati Personali </Text>

      <View style={styles.viewMargin} />

      <Input
        placeholder='Indirizzo'
        label='Indirizzo'
        value={props.address}
        style={styles.testoTitolo}
        onChangeText={(index) => props.setAddress(index)}
      />

      <Select
        selectedIndex={props.state}
        onSelect={(index) => props.setState(index)}
        label='Stato'
        value={props.value}
        style={styles.testoTitolo}
      >

        {props.elencoTitoli.map((el, key) => RenderOption(el, key))}

      </Select>

      <Input
        style={styles.testoTitolo}
        placeholder='Paese'
        label='Paese'
        value={props.country}
        onChangeText={(index) => props.setCountry(index)}

      />

      <Input
        placeholder='Provincia'
        style={{ ...styles.testoTitolo, paddingBottom: 20 }}
        label='Provincia'
        value={props.provincia}
        onChangeText={(index) => props.setProvincia(index)}
      />
    </View>
  )
}

export default ViewData
