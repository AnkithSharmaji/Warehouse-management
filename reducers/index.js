import { combineReducers } from 'redux';
import warehousesReducer from './warehouses';

export default combineReducers({
  warehouses: warehousesReducer,
});
