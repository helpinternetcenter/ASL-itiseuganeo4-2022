import React from 'react'
import { SelectItem, Input, Text, Select } from '@ui-kitten/components'
import { View } from 'react-native'
import { styles } from './ViewData_style'

function ViewData (props) {
  function Falied () {
    return (
      <Text style={{ color: 'red', marginLeft: '5%', paddingBottom: '10%' }}>* Campi obbligatori</Text>
    )
  }

  function Success () {
    return (
      <Text style={{ color: 'green', marginLeft: '5%', paddingBottom: '10%' }}>* Campi compilati</Text>
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

      {props.address === '' || props.provincia === '' || props.country === '' || props.state === null
        ? <Falied />
        : <Success />}
    </View>
  )
}

export default ViewData
