import React from 'react'
import { SelectItem, Input, Text, Select } from '@ui-kitten/components'
import { View } from 'react-native'

import { styles } from './ViewData_style'

function ViewData (props) {
  function RenderOption (title) {
    return (
      <SelectItem title={title} />
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
        onChangeText={() => props.setAddress}
      />

      <Select
        selectedIndex={props.state}
        onSelect={() => props.setState}
        label='Stato'
        value={props.value}
        style={styles.testoTitolo}
      >

        {props.elencoTitoli.map(RenderOption)}

      </Select>

      <Input
        style={styles.testoTitolo}
        placeholder='Paese'
        label='Paese'
        value={props.country}
        onChangeText={() => props.setCountry}

      />

      <Input
        placeholder='Provincia'
        style={{ ...styles.testoTitolo, paddingBottom: 20 }}
        label='Provincia'
        value={props.provincia}
        onChangeText={() => props.setProvincia}
      />
    </View>
  )
}

export default ViewData
