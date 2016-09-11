import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Page from './commons/page.js';
import Button from './commons/button.js';

export default class Start extends Component {

    clickFakePushNotification() {
        this.props.navigator.replace({
            title: 'Select Items', 
            index: 1
        });
    }

    render() {
        return (
            <Page route={this.props.route}>
                <View style={styles.content}>
                    <Button onPress={this.clickFakePushNotification.bind(this)}>
                        Fake Click on Push Notification
                    </Button>
                </View>
            </Page>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});