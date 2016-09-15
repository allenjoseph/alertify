import React, { Component } from 'react';
import { View } from 'react-native';

import Page from '../../widgets/page.js';
import Button from '../../widgets/button.js';
import styles from '../../constants/styles.js';
import { route } from '../../index.routes.js';

export default class LoginPage extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={styles.centered}>
                    <Button onPress={this._onPress.bind(this)}>
                        Entrar
                    </Button>
                </View>
            </Page>
        );
    }

    _onPress() {
        this.props.navigator.replace(route.list);
    }
}