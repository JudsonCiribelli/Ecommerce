//Bibliotecas
import { useForm } from 'react-hook-form'
import { FiLogIn } from 'react-icons/fi'
import { isEmail } from 'validator'
//Components
import CustomButton from '../../custom-button/custom-button-component'
import CustomInput from '../../custom-input/custom-input-component'
import Header from '../../Header/Header'
//Styles
import './sign-up-styles'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up-styles'
import InputErrorMessage from '../../Input-error-message-component/input-error-message'

interface SignUpForm {
  nome: string
  sobrenome: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress = (data: SignUpForm) => {
    console.log({ data })
  }

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie a sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.nome}
              placeholder='Digite o seu nome'
              {...register('nome', {
                required: true
              })}
            />
            {errors?.nome?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.sobrenome}
              placeholder='Digite o seu sobrenome'
              {...register('sobrenome', {
                required: true
              })}
            />
            {errors?.sobrenome?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder='Digite o seu e-mail'
              {...register('email', {
                required: true,
                validate: (value) => {
                  return isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatória</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>O e-mail não é válido</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              {...register('password', {
                required: true
              })}
              placeholder='Digite a sua senha'
              type='password'
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação senha</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder='Confirme sua senha'
              type='password'
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />
            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                A confirmação de senha é obrigatória.
              </InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                A confirmação de senha precisa ser igual a senha.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Criar conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}
export default SignUpPage
