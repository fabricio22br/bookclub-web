import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
// import { useNavigate } from 'react-router-dom'

export const ResetPasswordScreen = () => {
  //  const navigate = useNavigate()
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
          <Input mt="24px" placeholder="Ex: 0000" />
          <Input.password mt="24px" placeholder="Nova senha" />
          <Input.password mt="24px" placeholder="Confirmar nova senha" />

          <Button mb="12px" mt="24px">
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
