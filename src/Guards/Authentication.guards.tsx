import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//Utilities
import { UserContext } from '../contexts/user.context'
//Components
import Header from '../Components/Header/Header'
import Loading from '../Components/loading/loading.component'

interface AuthenticationProps {
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes...' />
      </>
    )
  }

  return (
    <>
      <p>{children}</p>
    </>
  )
}
export default AuthenticationGuard
