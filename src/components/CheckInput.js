import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function CheckInput({isValid, touched}) {
  return (
    <View>
      {isValid && touched && (
        <Animatable.View animation="bounceIn" duration={500}>
          <Feather name="check-circle" color="green" size={20} />
        </Animatable.View>
      )}
    </View>
  );
}
