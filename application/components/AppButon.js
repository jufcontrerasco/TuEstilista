import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

export default class AppButon extends Component {
    render() {
        const {action, iconName, iconColor, title, bgColor, color, type} = this.props;
        return(
          <Button
            onPress ={action}
            type={type}
            buttonStyle={{
                backgroundColor: bgColor,
                height: 45,
                marginBottom: 10,
            }}
            title={title}
            icon={
                <Icon
                    name={iconName}
                    size={15}
                    color={iconColor}
                />
            }
            text={title}
          >

          </Button>
        );
    }

}