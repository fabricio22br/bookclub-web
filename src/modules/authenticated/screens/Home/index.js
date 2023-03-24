import { Flex } from '@chakra-ui/react'
import { Navbar, BookList } from 'components'
import { useQuery } from 'react-query'
import { getHighlightedBooks } from 'services/api/requests'

export const HomeScreen = () => {
  const { error, data } = useQuery('highlighted', getHighlightedBooks)
  console.log({ error, data })

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
      <BookList data={data?.data} />
    </Flex>
  )
}
