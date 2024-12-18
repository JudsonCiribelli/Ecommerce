import User from '../../../types/user.types'
import UserActionsTypes from './user.actions-types'

export const LoginUser = (payload: User) => ({
  type: UserActionsTypes.LOGIN,
  payload
})

export const LogouUser = () => ({
  type: UserActionsTypes.LOGOUT
})
