import {
    DELETE_ORDERS_SUCCESS, ADD_ORDERS_SUCCESS, GET_ORDERS_SUCCESS, EDIT_ORDERS_SUCCESS,
} from '../action/orders';

const initialState = {
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_SUCCESS:
            return { data: action.payload };

        case ADD_ORDERS_SUCCESS:
            return {
                ...state,
                data: state.data.concat(action.payload),
            };

        case DELETE_ORDERS_SUCCESS:
            return {
                ...state,
                data: state.data.filter((el) => el.guid !== action.payload),
            };

        case EDIT_ORDERS_SUCCESS:
            const newArray1 = state.data.map((element) => {
                if (element.guid === action.payload.guid) {
                    return action.payload;
                }
                return element;
            });
            return { ...state, data: newArray1 };


        default:
            return state;
    }
};
