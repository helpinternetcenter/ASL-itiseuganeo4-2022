import * as React from 'react'
import { View } from 'react-native'
import { Text, Button, Icon } from '@ui-kitten/components'
import Description from '../description/description'
import PriceDescription from '../PriceDescription/PriceDescription'
import styles from '../informationLab/informationLab_style'

function CrossIcon (props) {
  return (
    <Icon
      {...props}
      name='close-outline'
      height='30'
      width='30'
      animation='shake'
      fill='black'
    />
  )
}
function InformationLab (props, navigation) {
  const [state, setState] = React.useState(0)

  const ControlState = (newState) => {
    if (state <= 0) {
      setState(0)
    } else {
      setState(newState)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Button
            appearance='ghost'
            accessoryLeft={CrossIcon}
            onPress={() => props.GoBack()}
          />
          <Text style={styles.testoTitolo}> {props.title} </Text>
        </View>
        <PriceDescription
          iconButtonPlus={props.iconButtonPlus}
          iconButtonMinus={props.iconButtonMinus}
          value={state}
          price={props.price}
          setActionPlusButton={() => { setState(state + 1) }}
          setActionMinusButton={() => { ControlState(state - 1) }}
        />
        <Description
          styles={styles.description}
          description={props.description}
        />
        <Button
          style={styles.button}
          accessoryLeft={props.iconsCarello}
          onPress={() => {
            props.startAnimation()
            setTimeout(() => { props.goToCarello() }, 500)
          }}
        > Aggiungi al carello
        </Button>
      </View>
    </>
  )
}

export default InformationLab
