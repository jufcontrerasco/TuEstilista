import React from 'react';
import ReservasScreen from "../Reservas/Reservas";
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
        ListRestaurants:{
            screen: ReservasScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Reservas',
                drawerIcon:  ({tintColor}) => (<Icon name="home" size={24} style={{color: tintColor}}/>),
                headerLeft: leftIcon(navigation, 'bars')
            })

        }
    }
);

export default DrawerNavigator(
    {
        ReservasScreen:{
            screen: reservasScreenStack
        }
    },
    {
        drawerBackgroundColor : "blue",
        contentOptions:{
            activateTintColor: "white",
            activateBackgroundColor: 'transparent',
            inactiveTintColor: "white",
            itemsContainerStyle: {
                marginVertical: 0,
            }
        },

    }
)