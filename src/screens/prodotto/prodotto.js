import * as React from 'react';
import { ApplicationProvider, Layout, Text, Input, Button } from '@ui-kitten/components';
import { TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Prodotto() {
  const [value, setValue] = React.useState('');


  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>Home Prodotto</Text>
      <Input
        placeholder='Nome'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
        style={{ marginLeft: '20%', marginRight: '20%', marginBottom: '10%', marginTop: '10%' }}
      />

    </Layout>
  );
}

export default Prodotto;