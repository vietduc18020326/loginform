import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

export default function Screen({children, style = {}}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar
        backgroundColor={Colors.accentColor}
        barStyle="light-content"
      />
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
