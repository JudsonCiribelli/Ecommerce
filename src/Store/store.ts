import { createStore } from 'redux'
import rootReducer from './root-reducer'

const Store = createStore(rootReducer)

export default Store
