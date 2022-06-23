import React from "react";
import { Text , Layout, Card} from "@ui-kitten/components";


function Description() {
    return(
      <>
        <Layout style = {{
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom : 500,}} 
            
            level = '3'>
          <Card status = 'info' style = {{margin : 10 , marginRight : 30}}> 
            <Text category = 'label'>Colore:   <Text category= 'c1'>marrone</Text></Text>
            <Text category = 'label'>Materiale:   <Text category= 'c1'>legno</Text></Text>
            <Text category = 'label'>Dimensione Articolo:   <Text category= 'c1'>57 x 48 x 89 cm</Text></Text>
            <Text category = 'label'>Peso massimo racomandato:   <Text category= 'c1' >120 Chilogrammi</Text></Text>
            <Text category = 'label'>Peso articolo:   <Text category= 'c1'>120 Chilogrammi</Text></Text>
          </Card>
        </Layout>
      </>
    );
  }

  export default Description;