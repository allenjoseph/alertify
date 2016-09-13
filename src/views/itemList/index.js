import React, { Component } from 'react';
import { View, ListView, Alert } from 'react-native';

import Page from '../../commons/page.js';
import Button from '../../commons/button.js';
import styles from '../../commons/styles.js';
import Items from './items.js';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        items = this._genRows();
        this.state = {
            items: items,
            dataSource: this.ds.cloneWithRows(items)
        };
    }

    render() {
        return (
            <Page route={this.props.route} selectAll={this._selectAll.bind(this) }>
                <Items 
                    ds={this.state.dataSource} 
                    items={this.state.items} 
                    updateItems={this._updateItems.bind(this)}
                    navigator={this.props.navigator}/>
            </Page>
        );
    }

    _updateItems(items){
        let state = {
            items: items,
            dataSource: this.ds.cloneWithRows(items)
        };

        this.setState(state);
    }

    _genRows() {
        let dataBlob = [];
        for (let ii = 0; ii < 5; ii++) {
            dataBlob.push({ title: 'ROW TITLE ' + ii, selected: false });
        }
        return dataBlob;
    }

    _selectAll() {
        let items = this.state.items.slice();

        for (let i = 0; i < items.length; i++) {
            items[i].selected = true;
        }

        this._updateItems(items);
    }
}