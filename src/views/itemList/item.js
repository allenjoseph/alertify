import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Switch } from 'react-native';

import styles from '../../commons/styles.js';

export default class Item extends Component {
    render() {
        return (
            <TouchableHighlight onPress={ this._highlight.bind(this) }>
                <View style={[styles.item, styles.bgLight]}>
                    <View style={[styles.rows]}>
                        <Text style={styles.textTitle}> {this.props.data.title} </Text>
                        <Switch onValueChange={ this._switch.bind(this) } value={this.props.data.selected}/>
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

    _switch() {
        let items = this.props.items.slice();

        items[this.props.rowId].selected = !items[this.props.rowId].selected;

        this.props.updateItems(items);
    }
}