import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

import Screen from '../components/Screen';
import HeaderScreen from '../components/HeaderScreen';
import * as authThunks from '../store/thunks/auth';

const SettingScreen = props => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authThunks.logout());
  };

  return (
    <Screen>
      <HeaderScreen title="Setting" />
      <View style={styles.container}>
        <Text>Click button to log out!</Text>
        <View style={styles.buttonContainer}>
          <Button title="Log out" type="outline" onPress={logoutHandler} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default SettingScreen;
