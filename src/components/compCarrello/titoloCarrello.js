import React from 'react'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { View } from 'react-native'
import styles from './styleTitolo'

function TitleCarrello (props) {
  function BackIcon (props) {
    return (
      <Icon {...props} name='arrow-back' />
    )
  }

  function renderBackAction () {
    return (
      <TopNavigationAction icon={(props) => BackIcon(props)} onPress={() => props.action()} />
    )
  }

  return (
    <>
      <View style={props.style} />
      <TopNavigation
        alignment='center'
        style={styles.title}
        title={props.name}
        accessoryLeft={() => renderBackAction()}
      />
    </>
  )
};

export default TitleCarrello
