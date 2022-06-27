import React from "react";
import { Card, Text , Button} from "@ui-kitten/components";
import { View} from "react-native";



function Header (props) {
    return (
    <View {...props} style = {{paddingLeft : 15 ,}}>
        <Text category = 'h5'> Prezzo </Text>
    </View>
    )
}

function PriceDescription (props){
    return (
        <Card status = 'info' header ={Header} style = {{margin : 26 , borderRadius : 10}}>
            <Text category = 'h2' style = {{fontWeight : 'normal'}} >
                {props.prezzo}
            </Text>
            <Button size = 'small' onPress = {props.action}>
                Compra Subito !
            </Button> 
        </Card>
    );
}

export default PriceDescription;