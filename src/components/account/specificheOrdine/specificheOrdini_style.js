import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewProdotto: {
    height: 200,
    backgroundColor: '#edf7f7',
    borderWidth: 0,
    // marginTop: '10%',
    margin: '5%',
    borderRadius: 5,
    paddingBottom: 15
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
  },
  time: {
    flex: 1
  },

  labelTime: {
    flex: 2,
    fontSize: 13,
    color: '#6bc1d6',
    fontWeight: 'bold',
    paddingLeft: '3%'
  }

})

export default styles
