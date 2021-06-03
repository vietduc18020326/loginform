import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import HeaderScreen from '../components/HeaderScreen';

const HomeScreen = props => {
  return (
    <Screen>
      <HeaderScreen title="Home" />
      <View style={styles.container}>
        <Text>Home Screen!</Text>
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
});

export default HomeScreen;
