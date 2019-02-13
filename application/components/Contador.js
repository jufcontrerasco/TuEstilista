import React, {Component} from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native'
import AppButton from '../components/AppButton';
import { Text } from 'react-native-elements';

@inject('store')
@observer

export default class Contador extends Component {
    render () {

        const {store: {counterStore}} = this.props;

        return (
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text
                        h2
                        style={{textAlign: 'center', color: '#fff'}}
                    >
                        Aplicación contador con Mobx
                    </Text>

                    <AppButton
                        bgColor="rgba(111, 38, 74, 0.7)"
                        title="Incrementar contador"
                        action={() => counterStore.increment()}
                        iconName="plus"
                        iconColor="#fff"
                        setWidth={false}
                        iconSize={30}
                    />

                    <Text
                        h3
                        style={{textAlign: 'center', color: '#fff'}}
                    >
                        Contador actual: {counterStore.count}
                    </Text>

                    <AppButton
                        bgColor="rgba(111, 38, 74, 0.7)"
                        title="Decrementar contador"
                        action={() => counterStore.decrement()}
                        iconName="minus"
                        iconColor="#fff"
                        setWidth={false}
                        iconSize={30}
                    />

                </View>
        )
    }
}