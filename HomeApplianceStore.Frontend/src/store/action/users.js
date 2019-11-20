import generationGuid from '../../utils';

export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';

export const EDIT_USERS_SUCCESS = 'EDIT_USERS_SUCCESS';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';

export const deleteUsers = (guid) => ({ type: DELETE_USERS_SUCCESS, payload: guid });

export const getUsers = (users) => ({
  type: 'GET_USERS_SUCCESS',
  payload: users,
});
export const editUsers = (users) => ({
  type: 'EDIT_USERS_SUCCESS',
  payload: users,
});
export const addUsers = (users) => {
  return {
    type: 'ADD_USERS_SUCCESS',
    payload: { ...users, photo: '', guid: generationGuid() },
  };
};
