import * as React from 'react'
import { Layout, Text, Input, Button } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import { registrazione } from '../../api'

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

      <Button onPress={() => {
        registrazione(value, setMessage, () => navigation.push('LOGIN'))
      }}
      >
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
  },

  inputAddress: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'
  },

  inputState: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'
  },

  inputCountry: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'
  },

  inputProvince: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'
  }

})

export default Registrati
