import React from 'react'
import { Text, Button, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { TouchableWithoutFeedback, View } from 'react-native'
import styles from './styleTitolo'

function ArrowIcon (props) {
  const [secureTextEntry, setSecureTextEntry] = React.useState(false)

  function Change () {
    return (
      setSecureTextEntry(!secureTextEntry)
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Change}>
      <Icon {...props} name='arrow-back' fill={secureTextEntry ? 'black' : '#8F9BB3'} />
    </TouchableWithoutFeedback>
  )
}

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
    function StartAnimation () {
      shakeIconRef.current.startAnimation()
    }

    return (
      <TopNavigationAction icon={CarIcon} onPress={StartAnimation} />
    )
  }

  return (
    <>
      <View style={{ backgroundColor: '#6bc1d6', height: '10%', width: '100%' }} />
      <TopNavigation
        alignment='center'
        style={styles.title}
        title={props.name}
        accessoryLeft={renderBackAction}
      />
    </>
  )
};

export default TitleProdotto
