import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Prodotto from './Prodotto/Prodotto'
  
  const LoginNavigationStack = createNativeStackNavigator()

  export const ProdottoScreen = {
    idProdotto: 'Prodotto',
  }
  
  const ProdottoRoot = () => (
    <LoginNavigationStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#6BC1D6',
          
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        headerTintColor: '#fff',
      }}>
      <LoginNavigationStack.Screen name= {ProdottoScreen.idProdotto} component={Prodotto} option = {{title : 'Prodotto' , headerTransparent : false, }}/>
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
