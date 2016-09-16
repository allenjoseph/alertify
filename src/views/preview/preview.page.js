import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, RecyclerViewBackedScrollView } from 'react-native';

import Page from '../../widgets/page.js';
import Button from '../../widgets/button.js';
import { route } from '../../index.routes.js';

export default class PreviewPage extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            title: 'Carta Fianza',
            subtitle: 'Cumplimiento',
            labelAccept: 'Aprobar',
            labelDecline: 'Rechazar',
            ds: this.ds.cloneWithRows(['Importe'])
        };
    }

    render() {
        return (
            <Page route={this.props.route}>
                <Text style={styles.title}>{this.state.title}</Text>
                <Text style={styles.subtitle}>{this.state.subtitle}</Text>
                <ListView
                    dataSource={this.state.ds}
                    renderRow={this._renderRow.bind(this) }
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                />
                <View style={styles.buttons}>
                    <Button style={styles.buttonDecline}>{this.state.labelDecline}</Button>
                    <Button style={styles.buttonAccept} color={'dark'}>{this.state.labelAccept}</Button>
                </View>
            </Page>
        );
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.row}>
                <Text style={styles.text}>{rowData}</Text>
            </View>
        );
    }

    _sign() {
        this.props.navigator.replace(route.sign);
    }
}

let styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60,
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        margin: 5,
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
    row: {
        padding: 10,
    }
});