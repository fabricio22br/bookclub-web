import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { resetPasswordCall } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [searchParams] = useSearchParams()

  const mutation = useMutation((data) => resetPasswordCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha na requisição',
        description:
          error?.response?.data?.error || 'Por favor tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Senha Salva com sucesso!',
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      navigate('/')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(6, 'token inválido.')
        .required('Token é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter ao menos 6 caracteres.')
        .required('Confirmar a senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: searchParams.get('email'),
        token: data.token,
        password: data.password
      })
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
          <Text.ScreenTitle mt="48px">Nova Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite o código enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input
            id="token"
            name="token"
            value={values.token}
            onChange={handleChange}
            error={errors.token}
            mt="24px"
            placeholder="Ex: 000000"
            maxLength={6}
          />
          <Input.password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="24px"
            placeholder="Nova senha"
          />
          <Input.password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            mt="24px"
            placeholder="Confirmar nova senha"
          />

          <Button
            isLoading={mutation.isLoading}
            mt="24px"
            onClick={handleSubmit}
          >
            Salvar
          </Button>
          <Link.Action
            mt="8px"
            text="Não recebeu o código?"
            actionText="Clique aqui para reenviar."
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
