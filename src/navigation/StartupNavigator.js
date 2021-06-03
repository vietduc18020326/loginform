import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import LockNavigator from './LockNavigator';
import authStorage from '../auth/storage';
import * as authActions from '../store/actions/auth';

const StartupNavigator = props => {
  const user = useSelector(state => state.auth.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreUser = async () => {
      const userId = await authStorage.getUser();
      console.log(userId);
      if (userId) dispatch(authActions.authenticate(userId.user_id));
    };
    restoreUser();
  }, []);

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

export default StartupNavigator;
