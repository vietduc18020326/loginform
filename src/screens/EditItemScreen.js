import React, {useCallback, useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Alert, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import Screen from '../components/Screen';
import HeaderScreen from '../components/HeaderScreen';
import Input from '../components/Input';
import {createItem, updateItem} from '../store/thunks/item';

const EditItemScreen = props => {
  const {itemId, itemTitle} = props.route.params;
  const dispatch = useDispatch();
  const [isError, setIsError] = useState();
  const [text, setText] = useState(itemTitle);
  const [isValid, setIsValid] = useState(itemId ? true : false);
  const renderLeftBtn = () => {
    return (
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          color="white"
          size={30}
          style={styles.iconHeader}
        />
      </TouchableOpacity>
    );
  };
  const renderRightBtn = () => {
    return (
      <TouchableOpacity onPress={handleSubmit}>
        <MaterialCommunityIcons
          name="bookmark-check"
          color="white"
          size={30}
          style={styles.iconHeader}
        />
      </TouchableOpacity>
    );
  };
  const handleSubmit = async () => {
    if (!isValid) {
      Alert.alert('A error occurred', 'Input title', ['okay']);
      return;
    }
    setIsError(null);
    try {
      if (itemId) {
        await dispatch(updateItem(itemId, text));
      } else {
        await dispatch(createItem(text));
      }
      props.navigation.goBack();
    } catch (err) {
      setIsError(err);
    }
  };
  const handleChange = useCallback(
    (inputIndentifier, inputValue, inputValid) => {
      setIsValid(inputValid);
      setText(inputValue);
    },
    [setText, setIsValid],
  );
  useEffect(() => {
    if (isError) {
      Alert.alert('Wrong', 'Something went wrong!', [{text: 'Okay'}]);
    }
  }, [isError]);
  return (
    <Screen>
      <HeaderScreen
        title={itemId ? 'Edit Item' : 'Add Item'}
        renderLeftBtn={renderLeftBtn}
        renderRightBtn={renderRightBtn}
      />
      <View style={styles.inputContainer}>
        <Input
          id="title"
          label="Title"
          keyboardType="default"
          required
          errorText="Please check valid email address"
          onInputChange={handleChange}
          initialValue={text}
          initiallyValid={isValid}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    marginRight: 10,
  },
  inputContainer: {
    marginHorizontal: 10,
  },
});

export default EditItemScreen;
