import React from 'react'
import { Text, Button, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { TouchableWithoutFeedback, View } from 'react-native'
import { PurchaseScreen } from '../../screens/navigaitor'
import styles from './TitleProdotto.style'

function TitleProdotto (props) {
  const shakeIconRef = React.useRef()

  function BackIcon (props) {
    return (
      <Icon {...props} name='arrow-back' />
    )
  }

  function CarIcon (props) {
    return (
      <Icon
        {...props}
        name='car'
        animation='shake'
        ref={shakeIconRef}
      />
    )
  }

  function renderBackAction () {
    return (
      <TopNavigationAction icon={BackIcon} onPress={props.action} />
    )
  }

  function renderGoShopAction () {
    function GoOnPurchaseScreen () {
      shakeIconRef.current.startAnimation()
      props.action2()
    }

    return (
      <TopNavigationAction icon={CarIcon} onPress={GoOnPurchaseScreen} />
    )
  }

  return (
    <>
      <View style={{ backgroundColor: '#6bc1d6', height: '3%', width: '100%' }} />
      <TopNavigation
        alignment='center'
        style={styles.title}
        title={props.name}
        accessoryLeft={renderBackAction}
        accessoryRight={renderGoShopAction}
      />
    </>
  )
};

export default TitleProdotto
