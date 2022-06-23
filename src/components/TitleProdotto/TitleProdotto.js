import React from "react";
import {  Text , Button , Icon , TopNavigation , TopNavigationAction} from "@ui-kitten/components";
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


function TitleProdotto(props){

  const shakeIconRef = React.useRef();


  function BackIcon (props) {
    return(
      <Icon {...props} name = 'arrow-back'></Icon>
    );
  }

  
  function CarIcon (props) {
    return (
      <Icon {...props} 
        name = 'car'
        animation = 'shake'
        ref = {shakeIconRef}
        >
        </Icon>
    )
  }
  

    function renderBackAction (){
      return (
        <TopNavigationAction icon={BackIcon}/>
      );
    }

    function renderGoShopAction () {

      function StartAnimation(){
          shakeIconRef.current.startAnimation()
      }

      return (
        <TopNavigationAction icon = {CarIcon} onPress = {StartAnimation}/>
      );
    }

    return(
          <TopNavigation 
            alignment = 'center' 
            style = {styles.title}
            title = {props.name}
            accessoryLeft = {renderBackAction} 
            accessoryRight = {renderGoShopAction}>
          </TopNavigation>
    );
};

export default TitleProdotto;
