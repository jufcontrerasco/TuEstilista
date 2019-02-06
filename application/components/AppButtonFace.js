import React, {Component} from 'react';
import AppButon from "../components/AppButon";
import * as firebase from 'firebase';
import facebook from '../utils/faceboook';


export default class AppButtonFace extends Component{


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

render(){
    return(
        <AppButon
            bgColor="blue"
            title="   Facebook "
            action={this.facebook.bind(this)}
            iconName="facebook"
            iconSize={30}
            iconColor="#fff"
        />

    );
}

}