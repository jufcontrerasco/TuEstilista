import React from 'react';
import {Text} from 'react-native-elements';
import PreLoader from "./application/components/PreLoader";
import * as firebase from 'firebase';
import GuestNavigation from './application/navigations/guest';



export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      isLogged: false, /* Sabes si esta lgoeado*/
      loaded: false /* Si cargo el componente */
    }
  }

  async componentDidMount (){

    let config = {
      apiKey: "AIzaSyAK6HF4Nvt431DJFPKZPJE4A7krXP7xVYE",
      authDomain: "tuestilistaapp.firebaseapp.com",
      databaseURL: "https://tuestilistaapp.firebaseio.com",
      projectId: "tuestilistaapp",
      storageBucket: "tuestilistaapp.appspot.com",
      messagingSenderId: "1032944257295"
    };

    firebase.initializeApp (config);


    await firebase.auth().onAuthStateChanged((user) =>{
      if(user !== null){
        this.setState({
          isLogged: true, /* Sabes si esta lgoeado*/
          loaded: true /* Si cargo el componente */
        });
      } else{
        this.setState({
          isLogged: false, /* Sabes si esta lgoeado*/
          loaded: true /* Si cargo el componente */
        });
      }
    })
  }



  render() {

    const {isLogged, loaded} = this.state;

    if( !loaded){
      return (
          <PreLoader/>
      );
    }
    if(isLogged){
      return (
          <GuestNavigation/>
      );
    } else{
      return (
          <GuestNavigation/>
          );
    }

  }
}
