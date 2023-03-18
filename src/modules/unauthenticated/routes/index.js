import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen
} from '../screens'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path: '/cadastrar',
    element: <RegisterScreen />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/reset-password',
    element: <ResetPasswordScreen />
  }
]
