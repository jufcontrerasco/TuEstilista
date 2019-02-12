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
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class Start extends Component{

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


    regEstilista(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Regestilista'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return(
            <BackgroundImage>
                <ScrollView>
                <View style={{justifyContent:'center', flex: 1}}>


                    <View style={styles.logo}>
                        <Image style={{ width: 80, height: 80, marginTop: 40}} source={require('../../assets/icon.png')}/>
                    </View>

                    <View style={{flex: 6}}>
                        <Login onPress={this.changeReg.bind(this)} dp={this.state.login}/>
                        <Register onPress={this.changeLog.bind(this)} dp={this.state.reg}/>
                    </View>

                    <View style={{alignItems: 'center'}}>
                    <View style={{width: 300}}>
                        <AppButon
                            bgColor="#f40431"
                            title=" Trabaja con Nosotros "
                            action={this.regEstilista.bind(this)}
                            iconName="sign-in"
                            iconSize={30}
                            iconColor="#fff"
                        />
                    </View>
                    </View>


                </View>

                </ScrollView>
            </BackgroundImage>
        )
    }
}