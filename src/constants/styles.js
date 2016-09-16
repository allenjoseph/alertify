import { StyleSheet } from 'react-native';

export let base = {
    color: {
        primary: '#5D77E9',
        light: '#FFFFFF',
        dark: '#333333'
    },
    size: {
        title: 20,
        subheading: 16,
        body: 14,
        caption: 12,
        button: 14
    }
};

export default StyleSheet.create({
    flex: {
        // flex: 1,
    },
    centered: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    bgPrimary: {
        // backgroundColor: primaryColor,
    },
    bgLight: {
        // backgroundColor: lightColor,
    },
    text:{
        // fontSize: sizeNormal,
    },
    textTitle: {
        // fontSize: sizeNormal,
        // fontWeight: 'bold',
    },
    textBig: {
        // fontSize: sizeBig,
        // fontWeight: 'bold',
    },
    colorLight: {
        // color: lightColor,
    },
    rows: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    footer: {
        // margin: 10,
        // marginTop: 0,
    },
    separator: {
        // height: 0.5,
        // backgroundColor: darkColor,
    },
    row: {
        // padding: 10,
        // backgroundColor: lightColor,
    },
    button: {
        // backgroundColor: primaryColor,
        // color: lightColor,
        // fontSize: sizeNormal,
        // textAlign: 'center',
        // padding: 10,
        // margin: 5,
        // minWidth: 100,
    },
    buttonLight: {
        // backgroundColor: lightColor,
        // color: darkColor,
    },
    alignCenter: {
        // alignSelf: 'center'
    },
    alignEnd: {
        // alignSelf: 'flex-end'
    },
    input: {
        // height: 40,
        // borderBottomWidth: 0.5,
        // borderBottomColor: '#333333',
        // padding: 4,
    },
});