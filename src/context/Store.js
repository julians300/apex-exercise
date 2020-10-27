import { createContext, useReducer } from 'react';

export const Context = createContext();

const initialState = [];

export const CATS_ACTIONS = {
  SET_CAT: 'SET_CAT',
};

const catReducer = (state, action) => {
  switch (action.type) {
    case CATS_ACTIONS.SET_CAT:
      const newArr = [...state];
      newArr.push(action.payload[0]);
      return newArr;
    default:
      return state;
  }
};

export const DISPLAY_INDEX_ACTIONS = {
  SET_INDEX: 'SET_INDEX',
};

const displayIndexReducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_INDEX_ACTIONS.SET_INDEX:
      return action.payload;
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [cats, catsDispatch] = useReducer(catReducer, initialState);
  const [displayIndex, setIndexDispatch] = useReducer(displayIndexReducer, 0);
  return <Context.Provider value={{ cats, catsDispatch, displayIndex, setIndexDispatch }}>{children}</Context.Provider>;
};

export default Store;
