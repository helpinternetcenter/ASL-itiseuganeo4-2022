import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Prodotto from './Prodotto/prodotto'
import Login from './login/login'
import Home from './home/home' 
  const LoginNavigationStack = createNativeStackNavigator()

  export const LoginScreen = {
    id: 'LOGIN'
  }
  export const HomeScreen = {
    id: 'HOME'
  }
  export const ProdottoScreen = {
    id: 'PRODOTTO'
  }

  const LoginRoot = () => (
    <LoginNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginNavigationStack.Screen name={LoginScreen.id} component={Login} />
      <LoginNavigationStack.Screen name={HomeScreen.id} component={Home} />
      <LoginNavigationStack.Screen name={ProdottoScreen.id} component={Prodotto} />
    </LoginNavigationStack.Navigator>
  )
  
  const Navigator = () => {
    return (
      <NavigationContainer>
        <LoginRoot />
      </NavigationContainer>
    )
  }
  
  export default Navigator;
