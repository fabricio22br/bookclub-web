import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'

export const Navbar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['0px', '24px', '112px']}
      paddingTop={['24px']}
    >
      <Image src="/img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
      <SearchBar />
      <UserMenu />
    </Flex>
  )
}
