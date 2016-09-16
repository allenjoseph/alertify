import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Switch, StyleSheet } from 'react-native';

import { route } from '../../index.routes.js';

export default class Row extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this._preview.bind(this)} underlayColor="#dfdfdf">
                <View style={styles.wrapper}>
                    <Switch
                        onValueChange={this._switch.bind(this)} 
                        value={this.props.data.selected}/>
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>{this.props.data.title}</Text>
                        <View style={styles.rowContent}>
                        {this.props.data.values.map((o, i) => 
                            <Text style={styles.value} key={i}>{o.key}: {o.value}</Text>
                        )}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _switch(value) {
        let list = this.props.list.slice();
        list[this.props.rowId].selected = value;
        this.props.updateList(list);
    }

    _preview() {
        this.props.navigator.replace(route.preview);
    }
}

let styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        padding: 10,
    },
    row:{
        flex: 1,
        margin: 10,
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: '700',
    },
    rowContent:{
        flexDirection: 'column',
    },
    value: {
        fontSize: 14,
        color: '#111',
    },
});