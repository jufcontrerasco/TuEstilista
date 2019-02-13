import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
import {Card} from "react-native-elements";

import {NavigationActions} from 'react-navigation';
const Form = t.form.Form;
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';
import AppButon from "../components/AppButon";
import AppButtonFace from "../components/AppButtonFace";

export default class Login extends Component{
    constructor(){
        super();

        this.user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password
        });

        this.options = {
            fields:{
                email:{
                    error: 'No existen coincidencias',
                    autoCapitalize: 'none',
                },
                password:{
                    error: 'Contraseña incorrecta',
                    password: true,
                    secureTextEntry: true,
                }
            }
        }
    }

    login(){
        const validate = this.refs.form.getValue();
        if(validate){
            firebase.auth().signInWithEmailAndPassword(validate.email, validate.password)
                .then(() => {
                    Toast.showWithGravity("Bienvenido", Toast.LONG, Toast.BOTTOM);

                })
                .catch((error) =>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if(errorCode === 'auth/wrog-password'){
                        Toast.showWithGravity("Contraseña Incorrecta", Toast.LONG, Toast.BOTTOM);
                    }else{
                        Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                    }
                });
        }

    }


    render(){
        return(
                <View style={{display: this.props.dp, alignItems: 'center'}}>
                    <View style={styles.inicio}>
                        <Form
                            ref="form"
                            type={this.user}
                            options={this.options}
                        />
                        <AppButon
                            bgColor="#f40431"
                            title=" Iniciar Sesión "
                            action={this.login.bind(this)}
                            iconName="sign-in"
                            iconSize={30}
                            iconColor="#fff"
                        />
                        <AppButon
                            bgColor="#fff"
                            title=" Registrarse "
                            action={this.props.onPress}
                            iconName="user-plus"
                            type="outline"
                            iconSize={30}
                            iconColor="#f40431"
                            color="#f40431"
                        />
                        <AppButtonFace/>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    inicio:{
        margin: 10,
        width: 300,
    }
});