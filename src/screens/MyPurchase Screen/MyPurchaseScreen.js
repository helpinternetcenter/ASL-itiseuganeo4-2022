import { IconRegistry , Button , Text} from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import TitleProdotto from "../../components/TitleProdotto/TitleProdotto";
import { EvaIconsPack } from "@ui-kitten/eva-icons";


function MyPurchaseScreen({navigation}) {

    function GoToLogin(){
        navigation.navigate('Login');
    }

    function GoBackAction(){
        navigation.goBack();
      }

    return (
        <>
        <IconRegistry icons = {EvaIconsPack}></IconRegistry>
        <ScrollView>
            <TitleProdotto name = 'MyPurchaseScreen' action = {GoBackAction}></TitleProdotto>
            <View style = {{
                flex : 1 , 
                alignItems: 'center',
                justifyContent: 'center',}}>

                <Text>My PurchaseScreen</Text>
                <Button onPress={GoToLogin}>Go to Login</Button>
            </View>
        </ScrollView>
        </>
    );
}

export default MyPurchaseScreen;