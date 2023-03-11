import { createContext, useReducer, useContext } from 'react';
import reducer from '../reducers/reducer';

export const GlobalContext = createContext();

const initialState = {
  products: [],
  categories: [],
  priceRange: {},
  loginModal: false,
  registerModal: false,
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoginModal = (value) => {
    dispatch({
      type: 'SET_LOGIN_MODAL',
      payload: value,
    });
  };

  const setRegisterModal = (value) => {
    dispatch({
      type: 'SET_REGISTER_MODAL',
      payload: value,
    });
  };

  const value = {
    ...state,
    setLoginModal,
    setRegisterModal,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
