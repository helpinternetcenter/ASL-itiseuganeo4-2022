import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewProdotto: {
    flex: 3,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderWidth: 0,
    // marginTop: '10%',
    marginLeft: '1%',
    borderRadius: 20,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 10
  },
  logo: {
    marginLeft: '5%',
    width: 90,
    height: 80,
    marginTop: 40,
    marginBottom: 50,
    position: 'absolute',
    borderRadius: 5
  },
  testoTitolo: {
    marginTop: '3%',
    marginLeft: '48%',
    fontSize: 25
  },
  testoSottotitolo: {
    marginLeft: '50%',
    fontSize: 15
  },
  prezzo: {
    marginLeft: '50%',
    color: '#6bc1d6',
    fontSize: 25,
    fontWeight: 'bold'
  }

})

export default styles
