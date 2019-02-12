import React from 'react';
import ReservasScreen from "../Reservas/Reservas";
import AddReservas from "../Reservas/addReserva";
import LogoutScreen from "../screens/Logout";
import {DrawerNavigator, StackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

const navigationOption = {
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
};

const leftIcon = (navigation, icon) => <Icon
    name = {icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.navigate('DrawerOpen')}
/>;

const rightIcon = (navigation, icon) => <Icon
    name = {icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.navigate('ListReservas')}
/>;

const  reservasScreenStack = StackNavigator(
    {
        ListReservas:{
            screen: ReservasScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Tu Estilista',
                drawerIcon:  <Icon name="home" size={24} style={{color: "#fff"}}/>,
                headerLeft: leftIcon(navigation, 'bars')
            })

        },
        AddReservas:{
            screen: AddReservas,
            navigationOptions: ({navigation}) => ({
                title: 'Añadir Reserva',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })

        }

    }
);

const logoutScreenStack = StackNavigator(
    {
    LogoutScreen: {
        screen: LogoutScreen,
        navigationOptions:({navigation}) => ({
            title: 'Cerrar sesión',
            drawerIcon: <Icon name="sign-out" size={24} style={{color: "#fff"}}/>,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })
        }
    }
);

export default DrawerNavigator(
    {
        ReservasScreen:{
            screen: reservasScreenStack
        },
        LogoutScreen:{
            screen: logoutScreenStack
        }
    },
    {
        drawerBackgroundColor : "#f40431",
        contentOptions:{
            activateTintColor: "#fff",
            activateBackgroundColor: 'transparent',
            inactiveTintColor: "#fff",
            itemsContainerStyle: {
                marginVertical: 0,
            }
        },

    }
)