import {CREATE_ITEM, DELETE_ITEM, UPDATE_ITEM} from './types';

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id: id,
  };
};

export const createItem = title => {
  return {
    type: CREATE_ITEM,
    title: title,
  };
};

export const updateItem = (id, title) => {
  return {
    type: UPDATE_ITEM,
    title: title,
    id: id,
  };
};
