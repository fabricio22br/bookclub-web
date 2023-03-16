import { useState } from 'react'
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <ChakraInput
    h="56px"
    fontSize="16px"
    focusBorderColor="brand.primary"
    {...props}
  />
)

Input.password = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="56px"
      size="md"
      {...props}
    >
      <Input
        focusBorderColor="brand.primary"
        pr="4.5rem"
        fontSize="16px"
        type={show ? 'text' : 'password'}
        placeholder="**********"
      />
      <InputRightElement h="100%">
        <Button
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          h="1.75rem"
          size="sm"
          onClick={handleClick}
        >
          {show ? (
            <ViewOffIcon boxSize="19px" color="brand.primary" />
          ) : (
            <ViewIcon boxSize="19px" color="brand.primary" />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

Input.password.displayName = 'InputPassword'
