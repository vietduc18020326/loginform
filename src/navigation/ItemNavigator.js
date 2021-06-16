import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import EditItemScreen from '../screens/EditItemScreen';

const Stack = createStackNavigator();

const ItemNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="edit" component={EditItemScreen} />
    </Stack.Navigator>
  );
};

export default ItemNavigator;
