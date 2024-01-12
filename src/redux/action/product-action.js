import { ActionTypes } from "../constant/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const islogged = (islogged) => {
  return {
    type: ActionTypes.IS_LOGGED,
    payload: islogged,
  };
};
