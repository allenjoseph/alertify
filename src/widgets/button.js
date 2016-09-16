import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor="#ddd" style={[styles.button, styles[this.props.color], this.props.style]}>
                <Text style={styles.text}>
                    {this.props.children.toUpperCase()}
                </Text>
            </TouchableHighlight>
        );
    }
}

let styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#666',
        minWidth: 100,
        padding: 10,
    },
    dark: {
        backgroundColor: '#111',
    },
});