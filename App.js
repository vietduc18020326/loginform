import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import StartupNavigator from './src/navigation/StartupNavigator';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StartupNavigator />
    </Provider>
  );
}
