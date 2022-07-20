import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Prodotto from './ProdottoScreen/prodottoScreen'
import Login from './login/login'
import Home from './home/home'
import Registrati from './registrati/Registrati'
import Carrello from './carrello/carrello'
import PagamentoCarrello from '../screens/PagamentoCarrello/pagamentoCarrello'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AccountScreen from './account/accuntScreen'
import { Context } from '../context/AuthContext'

const LoginNavigationStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const CarrelloStack = createNativeStackNavigator()
const ProdottoStack = createNativeStackNavigator()
const AccountStack = createNativeStackNavigator()

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

export const accountScreen = {
  id: 'ACCOUNT'
}
const TabRoot = () => (
  <Tab.Navigator
    initialRouteName={HomeScreen.id}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName

        if (route.name === 'HOME') {
          iconName = 'home-outline'
        } else if (route.name === 'CARRELLO') {
          iconName = 'cart-outline'
        } else if (route.name === 'ACCOUNT') {
          iconName = 'person-outline'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />
      },
      headerShown: false
    })}
  >
    <Tab.Screen name={HomeScreen.id} component={ProdottoStackScreen} />
    <Tab.Screen name={accountScreen.id} component={AccountStackScreen} />
    <Tab.Screen name={CarrelloScreen.id} component={CarrelloStackScreen} />
  </Tab.Navigator>
)

const LoginRoot = () => (
  <LoginNavigationStack.Navigator screenOptions={{ headerShown: false }}>
    <LoginNavigationStack.Screen name={LoginScreen.id} component={Login} />
    <LoginNavigationStack.Screen name={RegisterScreen.id} component={Registrati} />
  </LoginNavigationStack.Navigator>
)

function CarrelloStackScreen () {
  return (
    <CarrelloStack.Navigator screenOptions={{ headerShown: false }}>
      <CarrelloStack.Screen name={CarrelloScreen.id} component={Carrello} />
      <CarrelloStack.Screen name={PagamentoCarrelloScreen.id} component={PagamentoCarrello} />
    </CarrelloStack.Navigator>
  )
}

function ProdottoStackScreen () {
  return (
    <ProdottoStack.Navigator screenOptions={{ headerShown: false }}>
      <ProdottoStack.Screen name={HomeScreen.id} component={Home} />
      <ProdottoStack.Screen name={ProdottoScreen.id} component={Prodotto} />
    </ProdottoStack.Navigator>
  )
}

function AccountStackScreen () {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name={accountScreen.id} component={AccountScreen} />
    </AccountStack.Navigator>
  )
}
const Navigator = () => {
  const { state } = useContext(Context)
  return (
    <NavigationContainer>
      {state.id === null ? <LoginRoot /> : <TabRoot />}
    </NavigationContainer>
  )
}

export default Navigator
