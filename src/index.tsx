import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import UserContextProvider from './contexts/user.context'
import CategoryContextProvidder from './contexts/category.context'
import CartContextProvider from './contexts/cart.context'
import Store from './Store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <UserContextProvider>
        <CategoryContextProvidder>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoryContextProvidder>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
