// Action Types
export const REQUEST_AMIIBO_LIST = "REQUEST_AMIIBO_LIST";
export const RECEIVE_AMIIBO_LIST = "RECEIVE_AMIIBO_LIST";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_CART = "GET_CART";
export const CLEAN_CART = "CLEAN_CART";

// Action Creators
export const requestAmiiboList = () => ({ type: REQUEST_AMIIBO_LIST });
export const receiveAmiiboList = data => ({ type: RECEIVE_AMIIBO_LIST, data });

export const addToCart = data => ({ type: ADD_TO_CART, data });
export const removeFromCart = data => ({ type: REMOVE_FROM_CART, data });
export const getCart = () => ({ type: GET_CART });
export const cleanCart = () => ({ type: CLEAN_CART });