import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


function Login() {

  
    return (

      <View style={styles.row}>
        <Text style={styles.text} category='h1'>LOGIN</Text>

        
      </View>

    

      

    );
  }

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    text: {
      margin: 2,
    },
    alternativeContainer: {
      
      borderRadius: 4,
      marginVertical: 2,
      backgroundColor: '#3366FF',
      alignItems:'center'
    },
  });

export default Login;