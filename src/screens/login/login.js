import * as React from 'react';
import { ApplicationProvider, Layout, Text, Input, Button } from '@ui-kitten/components';
import { TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function Login({navigation}) {
  const [value, setValue] = React.useState('');


  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>Log In </Text>
      <View style={styles.row}>
          <Text style={styles.text} category='c1'>Usrname</Text>
      </View>
       
      <Input
        placeholder='Nome'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
        style={{marginLeft:'20%' , marginRight:'20%', marginBottom:'10%',marginTop:'10%'}}
      />

      <Button onPress={() => navigation.push('HOME')}>
        Avanti
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
  },
});

export default Login;