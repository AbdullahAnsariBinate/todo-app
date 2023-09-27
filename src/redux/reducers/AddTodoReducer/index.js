import {Add_Todo, Delete_Todo, Edit_Todo} from '../../constants';
const initialState = [];

export const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Todo:
      return [...state, action?.payload];
    case Delete_Todo:
      let updatedTodo = state.filter(item => {
        return item.id !== action?.id;
      });
      return [...updatedTodo];
    case Edit_Todo:
      let editedList = state.map(item => {
        if (item?.id == action?.payload?.id) {
          return action.payload;
        }
      });
      return [...editedList];
    default:
      return state;
  }
};
