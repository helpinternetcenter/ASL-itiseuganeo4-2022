import * as React from 'react'
import TitleProfile from '../../components/account/TitleProfile/TitleProfile'
import ViewData from '../../components/account/ViewData/ViewData'
import credenziali from '../../api/credenziali.json'
import ViewOrdini from '../../components/account/ViewOrdini/ViewOrdini'
import ordini from '../../api/ordini.json'

import { ScrollView } from 'react-native'
import { Layout } from '@ui-kitten/components'
import styles from './accountScreen_styles'

function AccountScreen () {
  const value = {
    nome: credenziali.data[0].nomeCredenziali,
    cognome: credenziali.data[0].cognomeCredenziali,
    username: credenziali.data[0].usernameCredenziali,
    password: credenziali.data[0].passwordCredenziali
  }

  return (

    <ScrollView style={{ flex: 1 }}>
      <TitleProfile
        name='Davide Muratore'
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
    </ScrollView>
  )
}

export default AccountScreen
