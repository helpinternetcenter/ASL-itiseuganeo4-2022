import * as React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


function Home() {
    return (
<Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Home Screen</Text>
  </Layout>
    );
  }

export default Home;