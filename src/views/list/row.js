import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Switch, StyleSheet, Platform } from 'react-native';

import { route } from '../../index.routes.js';
import Check from '../../widgets/check.js';

export default class Row extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Check
                    onValueChange={this._switch.bind(this)}
                    value={this.props.data.selected}/>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <View style={styles.content}>
                        {this.props.data.values.map((o, i) => 
                            <Text style={styles.value} key={i}>{o.key}: {o.value}</Text>
                        )}
                        </View>
                    </View>
                    <TouchableHighlight onPress={this._preview.bind(this)} underlayColor="transparent" style={styles.right}>
                        <Text style={styles.textButton}>></Text>
                    </TouchableHighlight>
                </View>
            </View>
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
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        padding: 10,
    },
    row:{
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    content:{
        flexDirection: 'column',
    },
    value: {
        fontSize: 14,
        color: '#111',
    },
    left: {
        flex: 9,
        padding: 10,
    },
    right: {
        flex: 1,
        alignSelf: 'center',
    },
    textButton: {
        fontSize: 24,
        color: '#ccc',
    }
});