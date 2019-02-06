import React, {Component} from 'react';
import {View,StyleSheet, Image, ScrollView} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButon from "../components/AppButon";
import {NavigationActions} from 'react-navigation';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import facebook from '../utils/faceboook';
import Login from '../screens/Login';
import Register from '../screens/Register';


const styles = StyleSheet.create({
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default class Start extends Component{

    static navigationOptions ={
        title: 'Tu Estilista',
    };


    constructor(props) {
        super(props);
        this.state = {login: 'flex', reg:'none'};
    }


    changeReg(){
        this.setState( {login: 'none', reg:'flex'});
    }

    changeLog(){
        this.setState( {login: 'flex', reg:'none'});
    }


    login(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
    }

   /* register(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });
        this.props.navigation.dispatch(navigateAction);
    }*/

    async facebook (){ /*Retorna una promesa*/

        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
            facebook.config.application_id,
            {permissions: facebook.config.permissions,}
        );

        if(type === "sucess"){
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInWithCredential(credentials)
                .catch(error =>{
                    Toast.showWithGravity("Error accediendo a Facebook", Toast.LONG, Toast.BOTTOM);
                })
        }else if( type === "cancel"){
            Toast.showWithGravity("Inicio de sesión cancelado", Toast.LONG, Toast.BOTTOM);
        }else{
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInAndRetrieveDataWithCredential(credential)
                .catch((error) =>{
                    const errorMessage = error.message;
                    Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                })
        }
    }


    render() {
        return(
            <BackgroundImage>
                <ScrollView>
                <View style={{justifyContent:'center', flex: 1}}>


                    <View style={styles.logo}>
                        <Image source={require('../../assets/icon.png')}/>
                    </View>

                    <View style={{flex: 6}}>
                        <Login onPress={this.changeReg.bind(this)} dp={this.state.login}/>
                        <Register onPress={this.changeLog.bind(this)} dp={this.state.reg}/>
                    </View>


                </View>
                </ScrollView>
            </BackgroundImage>
        )
    }
}