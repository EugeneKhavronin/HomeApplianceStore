import generationGuid from '../../utils';

export const DELETE_PRODUCTS_SUCCESS = 'DELETE_PRODUCTS_SUCCESS';

export const EDIT_PRODUCTS_SUCCESS = 'EDIT_PRODUCTS_SUCCESS';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export const ADD_PRODUCTS_SUCCESS = 'ADD_PRODUCTS_SUCCESS';

export const deleteProducts = (guid) => ({ type: DELETE_PRODUCTS_SUCCESS, payload: guid });

export const getProducts = (products) => ({
  type: 'GET_PRODUCTS_SUCCESS',
  payload: products,
});
export const editProducts = (products) => ({
  type: 'EDIT_PRODUCTS_SUCCESS',
  payload: products,
});
export const addProducts = (products) => {
  return {
    type: 'ADD_PRODUCTS_SUCCESS',
    payload: { ...products, photo: '', guid: generationGuid() },
  };
};
