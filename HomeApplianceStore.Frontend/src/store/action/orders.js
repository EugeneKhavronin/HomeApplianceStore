
export const DELETE_ORDERS_SUCCESS = 'DELETE_ORDERS_SUCCESS';

export const EDIT_ORDERS_SUCCESS = 'EDIT_ORDERS_SUCCESS';

export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';

export const ADD_ORDERS_SUCCESS = 'ADD_ORDERS_SUCCESS';

export const deleteOrders = (guid) => ({ type: DELETE_ORDERS_SUCCESS, payload: guid });

export const getOrders = (orders) => {
    console.log('users', orders);
    return{  type: 'GET_ORDERS_SUCCESS',
        payload: orders,
    }

};
export const editOrders = (orders) => ({
    type: 'EDIT_ORDERS_SUCCESS',
    payload: orders,
});
export const addOrders = (orders) => {
    return {
        type: 'ADD_ORDERS_SUCCESS',
        payload: orders,
    };
};
