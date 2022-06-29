import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import Navigator from './src/screens/navigaitor'

export default function App () {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigator />
    </ApplicationProvider>
  )
}
