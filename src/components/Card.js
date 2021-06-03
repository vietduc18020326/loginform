import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.screen, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default Card;
