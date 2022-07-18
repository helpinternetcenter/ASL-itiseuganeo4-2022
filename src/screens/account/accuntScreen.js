import React, { useContext } from 'react'
import TitleProfile from '../../components/account/TitleProfile/TitleProfile'
import ViewData from '../../components/account/ViewData/ViewData'
import credenziali from '../../api/credenziali.json'
import ViewOrdini from '../../components/account/ViewOrdini/ViewOrdini'
import ordini from '../../api/ordini.json'

import { ScrollView } from 'react-native'
import { Layout, Button } from '@ui-kitten/components'
import styles from './accountScreen_styles'
import { Context } from '../../context/AuthContext'
import { idUtente } from '../../api/'

function AccountScreen () {
  const value = {
    nome: credenziali.data[0].nomeCredenziali,
    cognome: credenziali.data[0].cognomeCredenziali,
    username: credenziali.data[0].usernameCredenziali,
    password: credenziali.data[0].passwordCredenziali
  }

  const { signout } = useContext(Context)
  const { state } = React.useContext(Context)
  const [idUt, setIdUt] = React.useState([])

  React.useEffect(() => {
    idUtente(state.id).then(({ nome, cognome, username }) => {
      setIdUt(nome, cognome, username)
    })
  }, [])

  return (

    <ScrollView style={{ flex: 1 }}>
      <TitleProfile
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
