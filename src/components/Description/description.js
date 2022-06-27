import React from "react";
import { Text , Layout, Card} from "@ui-kitten/components";
import { View } from "react-native";

function Header (props) {
  return (
    <View style = {{paddingLeft : 15 ,}}>
      <Text category = 'h5'>Descrizione</Text>
    </View>
  );
}

function Description() {
    return(
      <>
        <Layout style = {{
            paddingLeft: 20,
            paddingTop: 10,}} 
            
            level = '3'>
          <Card 
              header={Header}
              status = 'info' 
              style = {{
                margin : 10 , 
                marginRight : 30,
                borderRadius : 10,
                }}>
            <Text category = 'label'>Colore:   <Text category= 'c1'>marrone</Text></Text>
            <Text category = 'label'>Materiale:   <Text category= 'c1'>legno</Text></Text>
            <Text category = 'label'>Dimensione Articolo:   <Text category= 'c1'>57 x 48 x 89 cm</Text></Text>
            <Text category = 'label'>Peso massimo racomandato:   <Text category= 'c1' >120 Kg</Text></Text>
            <Text category = 'label'>Peso articolo:   <Text category= 'c1'>120 Kg</Text></Text>
          </Card>
        </Layout>
      </>
    );
  }

  export default Description;