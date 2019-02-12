import React, {Component} from 'react';
import {View, ScrollView, Text,StyleSheet, Image} from 'react-native';
import BackgroundImage from "./BackgroundImage";

export default class Producto extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../assets/manicure.jpg')}
                />
                <Text style={styles.name}>
                    {this.props.combo}
                </Text>
                <Text style={styles.descripcion}>
                    {this.props.descripcion}
                </Text>
                <Text style={styles.precio}>
                    Precio: ${this.props.precio}
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: "auto",
        height: 100,
        marginBottom: 10,

    },
    image:{
        width: "auto",
        height: 100,
        position: "relative",
    },
    name:{
        position: "absolute",
        marginTop: 1,
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: "#fff"
    },
    precio:{
        position: "absolute",
        marginTop: 70,
        marginLeft: 180,
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
    },
    descripcion:{
        position: "absolute",
        marginTop: 25,
        marginLeft: 10,
        fontSize: 15,
        color: "#fff"
    }
})