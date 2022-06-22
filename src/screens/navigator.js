import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const LoginNavigationStack = createNativeStackNavigator()

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



