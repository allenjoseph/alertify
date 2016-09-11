import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Text style={[styles.buttonText, styles[this.props.color]]}>
                {this.props.children}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        backgroundColor: '#5D77E9',
        fontSize: 16,
        color: '#F6F6F6',
        textAlign: 'center',
        padding: 10,
        margin: 2,
        minWidth: 100
    },
    light: {
        backgroundColor: '#F6F6F6',
        color: '#333333',
    }
});