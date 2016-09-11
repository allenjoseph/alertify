import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, StatusBar, Platform } from 'react-native';

export default class Page extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#5D77E9"
                    barStyle="light-content"
                />
                <View style={[styles.header, {paddingTop: (Platform.OS === 'ios') ? 20 : 0}]}>
                    <View/>
                    <Text style={[styles.title, {alignSelf: 'center'}]}>
                        {this.props.route.title}
                    </Text>
                    <View>
                        { this.props.route.index === 1 ? 
                            <TouchableHighlight onPress={this.props.selectAll} underlayColor="transparent">
                                <Text style={[styles.title, {alignSelf: 'flex-end'}]}>All</Text>
                            </TouchableHighlight> :
                            null
                        }
                    </View>
                </View>
                <View style={styles.body}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E0E0E0',
    },
    header: {
        backgroundColor: '#5D77E9',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
    },
    title: {
        flex: 1,
        color: '#F9FBFB',
        fontSize: 16,
        marginRight: 20,
        marginLeft: 20,
    },
});