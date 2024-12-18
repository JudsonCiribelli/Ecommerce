import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
//@ts-ignore
import { PersistGate } from 'redux-persist/integration/react'
import CategoryContextProvidder from './contexts/category.context'
import Store from './Store/store'
import { persistedStore } from './Store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persistedStore}>
        <CategoryContextProvidder>
          <App />
        </CategoryContextProvidder>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
