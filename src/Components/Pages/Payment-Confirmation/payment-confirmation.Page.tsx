import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
//import { useDispatch } from 'react-redux'

// Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './Payment-Confirmation.Styles'
// Components
import Header from '../../Header/Header'
import CustomButton from '../../custom-button/custom-button-component'

// Utilities
import Colors from '../../../theme/theme.colors'
import { CartContext } from '../../../contexts/cart.context'
//import { clearCartProducts } from '../../store/toolkit/cart/cart.slice'

const PaymentConfirmationPage: FunctionComponent = () => {
  //const dispatch = useDispatch()

  const [searchParams] = useSearchParams()
  const { clearProducts } = useContext(CartContext)
  const navigate = useNavigate()
  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'

  useEffect(() => {
    if (status === 'true') {
      clearProducts()
    }
  }, [status])

  const handleGoToHomePageClick = () => {
    navigate('/')
  }

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente.
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePageClick}
          >
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
