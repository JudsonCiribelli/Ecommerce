//Components
import CustomButton from '../../custom-button/custom-button-component'
import Header from '../../Header/Header'
//Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'
import { BsGoogle } from 'react-icons/bs'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          <CustomButton startIcon={<BsGoogle size={25} />}>
            Entrar com o Google
          </CustomButton>
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
