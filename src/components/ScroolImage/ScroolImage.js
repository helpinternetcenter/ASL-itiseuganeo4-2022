import React from 'react'
import { Layout, ViewPager } from '@ui-kitten/components'
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
  return (
    <>
      <ViewPager
        style={styles.imageContainer}
        selectedIndex={selectedIndex}
        shouldLoadComponent={() => shouldLoadComponent}
        onSelect={(index) => ChangeImage(index)}
      >
        {
          dati.data[numeroRender].linkImmagini.map((el, key) => {
            return (
              <Layout key={key} style={styles.imageContainer} level='1'>
                <Image style={styles.image} source={{ uri: el }} />
              </Layout>
            )
          })
        }

      </ViewPager>

    </>

  )
}

export default ScroolImage
