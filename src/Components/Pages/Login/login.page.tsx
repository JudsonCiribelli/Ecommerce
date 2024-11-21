import Header from '../../Header/Header'
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          {/* Button */}

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>{/* Input email */}</LoginInputContainer>
          <LoginInputContainer>{/* Input password */}</LoginInputContainer>
          {/* Enter Button */}
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
