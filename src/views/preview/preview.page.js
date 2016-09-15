import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Page from '../../widgets/page.js';
import Button from '../../widgets/button.js';
import styles from '../../constants/styles.js';
import { route } from '../../index.routes.js';

export default class PreviewPage extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={styles.body}>
                    <ScrollView>
                        <View style={styles.row}>
                            <Text style={styles.textTitle}> Previsualización </Text>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam magna, porttitor eget fringilla sit amet, dapibus non libero. Curabitur viverra.
                            </Text> 
                        </View>
                    </ScrollView>
                </View>
                <View style={[styles.rows, styles.footer]}>
                    <Button onPress={this._sign.bind(this)} color={'buttonLight'}>Cancelar</Button>
                    <Button onPress={this._sign.bind(this)}>Aceptar</Button>
                </View>
            </Page>
        );
    }

    _sign() {
        this.props.navigator.replace(route.sign);
    }
}