import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout, Text,Input } from '@ui-kitten/components';


function Login() {

    const [nome,setUsername] = React.useState('');
  
    return (

      <Layout style={styles.container} level='1'>


        <Text style={styles.text} category='h1'>LOGIN</Text>

          <View style={styles.alternativeText}>
              
              <Text style={styles.text}>
                    Username

              </Text>

          </View>

          
          
            <Input
              style={styles.inputText}
              value={nome}
              placeholder='Enter Username'
              onChangeText={nextValue => setUsername(nextValue)}


            />

          
       

          
      </Layout>
      

    

      

    );
  }

  const styles = StyleSheet.create({

    container:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop:'15%',
      marginLeft:'10%',
      flex: 1

    },


    alternativeText:{
          marginTop:'25%',
          marginRight:'50%',
          
    },

    inputText:{
          marginTop:'40%',
    }

  

    
  
  });

export default Login;