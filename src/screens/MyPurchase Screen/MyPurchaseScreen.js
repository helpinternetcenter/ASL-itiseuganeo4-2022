import React, { useState } from "react";
import { ScrollView, View,Alert,Modal,StyleSheet,Pressable} from "react-native";
import { IconRegistry, Button, Text, Layout, Card, Input, Select, SelectItem, RadioGroup, Radio, Divider, IndexPath } from "@ui-kitten/components";
import TitleProdotto from "../../components/TitleProdotto/TitleProdotto";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import styles from './MyPurchaseScreen_style'



function CredictCard(props) {

    return (
        <View {...props} style={{ paddingLeft: 15, }}>
            <Text category='h5'> CARTA CREDITO</Text>
        </View>

    )
}

function BottomRadioGroup(props) {
    return (
        <RadioGroup
            style = {props.style}
            selectedIndex={props.value}
            onChange={(index) => (props.action(index))}>
            <Radio>PostePay</Radio>
            <Radio>PayPal</Radio>
            <Radio>Visa</Radio>
            <Radio>Mastercard</Radio>
        </RadioGroup>
    );
}


function MyPurchaseScreen({ navigation }) {
    const elencoTitoli = [
        'Italy',
        'Germany',
        'USA',
        'England',
        'Poland',
        'Spain',
        'Portugal',
        'France'
    ]

    const [address, setAddress] = React.useState('')
    const [province, setProvince] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [payment, setPayment] = React.useState(0)
    const [state, setState] = React.useState(new IndexPath(0))
    const value = elencoTitoli[state - 1]
    const [popUp, setPopUp] = useState(false)



    function GoBackAction() {
        navigation.goBack();
    }

    function RenderOption(title) {
        return (
            <SelectItem title={title}></SelectItem>
        )
    }

    function Allerta(){

        Alert.alert("Modal Has been closed")
        setModalVisible(!modalVisible)
    }



    return (
        <>
            <TitleProdotto name='MyPurchaseScreen' action={GoBackAction}></TitleProdotto>
             

            
            <ScrollView>
                <Layout level='3' style={styles.viewMain}>

                    <View style={styles.viewProdotto}>
                        <Text category='h3' style={styles.testoTitolo}> Dati Personali </Text>
                        <View style={styles.viewMargin}></View>
                        <Input
                            placeholder='Indirizzo'
                            label='Indirizzo'
                            value={address}
                            style={styles.testoTitolo}
                            onChangeText={nextValue => setAddress(nextValue)}
                        />

                        <Select selectedIndex={state} onSelect={(index) => setState(index)} label='Stato' value={value} style={styles.testoTitolo}>
                            {elencoTitoli.map(RenderOption)}
                        </Select>

                        <Input
                            style={styles.testoTitolo}
                            placeholder="Paese"
                            label='Paese'
                            value={country}
                            onChangeText={nextValue => setCountry(nextValue)}

                        />

                        <Input
                            placeholder="Provincia"
                            style={{ ...styles.testoTitolo, paddingBottom: 20 }}
                            label='Provincia'
                            value={province}
                            onChangeText={nextValue => setProvince(nextValue)}
                        />
                    </View>

                    <View style={{ ...styles.viewProdotto, marginTop : 20 , marginBottom : 40 }}>
                        <Text category='h3' style={styles.testoTitolo}> Pagamento </Text>
                        <View style={styles.viewMargin}></View>
                        <BottomRadioGroup action={setPayment} value={payment} style = {styles.testoTitolo}></BottomRadioGroup>
                    </View>

                    <Divider style={{ color: 'black', backgroundColor: '#6bc1d6', marginBottom: 10, }} />
                    <Button  onPress={() => setPopUp(true)} style={{ appearance:'ghost', marginLeft: '10%', marginRight: '10%' , marginBottom : 50}} >
                        CONFERMA
                    </Button>


                </Layout>
            </ScrollView>

            <Modal animationType="slide" transparent={true} visible={popUp} onRequestClose={Alert} >
                <View style = {styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style = {styles.modalText}>Hai confermato l'acquisto</Text>
                        <Button style = {styles.button} onPress = {()  => setPopUp(!popUp)}>Ok</Button>
                    </View>
                </View>
            </Modal>

        </>



    );
}

export default MyPurchaseScreen;