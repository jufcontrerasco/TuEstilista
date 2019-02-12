import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButon from "../components/AppButon";
import {Card} from "react-native-elements";
import Toast from 'react-native-simple-toast';
import AppButtonFace from "../components/AppButtonFace";

import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
const Form = t.form.Form;

import * as firebase from 'firebase';


export default class RegisterEst extends Component{
    constructor(){
        super();

        this.state={
            user:{
                email: '',
                password: ''
            }
        };

        this.samePassword = t.refinement(t.String, (s)=>{
            return s === this.state.user.password;
        });

        this.user = t.struct({
            nombre: t.String,
            apellido: t.String,
            email: FormValidation.email,
            password: FormValidation.password,
            password_confirmation: this.samePassword,
        });

        this.options = {
            fields:{
                nombre:{
                    help: 'Introduce tu Nombre',
                },
                apellido:{
                    help: 'Introduce tu Apellido',
                },
                email:{
                    help: 'Introduce tu Email',
                    error: 'Formato incorrecto',
                    autoCapitalize: 'none',
                },
                password:{
                    help: 'Introduce tu contraseña',
                    error: 'La contraseña debe tener mas de 6 carecteres',
                    password: true,
                    secureTextEntry: true,
                },
                password_confirmation:{
                    help: 'Repite tu contraseña',
                    error: 'No coinciden las contraseñas',
                    password: true,
                    secureTextEntry: true,
                }
            }
        };

        this.validate = null;
    }

    register(){
        this.validate = this.refs.form.getValue();
        if(this.validate){
            firebase.auth().createUserWithEmailAndPassword(
                this.validate.email, this.validate.password
            )
                .then(() =>{
                    Toast.showWithGravity("Registro Exitoso, Bienvenido!", Toast.LONG, Toast.BOTTOM);
                })
                .catch(err =>{
                    Toast.showWithGravity(err.message, Toast.LONG, Toast.BOTTOM);
                })
        }
    }

    onChange(user){
        this.setState({user});

    }
    render(){
        return(

                <View style={{display: this.props.dp}}>
                    <Card wrapperStyle={{paddingLeft: 10}} title={"Registrate"}>
                        <Form
                            ref="form"
                            type={this.user}
                            options={this.options}
                            onChange={(v) => this.onChange(v)}
                            value={this.state.user}
                        />
                        <AppButon
                            bgColor="#f40431"
                            title=" Registrarme"
                            action={this.register.bind(this)}
                            iconName="user-plus"
                            iconSize={30}
                            iconColor="#fff"
                        />
                        <AppButon
                            bgColor="#ffff"
                            title=" Iniciar Sesión"
                            action={this.props.onPress}
                            iconName="sign-in"
                            iconSize={30}
                            type="outline"
                            iconColor="#f40431"
                            color="#f40431"
                        />
                        <AppButtonFace/>
                    </Card>
                </View>
        );
    }
}