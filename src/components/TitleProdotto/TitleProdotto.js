import React from "react";
import {  Text , Button , Icon , TopNavigation , TopNavigationAction} from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "react-native";
import {PurchaseScreen} from "../../screens/navigaitor";
import styles from "./TitleProdotto.style";

import { View } from "react-native";




function TitleProdotto(props , ){

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
        <TopNavigationAction icon={BackIcon} onPress = {props.action}/>
      );
    }

    function renderGoShopAction () {

      function  GoOnPurchaseScreen(){
          shakeIconRef.current.startAnimation()
          props.action2()


      }

      return (
        <TopNavigationAction icon = {CarIcon} onPress = {GoOnPurchaseScreen}/>
      );
    }

    return(
      <>
          <View style = {{ backgroundColor: '#6bc1d6', height : '3%' , width : '100%' }}></View>
          <TopNavigation 
            alignment = 'center' 
            style = {styles.title}
            title = {props.name}
            accessoryLeft = {renderBackAction} 
            accessoryRight = {renderGoShopAction}>
          </TopNavigation>
      </>
    );
};

export default TitleProdotto;
