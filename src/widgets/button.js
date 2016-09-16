import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor="#ddd">
                <Text style={[styles.button, styles[this.props.color]]}>
                    {this.props.children.toUpperCase()}
                </Text>
            </TouchableHighlight>
        );
    }
}

let styles = StyleSheet.create({
    button: {
        backgroundColor: '#666',
        color: '#fff',
        fontSize: 14,
        minWidth: 100,
        padding: 10,
        textAlign: 'center',
        fontWeight: '600',
    },
});