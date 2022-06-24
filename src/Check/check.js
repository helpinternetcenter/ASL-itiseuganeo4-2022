import * as React from 'react';
import credenziali from "../dev/credenziali.json"
import Login from '../screens/login/login';
import home from '../screens/home/home'



function Check(route){

  let ArrCredenziali=[data[0].usernameCredenziali,data[0].passwordCredenziali]
  const {nomeUtente} = route.nomeUtente;
  const {chiaveAccesso} = route.password;


   
  if( nomeUtente == ArrCredenziali[0] && chiaveAccesso == ArrCredenziali[1]){
        {home}
  }

  else{

    {Login}

  }


}

export default Check



