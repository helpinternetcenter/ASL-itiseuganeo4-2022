import * as React from 'react';
import {Layout, Text, Input, Button } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

function Registrati(){

    return(

        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={styles.row}>

                <Text style={styles.text} caregory='p2'>NOME</Text>

            </View>

            

        </Layout>
       
    )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:'10%',
    },
    text: {
      margin: 2,
      marginTop:'10%'
    },
  
  
    
  
  
  });
  

export default Registrati