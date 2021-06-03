import React from 'react';
import {Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ErrorMessage = props => {
  return (
    <Animatable.View animation="fadeInLeft" duration={500}>
      <Text style={{color: 'red'}}>{props.errorText}</Text>
    </Animatable.View>
  );
};

export default ErrorMessage;
