import React from "react";
import { Layout , Text  } from "@ui-kitten/components";
import styles from "./TitleProdotto.style";
import { View } from "react-native";

function TitleProdotto(props){
    return(
        <View style={styles.titleContainer}>
        <Text category='h1' style={styles.testoTitolo}>{props.name}</Text>
        </View>
    );
};

export default TitleProdotto;
