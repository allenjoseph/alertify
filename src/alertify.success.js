import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Page from './commons/page.js';

export default class Success extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Thanks!
                    </Text>
                </View>
            </Page>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5D77E9',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#F6F6F6',
    },
});