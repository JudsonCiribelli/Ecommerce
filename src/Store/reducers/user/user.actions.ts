import User from '../../../types/user.types'
import UserActionsTypes from './user.actions-types'

interface LoginUserActions {
  type: typeof UserActionsTypes.LOGIN
  payload: User
}

export const LoginUser = (payload: User): LoginUserActions => ({
  type: UserActionsTypes.LOGIN,
  payload
})

interface LogoutUserActions {
  type: typeof UserActionsTypes.LOGOUT
}

export const LogouUser = () => ({
  type: UserActionsTypes.LOGOUT
})

export type UserActions = LoginUserActions | LogoutUserActions
