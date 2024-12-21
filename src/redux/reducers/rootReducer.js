import { combineReducers } from 'redux';
// import productReducer from './reducers/productReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
