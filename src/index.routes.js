import React from 'react';

import PAGE from './constants/page.enum.js'
import LoginPage from './views/auth/login.page.js';
import ListPage from './views/list/list.page.js';
import PreviewPage from './views/preview/preview.page.js';
import SignPage from './views/auth/sign.page.js';
import SuccessPage from './views/commons/success.page.js';

export let route = {
    login: { 
        id: PAGE.LOGIN, 
        title: 'Login'
    },
    list: { 
        id: PAGE.LIST, 
        title: 'Lista'
    },
    preview: { 
        id: PAGE.PREVIEW, 
        title: 'Previsualización'
    },
    sign: { 
        id: PAGE.SIGN, 
        title: 'Firma'
    },
    success: { 
        id: PAGE.SUCCESS, 
        title: 'Éxito :)'
    },
    error: { 
        id: PAGE.ERROR, 
        title: 'Error :('
    },
    renderScene: _renderScene
};

function _renderScene(route, navigator) {
    if(route.id === PAGE.LOGIN){
        return (<LoginPage navigator={navigator} route={route}/>);
    }

    if(route.id === PAGE.LIST){
        return (<ListPage navigator={navigator} route={route}/>);
    }

    if(route.id === PAGE.PREVIEW){
        return (<PreviewPage navigator={navigator} route={route}/>);
    }

    if(route.id === PAGE.SIGN){
        return (<SignPage navigator={navigator} route={route}/>);
    }

    if(route.id === PAGE.SUCCESS){
        return (<SuccessPage navigator={navigator} route={route}/>);
    }
}
