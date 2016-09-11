import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Page from '../commons/page.js';
import styles from '../commons/styles.js';

export default class Thanks extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={[styles.centered, styles.bgPrimary]}>
                    <Text style={[styles.textBig, styles.colorLight]}>
                        Thanks!
                    </Text>
                </View>
            </Page>
        );
    }
}