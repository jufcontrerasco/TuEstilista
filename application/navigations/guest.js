import React from 'react';
import {StackNavigator} from 'react-navigation';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

export default StackNavigator(
    {
        Start:{
            screen: StartScreen
        },
        Login: {
            screen: LoginScreen
        },
        Register: {
            screen: RegisterScreen
        }
    },
    {
        initialRouteName: 'Start',
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#f40431',
                textAlign: 'center',
            },
            headerTitleStyle:{
                textAlign: 'center',
                alignSelf: 'center',
                margin: 'auto',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold'
            }
        }
    }
)