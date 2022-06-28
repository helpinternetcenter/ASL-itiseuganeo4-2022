import * as React from 'react';
import { Text, Divider, Button } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProdottoScreen } from '../../screens/navigaitor';
import informazioni from '../../api/visualizzaProdottiHome.json';
import prodottoScreen from '../../screens/Prodotto/prodottoScreen';
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import inCarrello from '../../api/inCarrello.json'
import specificheProdotti from '../../api/specificheProdotti.json'

function Riepilogo(props) {
    return (
        <View style={styles.viewMain}>
            <View style={styles.riepilogo}>
                <Text category='h3' style={styles.titoloRiepilogo}>Riepilogo</Text>
                <View style={styles.viewMargin}></View>
                {inCarrello.data[0].idOggetti.map(el =>
                    (<Text style={styles.riepProdotti} category='p1'>{specificheProdotti.data[el].nomeMobile} : {specificheProdotti.data[el].prezzo}</Text> )
                )}
                <View style={styles.viewMargin2}></View>
                
                <Button style={styles.button}>Compra</Button>
                


            </View>
        </View>
    );
}



const styles = StyleSheet.create({

    viewMain: {
        flex: 1,
    },
    titoloRiepilogo:{
        marginLeft:'5%',
        marginTop:'5%',
    },
    button:{
        width:'60%',
        marginLeft:'35%',
        marginTop:'5%',
        marginBottom:'15%'
    },
    riepProdotti: {
        fontSize: 25,
        marginLeft: '5%',
        marginBottom: 1,
        paddingBottom: 15,

    },
    viewMargin: {
        height: '1%',
        width: '60%',
        backgroundColor: '#6bc1d6',
        borderWidth: 0,
        marginTop: '3%',
        marginLeft: '5%',
        marginBottom:'2%',
        borderRadius: 50,
    },
    viewMargin2: {
        height: '1%',
        width: '90%',
        backgroundColor: '#a6a6a6',
        borderWidth: 0,
        marginLeft: '5%',
        borderRadius: 50,
        marginBottom:'3%'
    },

    viewMargin3: {
        height: '1%',
        width: '1%',
        backgroundColor: '#a6a6a6',
        borderWidth: 0,
        marginLeft: '5%',
        borderRadius: 50,
        marginBottom:'10%'
    },

    riepilogo: {
        width: '96%',
        backgroundColor: '#dedede',
        borderWidth: 0,
        //marginTop: '50%',
        marginLeft: '1%',
        borderRadius: 20,
    }
})

export default Riepilogo;