import React from "react";
import { Layout   } from "react-native";
import { Text } from "@ui-kitten/components";


function Description() {
    return(
      <>
  
        <Layout style = {{
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom : 500,}} 
            
            level = '3'>
          <Text category='h6' style = {{paddingBottom : 10}}>
            Description
          </Text>
          <Text category = 'label'>Colore:   <Text category= 'c1'>marrone</Text></Text>
          <Text category = 'label'>Materiale:   <Text category= 'c1'>legno</Text></Text>
          <Text category = 'label'>Dimensione Articolo:   <Text category= 'c1'>57 x 48 x 89 cm</Text></Text>
          <Text category = 'label'>Peso massimo racomandato:   <Text category= 'c1' >120 Chilogrammi</Text></Text>
          <Text category = 'label'>Peso articolo:   <Text category= 'c1'>120 Chilogrammi</Text></Text>
        </Layout>
      </>
    );
  }

  export default Description;