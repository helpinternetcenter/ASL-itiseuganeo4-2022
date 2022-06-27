import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout, Text, Input, Button,Icon,IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from '../navigaitor';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { ricerca } from '../../Utils/check';
import Home from '../home/home';

const AlertIcon = (props) => (
<Icon {...props} name='alert-circle-outline'/>

)



function Login({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true)
  const loggato =  ricerca()

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const renderIcon = (props) =>(

    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <IconRegistry icons={EvaIconsPack} />
        <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const renderCaption = () =>{
      return(
        <View style={styles.captionContainer}>
          {AlertIcon(styles.captionIcon)}
          <Text style={styles.captionText}> Should contain at least 8 symbols </Text>
        </View>
      )

  }

  

  credenziali = new Array( username, password );



  
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>Log In </Text>
      
        <View style={styles.row}>
            <Text style={styles.text} category='p2'>USERNAME</Text>
            
          </View>
       
      <Input
        placeholder='Username'
        value={username}
        onChangeText={nextValue => setUsername(nextValue)}
        style={{marginLeft:'5%' , marginRight:'5%', marginBottom:'10%',marginTop:'5%'}}
        
      />

         <Text category='p2'>PASSWORD </Text>
          

          <Input
            value={password}
            placeholder='Enter Password'
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
            style={styles.inputPassword}
           />

      <Button onPress={()=>{{ricerca(username, password).ingresso ? navigation.push(HomeScreen.id, { idIdentificativo : ricerca(username, password).id}): console.log("return2")}}}>
        Log In 
      </Button>

      <View style={styles.row}>
            <Text style={styles.text} category='p2'>Se non sei registrato, Registrati</Text>
          </View>

     

      <Button onPress={() => navigation.push('GOLOGIN')} style={ styles.button} appearance='ghost' >
            REGISTRATI
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
    margin: 1,
    marginTop:'10%'
  },
  captionContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',

  },

  captionIcon:{
    width:10,
    height:10,
    marginRight:5

  },

  captionText:{
    fontSize:12,
    fontWeight:"400",

   
  },

  inputPassword:{
      marginLeft:'5%',
      marginRight:'5%',
      color:"#8F9BB3",
  },

});

export default Login;