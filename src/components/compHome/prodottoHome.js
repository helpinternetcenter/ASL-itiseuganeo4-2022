import * as React from 'react';
import { Text, Divider, Button } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProdottoScreen } from '../../screens/navigaitor';
import informazioni from '../../api/visualizzaProdottiHome.json';


function SceltaProdotto(props) {
    // const { itemId } = route?.params           
    return (
        <View style={styles.viewMain}>

            <View style={styles.viewProdotto}>
                <Text category='h3' style={styles.testoTitolo}> {props.nomeMobile} </Text>
                <View style={styles.viewMargin}></View>
                <Text category='p1' style={styles.testoTitolo}>{props.descrizione}</Text>
                <Button style={styles.button} appearance='ghost' onPress={props.cambioScheda}>
                    COMPRA
                </Button>
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({

    viewMain: {
       flex: 1,
       paddingTop: 20,
       paddingBottom:10,
    },

    viewProdotto: {
        width: '98%',
        backgroundColor: '#dedede',
        borderWidth: 0,
        // marginTop: '10%',
        marginLeft: '1%',
        borderRadius: 20,
    },

    viewMargin: {
        height: '3%',
        width: '40%',
        backgroundColor: '#6bc1d6',
        borderWidth: 0,
        marginLeft: '5%',
        borderRadius: 50,
    },




    testoTitolo: {
        marginTop: '3%',
        marginLeft: '5%'
    },

    testoSottotitolo: {
        marginLeft: '5%',
    }
})
export default SceltaProdotto