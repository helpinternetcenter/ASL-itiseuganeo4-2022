import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import Navigator from './src/screens/navigaitor'
import { Provider as AuthProvider } from './src/context/AuthContext'

export default function App () {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </ApplicationProvider>
  )
}
