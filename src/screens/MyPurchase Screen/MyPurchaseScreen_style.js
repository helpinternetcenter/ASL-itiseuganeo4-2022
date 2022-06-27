import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    viewMain: {
       flex: 1,
       paddingTop: 20,
       paddingBottom:10,
    },

    viewProdotto: {
        width: '90%',
        backgroundColor: '#dedede',
        borderWidth: 0,
        // marginTop: '10%',
        marginLeft: '5%',
        borderRadius : 20,
    },

    viewMargin: {
        height: '1%',
        width: '40%',
        backgroundColor: '#6bc1d6',
        borderWidth: 0,
        marginLeft: '5%',
        borderRadius: 50,
    },




    testoTitolo: {
        marginTop: '3%',
        marginLeft: '5%',
        marginRight : '5%',
        marginBottom : '3%',
    },

    testoSottotitolo: {
        marginLeft: '5%',
    }
})

export default styles;