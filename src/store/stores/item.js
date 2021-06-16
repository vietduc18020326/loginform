import {
  CREATE_ITEM,
  DELETE_ITEM,
  SET_ITEMS,
  UPDATE_ITEM,
} from '../actions/types';
import Item from '../../model/item';

const initState = {
  items: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    case CREATE_ITEM:
      const newItem = new Item(action.id, action.title);
      return {
        ...state,
        items: state.items.concat(newItem),
      };
    case UPDATE_ITEM:
      const itemIndex = state.items.findIndex(item => item.id === action.id);
      const updateItem = new Item(action.id, action.title);
      const updateAvailableItem = [...state.items];
      updateAvailableItem[itemIndex] = updateItem;
      return {
        ...state,
        items: updateAvailableItem,
      };
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
  }
  return state;
};
