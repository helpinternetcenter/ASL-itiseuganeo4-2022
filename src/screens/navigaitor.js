import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Prodotto from './Prodotto/prodottoScreen'
import Login from './login/login'
import Home from './home/home'
import Registrati from './registrati/Registrati'
import MyPurchaseScreen from './MyPurchase Screen/MyPurchaseScreen'
import Carrello from './carrello/carrello'
import PagamentoCarrello from '../screens/PagamentoCarrello/pagamentoCarrello'
import RiepilogoCarrello from '../components/compCarrello/riepilogoCarrello'
import CheckCarello from '../screens/checkCarello/checkCarello'

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
export const PurchaseScreen = {
  id: 'Acquisto'
}
export const RegisterScreen = {
  id: 'GOLOGIN'
}
export const CarrelloScreen = {
  id: 'CARRELLO'
}
export const PagamentoCarrelloScreen = {
  id: 'PAGAMENTOCARRELLO'
}
export const RiepilogoCarrelloScreen = {
  id: 'RIEPILOGOCARRELLO'
}
export const CheckCarelloScreen = {
  id: 'CheckCarello'
}

const LoginRoot = () => (
  <LoginNavigationStack.Navigator screenOptions={{ headerShown: false }}>
    <LoginNavigationStack.Screen name={LoginScreen.id} component={Login} />
    <LoginNavigationStack.Screen name={RegisterScreen.id} component={Registrati} />
    <LoginNavigationStack.Screen name={HomeScreen.id} component={Home} />
    <LoginNavigationStack.Screen name={ProdottoScreen.id} component={Prodotto} />
    <LoginNavigationStack.Screen name={PurchaseScreen.id} component={MyPurchaseScreen} />
    <LoginNavigationStack.Screen name={CarrelloScreen.id} component={Carrello} />
    <LoginNavigationStack.Screen name={PagamentoCarrelloScreen.id} component={PagamentoCarrello} />
    <LoginNavigationStack.Screen name={RiepilogoCarrelloScreen.id} component={RiepilogoCarrello} />
    <LoginNavigationStack.Screen name={RiepilogoCarrelloScreen.id} component={CheckCarello} />
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
