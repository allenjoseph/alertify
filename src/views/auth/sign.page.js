import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import Page from '../../widgets/page.js';
import Button from '../../widgets/button.js';
import styles from '../../constants/styles.js';
import { route } from '../../index.routes.js';

export default class SignPage extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={[styles.body, {margin:10}]}>
                    <TextInput 
                        style={styles.input}
                        keyboardType={'number-pad'}
                        placeholder="Ingresa token"
                    />
                </View>
                <View style={[styles.rows, styles.footer, styles.alignEnd]}>
                    <Button onPress={this._send.bind(this)}>Firmar</Button>
                </View>
            </Page>
        );
    }

    _send() {
        this.props.navigator.replace(route.success);
    }
}