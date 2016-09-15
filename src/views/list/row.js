import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Switch } from 'react-native';

import styles from '../../constants/styles.js';
import { route } from '../../index.routes.js';

export default class Row extends Component {
    render() {
        return (
            <TouchableHighlight onPress={ this._preview.bind(this) }>
                <View style={styles.row}>
                    <View style={[styles.rows]}>
                        <Text style={styles.textTitle}> {this.props.data.title} </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _highlight(){
        this.props.highlight(this.props.sectionId, this.props.rowId);
    }

    _preview() {
        this.props.navigator.replace(route.preview);
    }
}