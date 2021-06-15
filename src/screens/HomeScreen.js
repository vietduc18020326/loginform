import React, {useEffect} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

import Screen from '../components/Screen';
import HeaderScreen from '../components/HeaderScreen';

const HomeScreen = props => {
  const size = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(size, {
      toValue: 14,
      duration: 2000,
      easing: Easing.elastic(4),
      useNativeDriver: false,
    }).start();
  }, [size]);
  return (
    <Screen>
      <HeaderScreen title="Home" />
      <View style={styles.container}>
        <Animated.Text style={{fontSize: size}}>Home Screen!</Animated.Text>
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
