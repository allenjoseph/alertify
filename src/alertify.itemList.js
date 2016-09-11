import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight, RecyclerViewBackedScrollView, Switch, Alert } from 'react-native';

import Page from './commons/page.js';
import Button from './commons/button.js';

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        let items = this._genRows();
        this.state = {
            items: items,
            dataSource: this.ds.cloneWithRows(items)
        };
    }

    clickCancel() {

    }

    clickSend() {
        Alert.alert(
            'Please Confirm',
            'I want to send all items selected.',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => {
                    console.log('OK Pressed');
                    this.props.navigator.replace({
                        title: '', 
                        index: 2
                    });
                } },
            ]
        );
    }

    selectAll() {
        let items = this.state.items.slice();
        for (let i = 0; i < items.length; i++) {
            items[i].selected = true;
        }
        this.setState({
            items: items,
            dataSource: this.ds.cloneWithRows(items)
        });
    }

    render() {
        return (
            <Page route={this.props.route} selectAll={this.selectAll.bind(this) }>
                <ListView
                    style={styles.items}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this) }
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                    renderSeparator={this._renderSeparator}
                    />
                <View style={styles.footer}>
                    <Button onPress={this.clickCancel} color={'light'}>Cancel</Button>
                    <Button onPress={this.clickSend.bind(this)}>Send</Button>
                </View>
            </Page>
        );
    }

    _genRows() {
        let dataBlob = [];
        for (let ii = 0; ii < 5; ii++) {
            dataBlob.push({ title: 'ROW TITLE ' + ii, selected: false });
        }
        return dataBlob;
    }

    _switch(rowID) {
        let items = this.state.items.slice();
        items[rowID].selected = !items[rowID].selected;

        this.setState({
            items: items,
            dataSource: this.ds.cloneWithRows(items)
        });
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableHighlight onPress={() => { highlightRow(sectionID, rowID) } }>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>{rowData.title}</Text>
                    <Switch
                        onTintColor="#29D3B2"
                        onValueChange={() => this._switch(rowID) }
                        value={rowData.selected} />
                </View>
            </TouchableHighlight>
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{ height: 10 }}
                />
        );
    }
}

const styles = StyleSheet.create({
    items: {
        flex: 9,
        margin: 10,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});