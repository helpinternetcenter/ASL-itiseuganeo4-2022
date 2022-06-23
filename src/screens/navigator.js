import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './login/login'
  
  const LoginNavigationStack = createNativeStackNavigator()

  export const LoginScreen = {
    id: 'LOGIN',
  }
  
  const LoginRoot = () => (
    <LoginNavigationStack.Navigator screenOptions={{ headerShown: false }}>
    <LoginNavigationStack.Screen name={LoginScreen.id} component={Login} />
    </LoginNavigationStack.Navigator>
  )
  
  const Navigator = () => {
    return (
      <NavigationContainer>
        <LoginRoot />
      </NavigationContainer>
    )
  }
  
  export default Navigator
