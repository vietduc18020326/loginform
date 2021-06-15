import React, {useReducer, useEffect, useCallback} from 'react';
import {Button} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';

import Card from '../components/Card';
import Input from '../components/Input';
import Screen from '../components/Screen';
import Colors from '../constants/Colors';
import * as authThunks from '../store/thunks/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updateValidate = {
      ...state.inputValidates,
      [action.input]: action.isVaid,
    };
    let updateIsValid = true;
    for (const key in updateValidate) {
      updateIsValid = updateIsValid && updateValidate[key];
    }
    return {
      formIsValid: updateIsValid,
      inputValues: updateValues,
      inputValidates: updateValidate,
    };
  }
  return state;
};

const LoginScreen = props => {
  const isLoading = useSelector(state => state.auth.isLogin);
  const errorText = useSelector(state => state.auth.errorText);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidates: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });
  const changeHander = useCallback(
    (inputIndentifier, inputValue, inputValid) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isVaid: inputValid,
        input: inputIndentifier,
      });
    },
    [dispatchFormState],
  );
  const loginHandler = () => {
    dispatch(
      authThunks.login(
        formState.inputValues.email,
        formState.inputValues.password,
      ),
    );
  };
  useEffect(() => {
    if (errorText) {
      Alert.alert('A error occurred', errorText, ['okay']);
    }
  }, [errorText]);

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Welcome !</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.form}>
        <Card style={styles.authScreen}>
          <View>
            <Input
              id="email"
              label="E-mail"
              icon="user"
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              required
              email
              errorText="Please check valid email address"
              onInputChange={changeHander}
              initialValue={formState.inputValues.email}
              initiallyValid={formState.inputValidates.email}
            />
            <Input
              id="password"
              label="Password"
              icon="lock"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              errorText="Please enter a valid password"
              onInputChange={changeHander}
              initialValue={formState.inputValues.password}
              initiallyValid={formState.inputValidates.password}
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="large" color={Colors.primary} />
              ) : (
                <Button
                  title="Login"
                  onPress={loginHandler}
                  color={Colors.primary}
                  disabled={!formState.formIsValid}
                />
              )}
            </View>
          </View>
        </Card>
      </Animatable.View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accentColor,
    width: '100%',
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 26,
    marginBottom: 40,
    marginLeft: 20,
  },
  form: {
    flex: 4,
  },
  authScreen: {
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.28,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 10,
  },
});

export default LoginScreen;
