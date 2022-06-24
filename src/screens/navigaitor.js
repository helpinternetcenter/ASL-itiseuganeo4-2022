import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/login';
import Home from './home/home';
import Registrati from './registrati/Registrati';
import Check from '../Check/check';


  
  const LoginNavigationStack = createNativeStackNavigator()

  export const LoginScreen = {
    id: 'LOGIN'
  }

  export const HomeScreen = {
    id: 'HOME'
  }

  export const RegisterScreen = {
    id: 'SCREEN'
    
  }

  export const CheckScreen = {

    id: 'CHECK'
  }

  export const GOLOGINScreen = {
    id:'GOLOGIN'
  }



  
  // <LoginNavigationStack.Screen name={LEAVELOGINScreen.id} component={Login} />
  
  const LoginRoot = () => (
    <LoginNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginNavigationStack.Screen name={LoginScreen.id} component={Login} />
      <LoginNavigationStack.Screen name={CheckScreen.id} component={Check} />
      <LoginNavigationStack.Screen name={GOLOGINScreen.id} component={Registrati} />
      <LoginNavigationStack.Screen name={HomeScreen.id} component={Home} />
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