import * as React from 'react'
import { View } from 'react-native'
import { Text, Button, Icon } from '@ui-kitten/components'
import Description from '../../components/ProdottoScreen/description/description'
import dati from '../../api/specificheProdotti.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

function PlusIcon (props) {
  return (
    <Icon {...props} name='plus-circle-outline' />
  )
}

function MinusIcon (props) {
  return (
    <Icon {...props} name='minus-circle-outline' />
  )
}

function InformationLab (props) {
  const { container, testoTitolo, description } = props.style

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <View style={container}>
        <Text style={testoTitolo}> Sedia Giardino </Text>
        <View style={{ flexDirection: 'row', marginLeft: '5%' }}>
          <Text category='h2' style={{ fontWeight: 'normal', color: '#6bc1d6', flex: 2 }}>
            {dati.data[0].prezzo}
          </Text>
          <View style={{ flexDirection: 'row', marginRight: '10%' }}>
            <Button style={{ margin: '5%', borderRadius: 40 }} accessoryLeft={PlusIcon} />
            <Button style={{ margin: '5%', borderRadius: 40 }} accessoryLeft={MinusIcon} />
          </View>
        </View>
        <Description styles={{
          description
        }}
        />
      </View>
    </>
  )
}

export default InformationLab
