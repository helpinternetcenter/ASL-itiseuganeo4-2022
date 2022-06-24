import * as React from 'react';
import credenziali from "../dev/credenziali.json"
import Login from '../screens/login/login';
import Home from '../screens/home/home'
import { View } from 'react-native-web';




function Check({ navigation,route }) {
    const {nomeUtente , chiaveAccesso} = route.params;
    
    
    function ricerca (){

        var returnComponents;
        var ingresso = false;

        for(let i = 0; i < credenziali.data.length; i++){

            if(nomeUtente == credenziali.data[i].usernameCredenziali & chiaveAccesso == credenziali.data[i].passwordCredenziali){
                ingresso = true
                break;
            }
        }
    
        if(ingresso == true){
            returnComponents = <Home/>
        }
    
        else if(ingresso == false){
            returnComponents = <Login navigation={navigation}/>
        }

        
        return returnComponents
    
       

    }

    console.log(credenziali)
    console.log(nomeUtente)
    console.log(chiaveAccesso)

    


    

    return(
        
        // {credenziali.data.map((el) => {if(nomeUtente == el.usernameCredenziali && chiaveAccesso == el.passwordCredenziali) {<Home/>} else {<Login}})}

        // credenziali.data.map(el => ((nomeUtente == el.usernameCredenziali && chiaveAccesso == el.passwordCredenziali) ? ingresso = true : ingresso = false))

        ricerca()
        

    )
    


};

export default Check;



