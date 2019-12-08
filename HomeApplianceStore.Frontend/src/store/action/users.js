export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';

export const EDIT_USERS_SUCCESS = 'EDIT_USERS_SUCCESS';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';

export const deleteUsers = (guid) => ({ type: DELETE_USERS_SUCCESS, payload: guid });

export const getUsers = (users) => {
  console.log('users', users);
 return{  type: 'GET_USERS_SUCCESS',
   payload: users,
 }

};
export const editUsers = (users) => ({
  type: 'EDIT_USERS_SUCCESS',
  payload: users,
});
export const addUsers = (users) => {
    console.log('users777777777',users);
  return {
    type: 'ADD_USERS_SUCCESS',
    payload: users
  };
};
