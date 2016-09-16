import React, { Component } from 'react';
import { View, ListView, RecyclerViewBackedScrollView, StyleSheet } from 'react-native';

import Row from './row.js';

export default class List extends Component {
    render() {
        return (
            <ListView
                dataSource={this.props.ds}
                renderRow={this._renderRow.bind(this) }
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                />
        );
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <Row data={rowData} navigator={this.props.navigator} sectionId={sectionID} rowId={rowID}
                list={this.props.list} updateList={this.props.updateList.bind(this)}/>
        );
    }
}