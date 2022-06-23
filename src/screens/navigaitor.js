import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/login';
import Home from './home/home';
import Registrati from './registrati/Registrati';


  
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

  export const GOLOGINScreen = {
    id:'GOLOGIN'
  }

  

  
  const LoginRoot = () => (
    <LoginNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginNavigationStack.Screen name={LoginScreen.id} component={Login} />
      <LoginNavigationStack.Screen name={RegisterScreen.id} component={Registrati} />
      <LoginNavigationStack.Screen name={GOLOGINScreen.id} component={Login} />
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