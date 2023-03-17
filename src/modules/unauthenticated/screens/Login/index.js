import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres')
        .required('Senha é obrigatório.')
    }),
    onSubmit: (data) => {
      console.log({ data })
    }
  })

  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        paddingLeft={['0px', '24px', '112px']}
        padding={['24px', '0px']}
        flexDir="column"
        w={['100%', '40%']}
        h="100%"
      >
        <Flex flexDir="column" w={['100%', '416px']}>
          <Image src="/img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            id="email"
            name="email"
            value={values.email}
            mt="24px"
            placeholder="email@exemplo.com"
            onChange={handleChange}
            error={errors.email}
          />
          <Input.password
            id="password"
            name="password"
            value={values.password}
            mt="16px"
            placeholder="************"
            onChange={handleChange}
            error={errors.password}
          />
          <Flex mt="8px" w="100%">
            <Link onClick={() => navigate('/forgot-password')}>
              Esqueceu sua senha?
            </Link>
          </Flex>
          <Button onClick={handleSubmit} mb="12px" mt="24px">
            Login
          </Button>
          <Link.Action
            onClick={() => navigate('/cadastrar')}
            mt="8px"
            text="Não possui uma conta?"
            actionText="Cadastra-se aqui"
          />
        </Flex>
      </Flex>
      <Flex
        w={['0%', '60%']}
        h="100vh"
        backgroundImage="url('/img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
