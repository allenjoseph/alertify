import React, { Component } from 'react';
import { Navigator, StatusBar, Platform } from 'react-native';

import { route } from './index.routes.js';

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
        return (
            <Navigator 
                initialRoute={route.login}
                renderScene={route.renderScene.bind(this)}
            />
        );
    }
}