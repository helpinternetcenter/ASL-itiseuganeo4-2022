import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: '5%',
    alignItems: 'center'
  },

  price: {
    fontWeight: 'normal',
    color: '#6bc1d6',
    flex: 2
  },

  buttonContainer: {
    flexDirection: 'row',
    marginRight: '5%',
    flex: 2,
    alignItems: 'center'
  },

  buttonPlus: {
    marginLeft: '7%',
    borderRadius: 100,
    borderColor: 'black'
  },

  buttonMinus: {
    marginRight: '7%',
    borderRadius: 100,
    borderColor: 'black'

  },

  text: {
    color: '#6bc1d6'
  }
})

export default styles
