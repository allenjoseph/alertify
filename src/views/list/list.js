import React, { Component } from 'react';
import { View, ListView, RecyclerViewBackedScrollView } from 'react-native';

import styles from '../../constants/styles.js';
import Row from './row.js';

export default class List extends Component {
    render() {
        return (
            <ListView
                style={[styles.body]}
                dataSource={this.props.ds}
                renderRow={this._renderRow.bind(this) }
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                renderSeparator={this._renderSeparator}
                />
        );
    }

    _genRows() {
        let dataBlob = [];
        for (let ii = 1; ii <= 5; ii++) {
            dataBlob.push({ title: 'FILA ' + ii, selected: false });
        }
        return dataBlob;
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
        );
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <Row data={rowData} navigator={this.props.navigator} sectionId={sectionID} rowId={rowID}
                list={this.props.list} updateList={this.props.updateList.bind(this)}/>
        );
    }
}