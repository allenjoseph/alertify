import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Platform } from 'react-native';

import Page from '../../widgets/page.js';
import Button from '../../widgets/button.js';
import { route } from '../../index.routes.js';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Aprobación\nde Carta Fianza',
            labelCard: 'Ingresa tu número de tarjeta empresarial',
            card: '',
            labelRememberCard: 'Recordar',
            rememberCard: true,
            labelPassword: 'Ingresa tu clave de internet',
            password: '',
            labelPasswordHelp: '¿Cómo genero mi clave de internet?',
            labelLogin: 'Ingresar'
        };
    }

    render() {
        return (
            <Page route={this.props.route}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>{this.state.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{this.state.labelCard}</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={Platform.OS === 'ios'?'number-pad':'numeric'}
                            onChangeText={(card) => this.setState({card})}
                            value={this.state.card}/>
                        <Text style={[styles.label, styles.labelLight]}>{this.state.labelRememberCard}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{this.state.labelPassword}</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={Platform.OS === 'ios'?'number-pad':'numeric'}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}/>
                        <Text style={[styles.label, styles.labelLight]}>{this.state.labelPasswordHelp}</Text>
                    </View>
                    <View>
                        <Button onPress={this._onPress.bind(this)}>
                            {this.state.labelLogin}
                        </Button>
                    </View>
                </View>
            </Page>
        );
    }

    _onPress() {
        this.props.navigator.replace(route.list);
    }
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        borderColor: 'lightgray', 
        borderWidth: 1
    },
    label: {
        textAlign: 'center',
        margin: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        margin: 20,
        textAlign: 'center',
    },
    labelLight: {
        color: '#999',
    },
});