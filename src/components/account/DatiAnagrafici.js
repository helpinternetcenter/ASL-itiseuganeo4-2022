import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input } from '@ui-kitten/components'

function DatiAnagrafici () {
    const [value, setValue] = React.useState()
    return (
        <View style={styles.viewMain}>
            <View style={styles.viewProdotto}>
                <Input
                    placeholder='Place your Text'
                    value={value}
                    onChangeText={nextValue => setValue(nextValue)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewProdotto: {
        width: '98%',
        height: 160,
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
    viewMain: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 10
    }
})

export default DatiAnagrafici 