import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Prodotto/Prodotto'
  
  const LoginNavigationStack = createNativeStackNavigator()

  export const ProdottoScreen = {
    id: 'LOGIN',
  }
  
  const ProdottoRoot = () => (
    <LoginNavigationStack.Navigator screenOptions={{ headerShown: false }}>
    <LoginNavigationStack.Screen name={LoginScreen.id} component={Login} />
    </LoginNavigationStack.Navigator>
  )
  
  const Navigator = () => {
    return (
      <NavigationContainer>
        <ProdottoRoot />
      </NavigationContainer>
    )
  }
  
  export default Navigator
