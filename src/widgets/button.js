import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../constants/styles.js';

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Text style={[styles.button, styles[this.props.color]]}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        );
    }
}