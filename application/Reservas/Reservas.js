import React,{Component} from 'react';
import PreLoader from "../components/PreLoader";
import * as firebase from 'firebase';
import {StyleSheet, FlatList , View, ScrollView} from 'react-native';
import {ListItem} from "react-native-elements";
import {NavigationActions} from 'react-navigation';
import ReservaButton from "../components/ReservaButton";
import ReservaVacio from "../components/ReservaVacio";
import Producto from "../components/Producto";


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
            routeName: 'AddReservas'
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
                containerStyle={styles.item}
                titleStyle={styles.title}
                title={`${reserva.name} (Capacidad: ${reserva.price})`}
                leftAvatar={{ source: this.state.reserva_logo }}
                rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: styles.listIconStyle}}
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
                <View style={{marginTop:50, flex: 1}}>
                    <ReservaVacio text="No hay reservas disponibles" />
                    <ReservaButton addReserva={this.addReserva.bind(this)}/>
                </View>

                );
        }
        return(
            <ScrollView>
                <View>
                <Producto combo={"Manicure Especial"} precio={"15000"} descripcion={"Gran promocion"}/>
                <Producto combo={"Manicure Especial"} precio={"15000"} descripcion={"Gran promocion"}/>
                <Producto combo={"Manicure Especial"} precio={"15000"} descripcion={"Gran promocion"}/>
                <Producto combo={"Manicure Especial"} precio={"15000"} descripcion={"Gran promocion"}/>
                <Producto combo={"Manicure Especial"} precio={"15000"} descripcion={"Gran promocion"}/>
                <Producto combo={"Manicure Especial"} precio={"15000"} descripcion={"Gran promocion"}/>
                <Producto combo={"Manicure Especial"} precio={"15000"} descripcion={"Gran promocion"}/>
                <ReservaButton addReserva={this.addReserva.bind(this)}/>
                </View>
            </ScrollView>

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
    item:{
        padding: 0,
        backgroundColor: '#f40431'
    }
})