import * as React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


function Login() {
    return (
    <View style={styles.row}>
       <Text style={styles.text} category='h1'>H1</Text>
     </View> 




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