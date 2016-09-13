import { StyleSheet } from 'react-native';

let primaryColor = '#5D77E9';
let backgroundColor= '#E0E0E0';
let lightColor = '#FFFFFF';
let darkColor = '#333333';
let sizeNormal = 16;
let sizeBig = 40;
let sizeHeader = 60;

export default StyleSheet.create({
    flex: {
        flex: 1,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgPrimary: {
        backgroundColor: primaryColor,
    },
    bgLight: {
        backgroundColor: lightColor,
    },
    text:{
        fontSize: sizeNormal,
    },
    textTitle: {
        fontSize: sizeNormal,
        fontWeight: 'bold',
    },
    textBig: {
        fontSize: sizeBig,
        fontWeight: 'bold',
    },
    colorLight: {
        color: lightColor,
    },
    page:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: backgroundColor,
    },
    body: {
        flex: 9,
    },
    rows: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        margin: 10,
        marginTop: 0,
    },
    separator: {
        height: 1,
    },
    item: {
        padding: 10,
        backgroundColor: lightColor,
    },
    button: {
        backgroundColor: primaryColor,
        color: lightColor,
        fontSize: sizeNormal,
        textAlign: 'center',
        padding: 10,
        margin: 5,
        minWidth: 100,
    },
    buttonLight: {
        backgroundColor: lightColor,
        color: darkColor,
    },
    alignCenter: {
        alignSelf: 'center'
    },
    alignEnd: {
        alignSelf: 'flex-end'
    },
    header: {
        backgroundColor: primaryColor,
        height: sizeHeader,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    headerText: {
        color: lightColor,
        fontSize: sizeNormal,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderWidth: 0.5,
        borderColor: '#333333',
        backgroundColor: lightColor,
        padding: 4,
    },
});