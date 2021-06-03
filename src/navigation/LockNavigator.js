import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import IntroScreen from '../screens/IntroScreen';

const Stack = createStackNavigator();

const LockNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="intro" component={IntroScreen} />
      <Stack.Screen name="signin" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LockNavigator;
