import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ReservaVacio extends Component{
    render(){
        const {text} = this.props;
        return(
        <View style={styles.reservaEmptyView}>
            <Text style={styles.reservaEmptyText}>
                {text}
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    reservaEmptyView: {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    reservaEmptyText: {
        backgroundColor: "#ff173c",
        color: 'white',
        textAlign: 'center',
        padding: 20
    }
});