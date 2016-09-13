import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Page from '../commons/page.js';
import Button from '../commons/button.js';
import styles from '../commons/styles.js';

export default class Preview extends Component {
    render() {
        return (
            <Page route={this.props.route}>
                <View style={styles.body}>
                    <ScrollView>
                        <View style={styles.item}>
                            <Text style={styles.textTitle}> PREVIEW TITLE </Text>
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
                    <Button onPress={this._sign.bind(this)} color={'buttonLight'}>Cancel</Button>
                    <Button onPress={this._sign.bind(this)}>Accept</Button>
                </View>
            </Page>
        );
    }

    _sign() {
        let signRoute = { title: 'Sign', index: 3 };

        this.props.navigator.replace(signRoute);
    }
}