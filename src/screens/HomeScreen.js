import React, {useEffect, useCallback, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import Screen from '../components/Screen';
import HeaderScreen from '../components/HeaderScreen';
import Item from '../components/Item';
import Colors from '../constants/Colors';
import {fetchData, deleteItem} from '../store/thunks/item';

const HomeScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();
  const items = useSelector(state => state.items.items);
  const dispatch = useDispatch();
  const renderRightBtn = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('edit', {
            itemId: '',
            itemTitle: '',
          });
        }}>
        <MaterialCommunityIcons
          name="bookmark-plus"
          color="white"
          size={30}
          style={styles.iconHeader}
        />
      </TouchableOpacity>
    );
  };
  const loadData = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      await dispatch(fetchData());
    } catch (err) {
      setIsError(err);
    }
    setIsLoading(false);
  }, [dispatch, setIsError, setIsLoading]);
  useEffect(() => {
    loadData();
  }, [loadData]);
  const deleteHanlde = id => {
    Alert.alert('Are you sure', 'Do you want to delete product', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: async () => {
          try {
            await dispatch(deleteItem(id));
          } catch (err) {
            Alert.alert('Wrong', err.message, ['okay']);
          }
        },
      },
    ]);
  };

  if (isLoading) {
    return (
      <Screen>
        <HeaderScreen title="Home" renderRightBtn={renderRightBtn} />
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </Screen>
    );
  }
  if (isError) {
    return (
      <Screen>
        <HeaderScreen title="Home" renderRightBtn={renderRightBtn} />
        <View style={styles.loading}>
          <Text>A error occurred!</Text>
          <Button title="Try again" onPress={loadData} />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <HeaderScreen title="Home" renderRightBtn={renderRightBtn} />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <Item
            title={itemData.item.title}
            onEdit={() =>
              props.navigation.navigate('edit', {
                itemId: itemData.item.id,
                itemTitle: itemData.item.title,
              })
            }
            onDelete={() => deleteHanlde(itemData.item.id)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHeader: {
    marginRight: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
