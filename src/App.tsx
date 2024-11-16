//Bibliotecas
import React from 'react'
import { FunctionComponent, useState } from 'react'
//Components
import Header from './Components/Header'
interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
      <Header />
    </>
  )
}
export default App
