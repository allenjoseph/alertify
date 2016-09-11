import React, { Component } from 'react';
import { Navigator, StatusBar, View } from 'react-native';

import Start from './alertify.start.js';
import ItemList from './alertify.itemList.js';
import Success from './alertify.success.js';

export default class AlertifyProject extends Component {

    renderScene(route, navigator){
        if(route.index === 0){
            return (
                <Start navigator={navigator} route={route}/>
            );
        }

        if(route.index === 1){
            return (
                <ItemList navigator={navigator} route={route}/>
            );
        }

        if(route.index === 2){
            return (
                <Success navigator={navigator} route={route}/>
            );
        }
    }

    render() {
        let initialRoute = {title: 'Push Notification', index: 0};

        return (
            <Navigator 
                initialRoute={initialRoute}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}