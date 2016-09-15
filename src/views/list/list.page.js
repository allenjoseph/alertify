import React, { Component } from 'react';
import { View, ListView, Alert } from 'react-native';

import Page from '../../widgets/page.js';
import Button from '../../widgets/button.js';
import styles from '../../constants/styles.js';
import List from './list.js';

export default class ListPage extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        list = this._genRows();
        this.state = {
            list: list,
            dataSource: this.ds.cloneWithRows(list)
        };
    }

    render() {
        return (
            <Page route={this.props.route} selectAll={this._selectAll.bind(this) }>
                <List 
                    ds={this.state.dataSource} 
                    list={this.state.list} 
                    updateList={this._updateList.bind(this)}
                    navigator={this.props.navigator}/>
            </Page>
        );
    }

    _updateList(list){
        let state = {
            list: list,
            dataSource: this.ds.cloneWithRows(list)
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
        let list = this.state.list.slice();

        for (let i = 0; i < list.length; i++) {
            list[i].selected = true;
        }

        this._updateList(list);
    }
}