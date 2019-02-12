import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButon from "./AppButon";


export default class ReservaButton extends Component{
    render(){
        const {addReserva} = this.props;
        return(
            <View style={styles.buttonContainer}>
                <AppButon
                    bgColor="#f40431"
                    title="  Reservar Servicio"
                    action={addReserva}
                    iconName="plus"
                    iconSize={30}
                    iconColor="#fff"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop: 20,
        marginBottom: 20,
        alignItems:"center",
        justifyContent:"flex-end",

    },
    button:{
      height: 45,
      width: 150,
    }
});