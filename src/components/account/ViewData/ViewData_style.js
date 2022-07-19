import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffffff',
    margin: '7%',
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17
  },
  testoTitolo: {
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20
  },

  testoSottotitolo: {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    fontWeight: 'bold',
    fontSize: 15
  },

  input: {
    flex: 4,
    color: '#a6a2a2',
    borderWidth: 0,
    borderRadius: 10,
    margin: '5%',
    backgroundColor: '#edf7f7',
    padding: '5%',
    textAlignVertical: 'center'
  }

})
