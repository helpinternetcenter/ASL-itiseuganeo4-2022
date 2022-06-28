import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  viewMain: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10
  },

  viewProdotto: {
    width: '90%',
    backgroundColor: '#dedede',
    borderWidth: 0,
    marginLeft: '5%',
    borderRadius: 20
  },

  viewMargin: {
    height: 3,
    width: '40%',
    backgroundColor: '#6bc1d6',
    borderWidth: 0,
    marginLeft: '5%',
    borderRadius: 50
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },

  testoTitolo: {
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%'
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  testoSottotitolo: {
    marginLeft: '5%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})

export default styles
