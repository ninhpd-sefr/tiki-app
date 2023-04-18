import { combineReducers,createStore } from 'redux';
import postReducer from './product/reducer'

const rootReducer = combineReducers({
  Product: postReducer,
})

export default rootReducer