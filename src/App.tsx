import React from 'react'
import { FunctionComponent, useState } from 'react'
interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
      <h1>Ola</h1>
    </>
  )
}
export default App
