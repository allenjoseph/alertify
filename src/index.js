import React, { Component } from 'react';
import { Navigator, StatusBar, Platform } from 'react-native';

import FakeNotification from './views/fakeNotification.js';
import Thanks from './views/thanks.js';
import ItemList from './views/itemList/index.js';

export default class App extends Component {
    constructor(props){
        super(props);

        if(Platform.OS === 'android'){
            StatusBar.setBackgroundColor('#5D77E9');
        }
        if(Platform.OS === 'ios'){
            StatusBar.setBarStyle('light-content');
        }
    }

    render() {
        let initialRoute = {title: 'Notification', index: 0};

        return (
            <Navigator 
                initialRoute={initialRoute}
                renderScene={this._renderScene.bind(this)}
            />
        );
    }

    _renderScene(route, navigator){
        if(route.index === 0){
            return (<FakeNotification navigator={navigator} route={route}/>);
        }

        if(route.index === 1){
            return (<ItemList navigator={navigator} route={route}/>);
        }

        if(route.index === 2){
            return (<Thanks navigator={navigator} route={route}/>);
        }
    }
}