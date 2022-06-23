import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout, Text, Input, Button } from '@ui-kitten/components';
import { TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function Login({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');


  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>Log In </Text>
      
        <View style={styles.row}>
            <Text style={styles.text} category='p2'>Username</Text>
          </View>
       
      <Input
        placeholder='Username'
        value={username}
        onChangeText={nextValue => setUsername(nextValue)}
        style={{marginLeft:'20%' , marginRight:'20%', marginBottom:'10%',marginTop:'5%'}}
      />

         <Text category='p2'>Password </Text>

          <Input
            placeholder='Password'
            value={password}
            onChangeText={nextValue => setPassword(nextValue)}
            style={{marginLeft:'20%', marginRight:'20%', marginBottom:'10%',marginTop:'5%'}}
          />

      
      
      <Button onPress={() => navigation.push('HOME')} style={{backgroundColor:'#6bc1d6'}}>
        Log In
      </Button>

      <View style={styles.row}>
            <Text style={styles.text} category='p2'>Se non sei registrato, Registrati</Text>
          </View>

     

      <Button onPress={() => navigation.push('REGISTRATI')} style={ styles.button} appearance='ghost'>
            ISCRIVITI
      </Button>

  



      
    </Layout>
  );
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

export default Login;