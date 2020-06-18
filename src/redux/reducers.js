import { RECEIVE_AMIIBO_LIST, ADD_TO_CART, REMOVE_FROM_CART, GET_CART, CLEAN_CART } from './actions';

const initialState = {
  amiiboList: [],
  cart: [],
};

const rootReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_AMIIBO_LIST:
      return {
        ...state,
        amiiboList: data
      };
    case ADD_TO_CART:
      return { 
        ...state,
        cart: [...state.cart, data]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.tail !== data.tail)
      };
    case GET_CART:
      return {
        ...state,
        cart: state.cart
      };
    case CLEAN_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}

export default rootReducer;