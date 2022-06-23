import React from "react";
import { Layout , ViewPager} from "@ui-kitten/components";
import { Image } from "react-native";
import styles from "./SxcrollView.style";



function ScroolImage(){
  
  
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    function ChangeImage(index){
      setSelectedIndex(index);
    }

    function shouldLoadComponent (index){
        return (index === selectedIndex);
    }
  
    return (
      <ViewPager
        selectedIndex={selectedIndex}
        shouldLoadComponent = {shouldLoadComponent}
        onSelect={ChangeImage}>
        <Layout
          style={styles.imageContiner}
          level='2'>
          <Image 
            style = {styles.image}
            source = {{uri: 'https://cdn.sklum.com/it/wk/1079151/sedia-in-velluto-glamm.jpg'}}/>
        </Layout>
        <Layout
          style={styles.imageContiner}
          level='2'>
           <Image 
            style = {styles.image}
            source = {{uri: 'https://cdn.sklum.com/it/wk/1079163/sedia-in-velluto-glamm.jpg'}}/>
        </Layout>
      </ViewPager>  
    );
  }

  export default ScroolImage;

