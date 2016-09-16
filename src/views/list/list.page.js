import React, { Component } from 'react';
import { View, ListView, Alert, StyleSheet, Text } from 'react-native';

import Page from '../../widgets/page.js';
import Button from '../../widgets/button.js';
import List from './list.js';
import Check from '../../widgets/check.js';

export default class ListPage extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        list = this._genRows();
        this.state = {
            title: '20 Carta(s) Fianza pendientes por probar',
            labelSelectAll: 'Seleccionar todas',
            selectAll: false,
            list: list,
            dataSource: this.ds.cloneWithRows(list),
            labelAccept: 'Aprobar',
            labelDecline: 'Rechazar'
        };
    }

    render() {
        return (
            <Page route={this.props.route}>
                <Text style={styles.title}>{this.state.title}</Text>
                <View style={styles.selectAll}>
                    <Check
                        onValueChange={this._selectAll.bind(this)}
                        value={this.state.selectAll}/>
                    <Text style={styles.labelSelectAll}>{this.state.labelSelectAll}</Text>
                </View>
                <List 
                    ds={this.state.dataSource} 
                    list={this.state.list} 
                    updateList={this._updateList.bind(this)}
                    navigator={this.props.navigator}/>
                <View style={styles.buttons}>
                    <Button style={styles.buttonDecline}>{this.state.labelDecline}</Button>
                    <Button style={styles.buttonAccept} color={'dark'}>{this.state.labelAccept}</Button>
                </View>
            </Page>
        );
    }

    _updateList(list, selectAll){
        let state = {
            selectAll: !!selectAll,
            list: list,
            dataSource: this.ds.cloneWithRows(list)
        };

        this.setState(state);
    }

    _genRows() {
        let dataBlob = [
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000,000'}], selected: false },
            { title: 'Licitación', values: [{key: 'Importe', value: '$ 200,700.88'}], selected: false },
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000'}], selected: false },
            { title: 'Licitación', values: [{key: 'Importe', value: '$ 50,000,000'}], selected: false },
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000,000'}], selected: false },
            { title: 'Licitación', values: [{key: 'Importe', value: '$ 3,000,000'}], selected: false },
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000,000'}], selected: false },
            { title: 'Licitación', values: [{key: 'Importe', value: '$ 50,000,000'}], selected: false },
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000,000'}], selected: false },
            { title: 'Licitación', values: [{key: 'Importe', value: '$ 3,000,000'}], selected: false },
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000,000'}], selected: false },
            { title: 'Licitación', values: [{key: 'Importe', value: '$ 50,000,000'}], selected: false },
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000,000'}], selected: false },
            { title: 'Licitación', values: [{key: 'Importe', value: '$ 3,000,000'}], selected: false },
            { title: 'Cumplimiento', values: [{key: 'Importe', value: '$ 100,000,000'}], selected: false }
        ];
        return dataBlob;
    }

    _selectAll(value) {
        let list = this.state.list.slice();

        for (let i = 0; i < list.length; i++) {
            list[i].selected = value;
        }

        this._updateList(list, value);
    }
}

let styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 60,
        marginRight: 60,
        textAlign: 'center',
    },
    selectAll: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        padding: 10
    },
    labelSelectAll: {
        margin: 10,
        fontSize: 14,
        flex: 1,
        color: '#999',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonDecline: {
        flex: 1,
    },
    buttonAccept: {
        flex: 3,
    },
});