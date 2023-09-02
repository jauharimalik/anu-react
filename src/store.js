import { configureStore } from '@reduxjs/toolkit';

// Load users from local storage or initialize an empty array
const loadUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [];
};

const initialState = {
  users: loadUsersFromLocalStorage(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
