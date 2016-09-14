import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Switch } from 'react-native';

import styles from '../../commons/styles.js';

export default class Item extends Component {
    render() {
        return (
            <TouchableHighlight onPress={ this._preview.bind(this) }>
                <View style={styles.item}>
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

    //<Switch onValueChange={ this._switch.bind(this) } value={this.props.data.selected}/>
    /*
    _switch() {
        let items = this.props.items.slice();

        items[this.props.rowId].selected = !items[this.props.rowId].selected;

        this.props.updateItems(items);
    }*/

    _preview() {
        let previewRoute = { title: 'Preview', index: 2 };

        this.props.navigator.replace(previewRoute);
    }
}