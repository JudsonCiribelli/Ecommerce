import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
// @ts-ignore
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['CartReducer']
}

const persistRootReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
)

const store = configureStore({
  reducer: persistRootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export default store
