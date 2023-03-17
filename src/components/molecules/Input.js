import { useState } from 'react'
import { Text } from 'components/atoms/Text'
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <>
    <ChakraInput
      h="56px"
      fontSize="16px"
      focusBorderColor="brand.primary"
      {...props}
    />
    {props.error && <Text color="red">{props.error}</Text>}
  </>
)

Input.password = ({ value, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <InputGroup
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="56px"
        size="md"
        {...props}
      >
        <Input
          id={id}
          name={name}
          onChange={onChange}
          value={value}
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
      {props.error && <Text color="red">{props.error}</Text>}
    </>
  )
}

Input.password.displayName = 'InputPassword'
