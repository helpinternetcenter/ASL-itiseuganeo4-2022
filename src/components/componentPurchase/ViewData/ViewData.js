import React from 'react'
import { SelectItem, Input, Text, Select } from '@ui-kitten/components'
import { View } from 'react-native'
import { styles } from './ViewData_style'

function ViewData (props) {
  const [dangerStateProvincia, setDangerStateProvincia] = React.useState('danger')
  const [dangerStatePaese, setDangerStatePaese] = React.useState('danger')
  const [dangerStateIndirizzo, setDangerStateIndirizzo] = React.useState('danger')
  const [dangerStateStato, setDangerStateStato] = React.useState('danger')

  function Falied () {
    console.log('fallito')
    return (
      <Text style={{ color: 'red', marginLeft: '5%', paddingBottom: '10%' }}>* Campi obbligatori</Text>
    )
  }

  function Success () {
    console.log('successo')
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
        status={dangerStateIndirizzo}
        label='Indirizzo'
        value={props.address}
        style={styles.input}
        onChangeText={(index) => {
          index === '' ? setDangerStateIndirizzo('danger') : setDangerStateIndirizzo('success')
          props.setAddress(index)
        }}
      />

      <Select
        selectedIndex={props.state}
        label='Stato'
        status={dangerStateStato}
        value={props.value}
        style={styles.testoTitolo}
        onSelect={(index) => {
          index === null ? setDangerStateStato('danger') : setDangerStateStato('success')
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
        status={dangerStatePaese}
        label='Paese'
        value={props.country}
        onChangeText={(index) => {
          index === '' ? setDangerStatePaese('danger') : setDangerStatePaese('success')
          props.setCountry(index)
        }}
      />

      <Input
        placeholder='Provincia'
        status={dangerStateProvincia}
        style={{ ...styles.input, paddingBottom: '4%' }}
        label='Provincia'
        value={props.provincia}
        onChangeText={(index) => {
          index === '' ? setDangerStateProvincia('danger') : setDangerStateProvincia('success')
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
