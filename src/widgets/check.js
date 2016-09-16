import React, { Component } from 'react';
import { Switch, Platform } from 'react-native';
import Checkbox from 'react-native-android-checkbox';

export default class Check extends Component {
    render() {
        let checkbox = Platform.OS === 'android' ? 
                <Checkbox
                    onValueChange={this.props.onValueChange}
                    value={this.props.value}/> :
                <Switch
                    onValueChange={this.props.onValueChange} 
                    value={this.props.value}/>;

        return checkbox;
    }
}