import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import LockNavigator from './LockNavigator';
import authStorage from '../auth/storage';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

const StartupNavigator = props => {
  const user = useSelector(state => state.auth.userId);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const restoreUser = async () => {
      setIsLoading(true);
      const userId = await authStorage.getUser();
      setIsLoading(false);
      if (userId) {
        dispatch(authActions.authenticate(userId.user_id));
      }
    };
    restoreUser();
  }, []);
  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return user ? (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <LockNavigator />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartupNavigator;
