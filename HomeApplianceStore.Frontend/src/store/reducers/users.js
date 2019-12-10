import {
  DELETE_USERS_SUCCESS, GET_USERS_FAIL, ADD_USERS_SUCCESS, GET_USERS_SUCCESS, EDIT_USERS_SUCCESS,
} from '../action/users';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  console.log('action.payload1',action.payload);
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { data: action.payload };

    case ADD_USERS_SUCCESS:
      console.log('action.payload2',action.payload);
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((el) => el.guid !== action.payload),
      };

    case EDIT_USERS_SUCCESS:
      const newArray1 = state.data.map((element) => {
        if (element.guid === action.payload.guid) {
          return action.payload;
        }
        return element;
      });
      return { ...state, data: newArray1 };

    case GET_USERS_FAIL:
      console.log('ERROR BUILD FAILD');
      return state;

    default:
      return state;
  }
};
