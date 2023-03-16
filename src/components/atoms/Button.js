import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    fontSize="16"
    borderRadius="16px"
    h="56px"
    bg="brand.primary"
    {...props}
  >
    {children}
  </ChakraButton>
)
