import React from "react";
import { Layout , ViewPager , RadioGroup , Radio , Card} from "@ui-kitten/components";
import { Image } from "react-native";
import styles from "./ScroolImage.style";



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
            source = {{uri: 'https://cdn.sklum.com/it/wk/1079151/sedia-in-velluto-glamm.jpg'}}/>
        </Layout>
        <Layout
          style={styles.imageContiner}
          level='1'>
           <Image 
            style = {styles.image}
            source = {{uri: 'https://cdn.sklum.com/it/wk/1079163/sedia-in-velluto-glamm.jpg'}}/>
        </Layout>
      </ViewPager>
      </Card>
      </>

    );
  }

  export default ScroolImage;

