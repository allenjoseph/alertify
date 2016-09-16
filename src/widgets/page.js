import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Platform, StyleSheet } from 'react-native';

export default class Page extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}></View>
                    <View style={styles.headerCenter}>
                        <Text style={styles.textSmall}></Text>
                        <Text style={styles.logo}></Text>
                    </View>
                    <View style={styles.headerRight}></View>
                </View>
                <View style={styles.body}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#dfdfdf',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    headerText: {
        padding: 10,
        textAlign: 'center',
    },
    headerLeft: {
        flex: 1,
    },
    headerCenter: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerRight: {
        flex: 1,
    },
    logo: {
        color: '#666',
        fontSize: 20,
        padding: 5,
        fontWeight: '800',
        fontStyle: 'italic',
    },
    textSmall: {
        fontSize: 12,
        color: '#8c8c8c',
        fontWeight: '100',
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
});