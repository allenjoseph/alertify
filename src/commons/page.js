import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';

import styles from './styles.js';

export default class Page extends Component {
    render() {
        return (
            <View style={styles.page}>
                <View style={[styles.header, {paddingTop: (Platform.OS === 'ios') ? 20 : 0}]}>
                    <View style={styles.flex}/>
                    <View style={styles.flex}>
                        <Text style={[styles.headerText, styles.alignCenter]}>
                            {this.props.route.title}
                        </Text>
                    </View>
                    <View style={styles.flex}>
                        { this.props.route.index === 1 ? 
                            <TouchableHighlight onPress={this.props.selectAll} underlayColor="transparent">
                                <Text style={[styles.headerText, styles.alignEnd]}>All</Text>
                            </TouchableHighlight> :
                            null
                        }
                    </View>
                </View>
                <View style={styles.flex}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}