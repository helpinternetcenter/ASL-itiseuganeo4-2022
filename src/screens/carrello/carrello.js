import * as React from 'react';
import { Text, Divider, Button } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProdottoScreen, PurchaseScreen } from '../../screens/navigaitor';
import informazioni from '../../api/visualizzaProdottiHome.json';
import prodottoScreen from '../../screens/Prodotto/prodottoScreen';
import TitoloCarrello from '../../components/compCarrello/titoloCarrello'
import Riepilogo from '../../components/compCarrello/riepilogoCarrello';
import CartaCarrello from '../../components/compCarrello/cartaCarrello';
import Navigator from '../../screens/navigaitor';


function Carrello({ route, navigation }) {
    function GoBackAction() {
        navigation.goBack();
    }
    console.log("ciao mondo")
    return (
        <View>
            <TitoloCarrello name={"Carrello"} action={GoBackAction}></TitoloCarrello>
            <CartaCarrello cambioScheda = {() => navigation.navigate(PurchaseScreen.id)}></CartaCarrello>
            <Riepilogo></Riepilogo>

        </View>
    );
}


export default Carrello;