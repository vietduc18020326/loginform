import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import Colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: Colors.accentColor}}
      shifting={true}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-home" size={24} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="ios-settings-outline" size={24} color={color} />
          ),
          title: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}
