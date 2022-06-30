import * as React from 'react'
import { IconRegistry, Layout } from '@ui-kitten/components'
import TitleProdotto from '../../components/TitleProdotto/TitleProdotto'
import ScroolImage from '../../components/ScroolImage/ScroolImage'
import Description from '../../components/Description/description'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ScrollView } from 'react-native'
import PriceDescription from '../../components/PriceDescription/PriceDescription'
import { CarrelloScreen, PurchaseScreen } from '../navigaitor'
import dati from '../../api/specificheProdotti.json'
function Prodotto ({ route, navigation }) {
  const { itemId } = route.params

  function GoBackAction () {
    navigation.goBack()
  }
  function GoToCarrello () {
    navigation.navigate(CarrelloScreen.id, { conferma: false })
  }
  function compraSubito () {
    navigation.navigate(PurchaseScreen.id)
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <TitleProdotto name={dati.data[itemId].nomeMobile} action={() => GoBackAction()} actionCarrello={() => compraSubito()} />
      <ScrollView>
        <Layout level='3'>
          <ScroolImage numeroRender={itemId} />
          <Description numeroRender={itemId} />
          <PriceDescription numeroRender={itemId} prezzo='81,90€' action={() => GoToCarrello()} />
        </Layout>
      </ScrollView>
    </>
  )
}

export default Prodotto
