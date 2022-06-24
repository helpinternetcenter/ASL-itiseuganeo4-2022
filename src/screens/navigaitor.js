import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Prodotto from './Prodotto/Prodotto'
import MyLoginScreen from './Login/MyLoginScreen'
  
  const NavigationStack = createNativeStackNavigator()

  export const IdScreens = {
    idProdotto: 'Prodotto',
    idLogin : 'Login' ,
  }
  
  const ProdottoRoot = () => (
    <NavigationStack.Navigator
        screenOptions={{ headerShown: false }}>
      <NavigationStack.Screen name = {IdScreens.idLogin} component = {MyLoginScreen}></NavigationStack.Screen>
      <NavigationStack.Screen name= {IdScreens.idProdotto} component={Prodotto}/>

    </NavigationStack.Navigator>
  )
  
  const Navigator = () => {
    return (
      <NavigationContainer>
        <ProdottoRoot />
      </NavigationContainer>
    )
  }
  
  export default Navigator;
