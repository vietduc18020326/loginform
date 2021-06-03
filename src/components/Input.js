import React, {useReducer, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import ErrorMessage from './ErrorMessage';
import CheckInput from './CheckInput';
import useValidate from '../auth/useValidate';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = props => {
  const [errorText, setErrorText] = useState();

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: props.initiallyValid,
  });
  useEffect(() => {
    if (inputState.touched) {
      props.onInputChange(props.id, inputState.value, inputState.isValid);
    }
  }, [inputState, props.onInputChange]);
  const textChangHandler = text => {
    const validate = useValidate();
    setErrorText(validate.validateInput(text, props).errorText);
    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid: validate.validateInput(text, props).isValid,
    });
  };
  const blurHandler = () => {
    dispatch({type: INPUT_BLUR});
  };
  return (
    <View style={styles.form}>
      <Text>{props.label}</Text>
      <View style={styles.action}>
        <Icon name={props.icon} size={24} color="#05375a" />
        <TextInput
          {...props}
          style={styles.input}
          value={inputState.value}
          onChangeText={textChangHandler}
          onBlur={blurHandler}
        />
        <CheckInput isValid={inputState.isValid} touched={inputState.touched} />
      </View>
      {!inputState.isValid && inputState.touched && (
        <ErrorMessage errorText={errorText} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginTop: 5,
  },
  input: {
    color: '#05375a',
    flex: 1,
    paddingLeft: 5,
  },
  action: {
    flexDirection: 'row',
    paddingBottom: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
});

export default Input;
