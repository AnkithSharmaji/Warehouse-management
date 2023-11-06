import { GET_WAREHOUSES, GET_WAREHOUSE_BY_ID } from '../actions/types';

const initialState = {
  warehouses: [],
  currentWarehouse: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WAREHOUSES:
      return {
        ...state,
        warehouses: action.payload,
      };
    case GET_WAREHOUSE_BY_ID:
      return {
        ...state,
        currentWarehouse: action.payload,
      };
    default:
      return state;
  }
}
