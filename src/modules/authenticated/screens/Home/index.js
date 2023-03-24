import { Flex } from '@chakra-ui/react'
import { Navbar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex mt="48px" w="100%" h="200px" paddingX={['0px', '24px', '112px']}>
        <Flex
          w="100%"
          h="100%"
          backgroundImage="url('/img/banner.svg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="24px"
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
