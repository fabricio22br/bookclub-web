import { Flex } from '@chakra-ui/react'
import { Navbar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Flex
        mt={['24px', '48px']}
        w="100%"
        h={['72px', '200px']}
        paddingX={['0px', '24px', '112px']}
      >
        <Flex
          w="100%"
          h="100%"
          backgroundImage="url('/img/banner.svg')"
          backgroundSize="cover"
          backgroundPosition={['start', 'center']}
          backgroundRepeat="no-repeat"
          borderRadius={['8px', '24px']}
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
