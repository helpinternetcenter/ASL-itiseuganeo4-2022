import React, { useContext } from 'react'
import TitleProfile from '../../components/account/TitleProfile/TitleProfile'
import ViewData from '../../components/account/ViewData/ViewData'
import ViewOrdini from '../../components/account/ViewOrdini/ViewOrdini'
import ordini from '../../api/ordini.json'

import { ScrollView } from 'react-native'
import { Layout, Button } from '@ui-kitten/components'
import styles from './accountScreen_styles'
import { Context } from '../../context/AuthContext'
import { idUtente } from '../../api/'

function AccountScreen () {
  const { signout } = useContext(Context)
  const { state } = React.useContext(Context)
  const [nome, setNome] = React.useState([])
  const [cognome, setCognome] = React.useState([])
  const [username, setUsername] = React.useState([])

  React.useEffect(() => {
    idUtente(state.id).then(({ cognome, nome, username }) => {
      setNome(nome)
      setCognome(cognome)
      setUsername(username)
    })
  }, [])

  const value = {
    nome: nome,
    cognome: cognome,
    username: username
  }

  return (

    <ScrollView style={{ flex: 1 }}>
      <TitleProfile
        valore={nome}
        styles={{
          viewTitolo: styles.viewTitolo,
          testTitolo: styles.testoTitolo
        }}

      />
      <Layout level='1' style={styles.viewMain}>
        <ViewData
          value={value}
        />
        <ViewOrdini
          value={ordini}
        />
      </Layout>
      <Button
        style={styles.button} onPress={() => {
          signout()
        }}
      >
        LOG OUT
      </Button>

    </ScrollView>
  )
}

export default AccountScreen
