import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Prodotto from './Prodotto/Prodotto'
import MyLoginScreen from './MyLogin/MyLoginScreen'
import MyPurchaseScreen from './MyPurchase Screen/MyPurchaseScreen'
  
  const NavigationStack = createNativeStackNavigator()

  export const IdScreens = {
    idProdotto: 'Prodotto',
    idLogin : 'Login' ,
    idPurchaseScreen : 'PurchaseScreen'
  }
  
  const ProdottoRoot = () => (
    <NavigationStack.Navigator
        screenOptions={{ headerShown: false }}>
      <NavigationStack.Screen name = {IdScreens.idLogin} component = {MyLoginScreen}></NavigationStack.Screen>
      <NavigationStack.Screen name= {IdScreens.idProdotto} component={Prodotto}/>
      <NavigationStack.Screen name= {IdScreens.idPurchaseScreen} component={MyPurchaseScreen}/>
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
