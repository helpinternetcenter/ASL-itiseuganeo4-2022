import React from "react";
import { Layout , ViewPager , RadioGroup , Radio , Card} from "@ui-kitten/components";
import { Image } from "react-native";
import styles from "./ScroolImage.style";
import dati from "../../api/specificheProdotti.json"



function ScroolImage(){
  
  
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    function ChangeImage(index){
      setSelectedIndex(index);
    }

    function shouldLoadComponent (index){
        return (index === selectedIndex);
    }

    function BottomRadioGroup (props) {
      return (
        <RadioGroup
          {...props}
          style = {[props.styles , styles.RadioGroup]}
          selectedIndex={selectedIndex}
          onChange={ChangeImage}>
        <Radio>1</Radio>
        <Radio>2</Radio>
      </RadioGroup>
      );
    }
  
    return (
      <>
        <Card style = {{margin : 26 , borderRadius : 10}} status = 'primary' footer = {BottomRadioGroup} disabled = {true}>
        <ViewPager
        selectedIndex={selectedIndex}
        shouldLoadComponent = {shouldLoadComponent}
        onSelect={ChangeImage}>
        <Layout
          style={styles.imageContiner}
          level='1'>
          <Image 
            style = {styles.image}
            source = {dati.data[props.numeroRender].linkImmagini}/>
        </Layout>
        <Layout
          style={styles.imageContiner}
          level='1'>
           <Image 
            style = {styles.image}
            source = {dati.data[props.numeroRender].linkImmagini2}/>
        </Layout>
      </ViewPager>
      </Card>
      </>

    );
  }

  export default ScroolImage;

