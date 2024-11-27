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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

interface SignUpForm {
  firstName: string
  lastName: string
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

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName
      })
    } catch (error) {
      console.log(error)
    }
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
              hasError={!!errors?.firstName}
              placeholder='Digite o seu nome'
              {...register('firstName', {
                required: true
              })}
            />
            {errors?.firstName?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder='Digite o seu sobrenome'
              {...register('lastName', {
                required: true
              })}
            />
            {errors?.lastName?.type === 'required' && (
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
