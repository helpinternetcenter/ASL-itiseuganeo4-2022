import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  imageContiner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20

  },

  image: {
    width: 240,
    height: 200
  },

  card: {
    margin: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    borderRadius: 10

  },

  RadioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

})

export default styles
