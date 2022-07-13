import * as React from 'react'
import TitleProfile from '../../components/account/TitleProfile/TitleProfile'
import ViewData from '../../components/account/ViewData/ViewData'

import { ScrollView } from 'react-native'
import { Layout } from '@ui-kitten/components'
import styles from './accountScreen_styles'

function AccountScreen () {
  const elencoTitoli = [
    'Italy',
    'Germany',
    'USA',
    'Poland',
    'Spain',
    'Portugal',
    'France'
  ]
  const [address, setAddress] = React.useState('')
  const [province, setProvince] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [state, setState] = React.useState(null)

  return (
    <>
      <TitleProfile
        name='Davide Muratore'
        styles={{
          viewTitolo: styles.viewTitolo,
          testTitolo: styles.testoTitolo
        }}
      />

      <ScrollView>
        <Layout level='1' style={styles.viewMain}>
          <ViewData
            elencoTitoli={elencoTitoli}
            address={address}
            setAddress={(nextValue) => setAddress(nextValue)}
            state={state}
            setState={(index) => setState(index)}
            value={elencoTitoli[state - 1]}
            country={country}
            setCountry={(nextValue) => setCountry(nextValue)}
            provincia={province}
            setProvincia={(nextValue) => setProvince(nextValue)}
          />
        </Layout>
      </ScrollView>
    </>
  )
}

export default AccountScreen
