import auth from '../../api/auth';
import {
  CREATE_ITEM,
  DELETE_ITEM,
  SET_ITEMS,
  UPDATE_ITEM,
} from '../actions/types';
import Item from '../../model/item';

export const createItem = title => {
  return async dispatch => {
    const response = await auth.create(title);
    if (
      !response.ok ||
      !response.data ||
      JSON.stringify(response.data) === '{}'
    ) {
      throw new Error('Something went wrong!');
    }
    dispatch({
      type: CREATE_ITEM,
      id: response.data.name,
      title: title,
    });
  };
};

export const fetchData = () => {
  return async dispatch => {
    const response = await auth.getItem();
    const loadItems = [];
    for (const key in response.data) {
      loadItems.push(new Item(key, response.data[key].title));
    }
    if (
      !response.ok ||
      !response.data ||
      JSON.stringify(response.data) === '{}'
    ) {
      throw new Error('Something went wrong!');
    }
    dispatch({type: SET_ITEMS, items: loadItems});
  };
};

export const updateItem = (id, title) => {
  return async dispatch => {
    const response = await auth.update(id, title);
    if (
      !response.ok ||
      !response.data ||
      JSON.stringify(response.data) === '{}'
    ) {
      throw new Error('Something went wrong!');
    }
    dispatch({
      type: UPDATE_ITEM,
      id: id,
      title: title,
    });
  };
};

export const deleteItem = id => {
  return async dispatch => {
    const response = await auth.deleteItem(id);
    if (!response.ok || JSON.stringify(response.data) === '{}') {
      throw new Error('Something went wrong!');
    }
    dispatch({
      type: DELETE_ITEM,
      id: id,
    });
  };
};
