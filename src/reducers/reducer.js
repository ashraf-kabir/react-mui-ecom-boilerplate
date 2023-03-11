const initialState = {
  products: [],
  categories: [],
  priceRange: {},
  loginModal: false,
  registerModal: false,
};

const reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    const products = action.payload;
    return { ...state, products };
  }
  if (action.type === 'LOAD_CATEGORIES') {
    const categories = action.payload;
    return { ...state, categories };
  }
  if (action.type === 'SET_PRICE_RANGE') {
    const priceRange = action.payload;
    return { ...state, priceRange };
  }
  if (action.type === 'SET_LOGIN_MODAL') {
    const loginModal = action.payload;
    return { ...state, loginModal };
  }
  if (action.type === 'SET_REGISTER_MODAL') {
    const registerModal = action.payload;
    return { ...state, registerModal };
  }
  if (action.type === 'LOG_OUT') {
    return initialState;
  }
  throw new Error(`Unhandled action type: ${action.type}`);
};

export default reducer;
