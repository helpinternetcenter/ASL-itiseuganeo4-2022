import React from "react";
import {  Text , Button , Icon} from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "react-native";
import styles from "./TitleProdotto.style";

import { View } from "react-native";


function ArrowIcon(props){

  const [secureTextEntry, setSecureTextEntry] = React.useState(false);

  function Change () {
    return(
      setSecureTextEntry(!secureTextEntry)
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Change}>
      <Icon {...props} name= 'arrow-back' fill = {secureTextEntry ? 'black' : '#8F9BB3' }></Icon>
    </TouchableWithoutFeedback>
  );
}

function BackIcon () {
  <Icon {...props}></Icon>
}

function renderBackAction (props){
  <TopNavigationAction icon={BackIcon}/>
}

function TitleProdotto(props){
    return(
        <View style={styles.titleContainer}>   
          <TopNavigation alignment = 'center' title = 'Eva Application' acessoryLeft = ></TopNavigation>
        </View>
    );
};

export default TitleProdotto;
