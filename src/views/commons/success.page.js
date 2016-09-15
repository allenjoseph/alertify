import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Page from '../../widgets/page.js';
import styles from '../../constants/styles.js';

export default class SuccessPage extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={[styles.centered, styles.bgPrimary]}>
                    <Text style={[styles.textBig, styles.colorLight]}>
                        Éxito
                    </Text>
                </View>
            </Page>
        );
    }
}