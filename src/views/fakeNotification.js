import React, { Component } from 'react';
import { View } from 'react-native';

import Page from '../commons/page.js';
import Button from '../commons/button.js';
import styles from '../commons/styles.js';

export default class FakeNotification extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={styles.centered}>
                    <Button onPress={this._onPress.bind(this)}>
                        Fake Click on Push Notification
                    </Button>
                </View>
            </Page>
        );
    }

    _onPress() {
        let nextRoute = { title: 'Select Items', index: 1 };

        this.props.navigator.replace(nextRoute);
    }
}