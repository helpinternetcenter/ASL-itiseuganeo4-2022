import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: '8%',
    margin: '5%',
    borderRadius: 10,
    backgroundColor: '#6bc1d6',
    borderColor: '#6bc1d6'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  testoTitolo: {
    marginBottom: '5%',
    marginTop: '5%',
    fontWeight: 'bold',
    fontSize: 30,
    flex: 5
  },
  container: {
    flex: 3,
    borderWidth: 1,
    borderRadius: 30,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    backgroundColor: '#ffffff'
  },
  description: {
    margin: '5%'
  }

})

export default styles
