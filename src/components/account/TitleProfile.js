import * as React from 'react'
import { Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'

function TitleProfile (props) {
    return (
        <View style={[styles.viewTitolo, props.style]}>
          <Text category='h1' style={styles.testoTitolo}>Ciao Davide{ /* {props.valore} */}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    viewTitolo: {
        height: '20%',
        width: '100%',
        backgroundColor: '#ffffff',
        borderWidth: 0,
        justifyContent: 'center'
    },

    testoTitolo: {
        color: '#6bc1d6',
        marginTop: '5%',
        marginLeft: '7%',
        fontWeight: 'bold',
        fontSize: 25
    },
})
export default TitleProfile