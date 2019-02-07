import React,{Component} from 'react';
import PreLoader from "../components/PreLoader";
import * as firebase from 'firebase';
import {StyleSheet, FlatList , View} from 'react-native';
import {ListItem} from "react-native-elements";
import {NavigationActions} from 'react-navigation';
import ReservaButton from "../components/ReservaButton";
import ReservaVacio from "../components/ReservaVacio";


export default class Reservas extends Component{
    constructor(){
        super();
        this.state={
            reservas : [],
            loaded: false,
            reserva_logo: require('../../assets/icon.png')
        };

        this.refReserva = firebase.database().ref().child('reservas');
    }

    addReserva(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'addReserva'
        });
        this.props.navigation.dispatch(navigateAction);
    }


    componentDidMount (){
        this.refReserva.on('value', snapshot => {
            let reservas = [];
            snapshot.forEach(row =>{
                reservas.push({
                    id: row.key,
                    name: row.val().name,
                    descripcion: row.val().descripcion,
                    price: row.val().price
                })
            });

            this.setState({
                reservas,
                loaded: true
            });
        })
    }

    reservaDetail(reserva){

    }

    renderReserva(reserva){
        return(
            <ListItem
                containerStyle={styles.Item}
                titleStyle={styles.title}
                roundAvatar
                title={reserva.name}
                avatar={this.state.reserva_logo}
                onPress={() => this.reservaDetail(reserva)}
                rightIcon={{name: 'arrow-right', type:'font-awesome', style: styles.listIconStyle}}
            />
        )
    }

    render(){
        const {loaded, reservas} = this.state;
        if(!loaded){
            return <PreLoader/>
        };

        if(!reservas.length){
            return(
                <View>
                    <ReservaVacio text="No hay reservas disponibles"/>
                    <ReservaButton addReserva={this.addReserva.bind(this)}/>
                </View>
                );
        }
        return(
            <View>
                <FlatList
                    data={reservas}
                    renderItem={(data) => this.renderReserva(data.item)}
                />
                <ReservaButton addReserva={this.addReserva.bind(this)}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    title:{
        color: '#fff'
    },
    listIconStyle:{
        marginRight: 10,
        fontSize: 15,
        color:'#0000'
    },
    Item:{
        padding: 0,
        backgroundColor: '#ff173c'
    }
})