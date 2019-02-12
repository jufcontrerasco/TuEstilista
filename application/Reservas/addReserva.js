import React, {Component} from 'react';
import BackgroundImage from "../components/BackgroundImage";
import {View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import {options, Reserva} from '../forms/restaurant';
import t from 'tcomb-form-native';
import {Card} from "react-native-elements";
const Form = t.form.Form;
import Toast from 'react-native-simple-toast';
import AppButon from "../components/AppButon";

export default class addReserva extends Component {
    constructor () {
        super();
        this.state = {
            reserva: {
                name: '',
                address: '',
                services: 0,
                description: ''
            }
        };
    }

    save () {
        const validate = this.refs.form.getValue();
        if(validate) {
            let data = {};
            const key = firebase.database().ref().child('reservas').push().key;
            data[`reservas/${key}`] = this.state.reserva;
            firebase.database().ref().update(data).then(() => {
                Toast.showWithGravity('Reserva dado de alta', Toast.LONG, Toast.BOTTOM);
                this.props.navigation.navigate('ListReservas');
            });
        }
    }

    onChange (reserva) {
        this.setState({reserva});
    }

    render () {
        const {reserva} = this.state;

        return (
            <BackgroundImage source={require('../../assets/icon.png')}>
                <View style={styles.container}>
                    <Card title="Formulario de restaurantes">
                        <View>
                            <Form
                                ref="form"
                                type={Reserva}
                                options={options}
                                value={reserva}
                                onChange={(v) => this.onChange(v)}
                            />
                        </View>
                        <AppButon
                            bgColor="rgba(255, 38, 74, 0.9)"
                            title="Dar de alta"
                            action={this.save.bind(this)}
                            iconName="plus"
                            iconSize={30}
                            iconColor="#fff"/>
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(231, 228, 224, 0.8)',
        padding: 10
    }
});