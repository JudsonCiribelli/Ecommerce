import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'
import CartReducer from './reducers/Cart/cart.reducer'

const rootReducer = combineReducers({
  userReducer,
  CartReducer
})

export default rootReducer
