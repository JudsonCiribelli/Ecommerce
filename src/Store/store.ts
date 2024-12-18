import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './root-reducer' // Certifique-se de que rootReducer está corretamente definido

const store = configureStore({
  reducer: rootReducer, // O rootReducer é passado aqui
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // Adicione o middleware logger
})

export type RootState = ReturnType<typeof store.getState>
export default store
