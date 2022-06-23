import React from "react";
import { Card, Text , Button} from "@ui-kitten/components";
import { View} from "react-native";



function Header (props) {
    return (
    <View {...props} style = {{paddingLeft : 15 ,}}>
        <Text category = 'h5'> Price </Text>
    </View>
    )
}

function PriceDescription (props){
    return (
        <Card status = 'info' header ={Header} style = {{margin : 26 }}>
            <Text category = 'h2' style = {{fontWeight : 'normal'}} >
                {props.prezzo}
            </Text>
            <Button size = 'small' style = {{}}>
                Compra Subito !
            </Button> 
        </Card>
    );
}

export default PriceDescription;