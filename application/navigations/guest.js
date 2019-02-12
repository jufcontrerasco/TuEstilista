import React from 'react';
import {StackNavigator} from 'react-navigation';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import RegisterEstScreen from '../screens/RegisterEst';


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
        },
        Regestilista: {
            screen: RegisterEstScreen
        }
    },
    {
        initialRouteName: 'Start',
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#f40431',
                textAlign: 'center',
                display: 'none',
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