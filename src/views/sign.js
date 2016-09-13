import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import Page from '../commons/page.js';
import Button from '../commons/button.js';
import styles from '../commons/styles.js';

export default class Sign extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={[styles.body, {margin:10}]}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Sign"
                    />
                </View>
                <View style={[styles.rows, styles.footer, styles.alignEnd]}>
                    <Button onPress={this._send.bind(this)}>Send</Button>
                </View>
            </Page>
        );
    }

    _send() {
        let thanksRoute = { title: '', index: 4 };

        this.props.navigator.replace(thanksRoute);
    }
}