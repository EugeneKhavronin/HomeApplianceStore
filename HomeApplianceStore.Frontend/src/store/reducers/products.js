import {
  DELETE_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, ADD_PRODUCTS_SUCCESS, GET_PRODUCTS_SUCCESS, EDIT_PRODUCTS_SUCCESS,
} from '../action/products';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { data: action.payload };

    case ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    case DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((el) => el.guid !== action.payload),
      };

    case EDIT_PRODUCTS_SUCCESS:
      const newArray1 = state.data.map((element) => {
        if (element.guid === action.payload.guid) {
          return action.payload;
        }
        return element;
      });
      return { ...state, data: newArray1 };

    case GET_PRODUCTS_FAIL:
      console.log('ERROR BUILD FAILD');
      return state;

    default:
      return state;
  }
};
