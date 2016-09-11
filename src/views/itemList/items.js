import React, { Component } from 'react';
import { View, ListView, RecyclerViewBackedScrollView } from 'react-native';

import styles from '../../commons/styles.js';
import Item from './item.js';

export default class Items extends Component {
    render() {
        return (
            <ListView
                style={styles.body}
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
            dataBlob.push({ title: 'ITEM ' + ii, selected: false });
        }
        return dataBlob;
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
        );
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <Item data={rowData} sectionId={sectionID} rowId={rowID} highlight={highlightRow}
                items={this.props.items} updateItems={this.props.updateItems.bind(this)}/>
        );
    }
}