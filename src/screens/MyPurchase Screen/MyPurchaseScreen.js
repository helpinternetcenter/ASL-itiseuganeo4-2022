import { IconRegistry , Button , Text, Layout} from "@ui-kitten/components";
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
        <TitleProdotto name = 'MyPurchaseScreen' action = {GoBackAction}></TitleProdotto>
        <Layout style = {{
                flex : 1 , 
                alignItems: 'center',
                justifyContent: 'center',
                }}>
            <Text>My PurchaseScreen</Text>
            <Button onPress={GoToLogin}>Go to Login</Button>
        </Layout>
        </>
    );
}

export default MyPurchaseScreen;