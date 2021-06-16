import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Card from './Card';
import Button from './Button';
import Colors from '../constants/Colors';

const Item = props => {
  return (
    <Card style={styles.item}>
      <View style={styles.textContainer}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Edit"
          width="40%"
          color={Colors.primary}
          onPress={props.onEdit}
        />
        <Button
          title="Delete"
          width="40%"
          color={Colors.primary}
          onPress={props.onDelete}
        />
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  item: {
    height: 140,
    marginTop: 10,
    marginHorizontal: 40,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Item;
