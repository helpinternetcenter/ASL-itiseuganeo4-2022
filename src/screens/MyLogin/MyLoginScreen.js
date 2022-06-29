import { IconRegistry, Button, Text } from '@ui-kitten/components'
import React from 'react'
import { ScrollView, View } from 'react-native'
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

function MyLoginScreen ({ navigation }) {
  function GoToProdotto () {
    navigation.navigate('Prodotto')
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ScrollView>
        <TitleProdotto name='MyLoginScreen' />
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >

          <Text>My LoginScreen</Text>
          <Button onPress={GoToProdotto}>Go to Prodotto</Button>
        </View>
      </ScrollView>
    </>
  )
}

export default MyLoginScreen
