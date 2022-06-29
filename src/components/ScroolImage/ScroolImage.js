
import React from 'react'
import { Layout, ViewPager, RadioGroup, Radio, Card } from '@ui-kitten/components'
import { Image } from 'react-native'
import styles from './ScroolImage.style'
import dati from '../../api/specificheProdotti.json'

function ScroolImage (props) {
  console.log(props.numeroRender)
  const numeroRender = props.numeroRender

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  function ChangeImage (index) {
    setSelectedIndex(index)
  }

  function shouldLoadComponent (index) {
    return (index === selectedIndex)
  }

  function BottomRadioGroup (props) {
    return (
      <RadioGroup
        {...props}
        style={[props.styles, styles.RadioGroup]}
        selectedIndex={selectedIndex}
        onChange={(index) => ChangeImage(index)}
      >
        {/* eslint-disable-next-line react/jsx-key */}
        {dati.data[numeroRender].linkImmagini.map((el, key) => (<Radio key={key}> </Radio>))}

      </RadioGroup>
    )
  }
  return (
    <>
      <Card style={{ margin: 26, borderRadius: 10 }} status='primary' footer={(props) => BottomRadioGroup(props)} disabled={() => true}>
        <ViewPager
          selectedIndex={selectedIndex}
          shouldLoadComponent={() => shouldLoadComponent}
          onSelect={(index) => ChangeImage(index)}
        >
          {
            dati.data[numeroRender].linkImmagini.map((el, key) => {
              return (
                <Layout key={key} style={styles.imageContiner} level='1'>
                  <Image style={styles.image} source={{ uri: el }} />
                </Layout>
              )
            })
          }

        </ViewPager>
      </Card>
    </>

  )
}

export default ScroolImage
