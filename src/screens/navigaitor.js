import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Prodotto from './Prodotto/Prodotto'
  
  const LoginNavigationStack = createNativeStackNavigator()

  export const ProdottoScreen = {
    idProdotto: 'Prodotto',
  }
  
  const ProdottoRoot = () => (
    <LoginNavigationStack.Navigator
        screenOptions={{ headerShown: false }}>
      <LoginNavigationStack.Screen name= {ProdottoScreen.idProdotto} component={Prodotto}/>
    </LoginNavigationStack.Navigator>
  )
  
  const Navigator = () => {
    return (
      <NavigationContainer>
        <ProdottoRoot />
      </NavigationContainer>
    )
  }
  
  export default Navigator;
