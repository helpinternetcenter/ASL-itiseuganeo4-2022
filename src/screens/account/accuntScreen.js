import * as React from 'react'
import TitleProfile from '../../components/account/TitleProfile'
import DatiAnagrafici from '../../components/account/DatiAnagrafici'

import { StyleSheet, View, ScrollView } from 'react-native'
import utente from '../../api/credenziali.json'

function AccountScreen () {
    return (
        <View style={styles.container}>
            <TitleProfile style={{ flex: 4 }} valore={utente.data[1].nomeCredenziali} />
            <View style={{ flex: 15 }}>
                <ScrollView>
                    <DatiAnagrafici/>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        flex: 4
    },
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default AccountScreen
