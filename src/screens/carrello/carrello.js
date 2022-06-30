import * as React from 'react'
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native'
import { PagamentoCarrelloScreen } from '../navigaitor'
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import Riepilogo from '../../components/compCarrello/riepilogoCarrello'
import CartaCarrello from '../../components/compCarrello/cartaCarrello'

function UserGreeting (props) {
  return <Text>Welcome back!</Text>
}

function GuestGreeting (props) {
  return <Text>Please sign up.</Text>
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LoginButton (props) {
  return (
    <Button onClick={props.onClick} title='Login' />
  )
}

function LogoutButton (props) {
  return (
    <Button onClick={props.onClick} title='ciao' />
  )
}

class LoginControl extends React.Component {
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick () {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false })
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <View>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </View>
    )
  }
}

function Carrello ({ route, navigation }) {
  function GoBackAction () {
    navigation.goBack()
  }

  return (
    <View>
      <TitoloCarrello name='Carrello' style={StyleMod.modTitolo} action={() => GoBackAction()} />
      <LoginControl />
      <ScrollView style={{ paddingBottom: 0 }}>
        <CartaCarrello cambioScheda={() => navigation.navigate(PagamentoCarrelloScreen.id)} />
        <Riepilogo onPressGoBack={() => GoBackAction()} />
      </ScrollView>
    </View>
  )
}
const StyleMod = StyleSheet.create({
  modTitolo: {
    backgroundColor: '#6bc1d6',
    height: '4%',
    width: '100%'

  }
}
)
export default Carrello
