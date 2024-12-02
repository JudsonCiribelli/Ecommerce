import { Children, createContext, FunctionComponent, useState } from 'react'

interface CustomProvider {
  children?: React.ReactNode
}
export const UserContext = createContext({
  currentUser: null
})

const UserContextProvider: FunctionComponent<CustomProvider> = ({
  children
}) => {
  const [currentUser, setCurretUser] = useState(null)
  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
