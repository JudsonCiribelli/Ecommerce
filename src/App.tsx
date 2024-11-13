import React from "react"
import {  FunctionComponent, useState } from "react"
interface AppProps {
  message?:string
}

const App:FunctionComponent<AppProps> = ({message}) =>{
  const [name,setName] = useState<string>('Judson')
  return(
    <>
      <h1>{name}</h1>
      <h2></h2>
    </>
  )

}
export default App