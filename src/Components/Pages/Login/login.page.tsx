import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
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

import CustomInput from '../../custom-input/custom-input-component'

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

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput placeholder='Digite seu e-mail' />
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput placeholder='Digite sua senha' />
          </LoginInputContainer>

          <CustomButton startIcon={<FiLogIn size={25} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
