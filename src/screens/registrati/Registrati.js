import * as React from 'react'
import { Layout, Text, Input, Button } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'

function Registrati ({ navigation }) {
  const [nome, setNome] = React.useState('')
  const [cognome, setCognome] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  const value = {
    nome,
    cognome,
    username,
    password
  }

  const registrazione = async (value, setMessage) => {
    let response = {}
    try {
      response = await fetch('http://192.168.1.39:3000/Registrazione ', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      response = await response.json()
      if (response.result === true) {
        setMessage(response.text)
        setTimeout(() => navigation.push('LOGIN'), 500)
      } else {
        setMessage(response.text)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (

    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text category='h1'>REGISTRAZIONE</Text>

      <View style={styles.row}>

        <Text style={styles.text} caregory='p2'>NOME</Text>

      </View>

      <Input
        placeholder='Inserisci il nome'
        value={nome}
        onChangeText={nextValue => setNome(nextValue)}
        style={styles.inputNome}
      />

      <View style={styles.row}>

        <Text style={styles.text} caregory='p2'>COGNOME</Text>

      </View>

      <Input
        placeholder='Inserisci il cognome'
        value={cognome}
        onChangeText={nextValue => setCognome(nextValue)}
        style={styles.inputCognome}
      />

      <View style={styles.row}>

        <Text style={styles.text} caregory='p2'>USERNAME</Text>

      </View>

      <Input
        placeholder='Inserisci lo Username'
        value={username}
        onChangeText={nextValue => setUsername(nextValue)}
        style={styles.inputUsername}
      />

      <View style={styles.row}>

        <Text style={styles.text} caregory='p2'>PASSWORD</Text>

      </View>

      <Input
        placeholder='Inserisci la Password'
        value={password}
        onChangeText={nextValue => setPassword(nextValue)}
        style={styles.inputPassword}
      />

      <Button onPress={() => registrazione(value, setMessage)}>
        REGISTRATI
      </Button>

      <Text> {message} </Text>

    </Layout>

  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%'
  },
  text: {
    margin: 1,
    marginTop: '1%'

  },

  inputNome: {
    marginLeft: '5%',
    marginRight: '5%'

  },

  inputCognome: {
    marginLeft: '5%',
    marginRight: '5%'

  },

  inputUsername: {
    marginLeft: '5%',
    marginRight: '5%'

  },

  inputPassword: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'
  }

})

export default Registrati
