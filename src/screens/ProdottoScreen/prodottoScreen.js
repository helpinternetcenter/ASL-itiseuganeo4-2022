import * as React from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Icon, IconRegistry } from '@ui-kitten/components'
import styles from './prodottoScreenStyle'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import InformationLab from '../../components/ProdottoScreen/informationLab/InformationLab'
import dati from '../../api/specificheProdotti.json'

function PlusIcon (props) {
  return (
    <Icon {...props} fill={props.color} name='plus-circle-outline' />
  )
}

function MinusIcon (props) {
  return (
    <Icon {...props} fill={props.color} name='minus-circle-outline' />
  )
}

function ProdottoScreen ({ route, navigation }) {
  const { itemId } = route.params
  const shakeIconRef = React.useRef()

  function CarIcon (props) {
    return (
      <Icon
        {...props}
        name='shopping-cart-outline'
        height='30'
        width='30'
        ref={shakeIconRef}
        animation='shake'
        fill='white'
      />
    )
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dati.data[itemId].linkImmagini[1] }}
          />
        </View>
        <InformationLab
          title={dati.data[itemId].nomeMobile}
          price={dati.data[itemId].prezzo}
          description={{
            colore: dati.data[itemId].colore,
            materiale: dati.data[itemId].materiale,
            dimensione: dati.data[itemId].dimensioni,
            pesoMassimo: dati.data[itemId].pesoMasimo,
            pesoArticolo: dati.data[itemId].pesoArticolo
          }}
          iconsCarello={() => CarIcon()}
          iconButtonPlus={PlusIcon}
          iconButtonMinus={MinusIcon}
          startAnimation={() => shakeIconRef.current.startAnimation()}
          GoBack={() => navigation.goBack()}
          goToCarello={() => navigation.navigate('CARRELLO')}
        />
      </View>
    </>
  )
}

export default ProdottoScreen
