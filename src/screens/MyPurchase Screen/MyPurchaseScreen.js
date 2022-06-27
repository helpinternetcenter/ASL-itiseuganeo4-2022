import { IconRegistry, Button, Text, Layout, Card, Input, Select, IndexPath, SelectItem } from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import TitleProdotto from "../../components/TitleProdotto/TitleProdotto";
import { EvaIconsPack } from "@ui-kitten/eva-icons";


function Header(props) {
    return (
        <View {...props} style={{ paddingLeft: 15, }}>
            <Text category='h5'> DATI PERSONALI </Text>
        </View>
    )
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
    const [state, setState] = React.useState(null)
    const value = elencoTitoli[state - 1]
    

    function GoToLogin() {
        navigation.navigate('LOGIN');
    }

    function GoBackAction() {
        navigation.goBack();
    }

    function RenderOption(title) {
        return (
            <SelectItem title={title}></SelectItem>
        )
    }



    return (
        <>
            <TitleProdotto name='MyPurchaseScreen' action={GoBackAction}></TitleProdotto>
            <Layout level='3'>

                <Card
                    status='info'
                    header={Header}
                    style={{ margin: 26, borderRadius: 10 }}>
                    <Input
                        placeholder='Indirizzo'
                        label='Indirizzo'
                        value={address}
                        onChangeText={nextValue => setAddress(nextValue)}
                    />

                    <Select selectedIndex={state} onSelect={index => setState(index)} label='Stato' value={value}>
                        {elencoTitoli.map(RenderOption)}
                    </Select>

                    <Input
                    placeholder="Paese"
                    label='Paese'
                    value={country}
                    onChangeText={nextValue => setCountry(nextValue)}
                    
                    />

                    <Input

                    placeholder="Provincia"
                    label='Provincia'
                    value={province}
                    onChangeText={nextValue => setProvince(nextValue)}
                    />
                </Card>
            </Layout>
        </>



    );
}

export default MyPurchaseScreen;