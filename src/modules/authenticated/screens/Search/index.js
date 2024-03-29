import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Navbar, Text, BookList, AuthorList } from 'components'
import { searchQuery } from 'services/api/requests'
import { useQuery } from 'react-query'

export const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const { data, isLoading } = useQuery(
    ['search', query],
    () => searchQuery(query),
    {
      enabled: query.length >= 3
    }
  )

  return (
    <Flex flexDir="column">
      <Navbar query={query} setQuery={setQuery} />
      <Flex
        flexDir="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        mt={['24px', '48px']}
        w="100%"
        paddingX={['0px', '24px', '112px']}
      >
        <Flex paddingX={['0px', '24px', '112px']}>
          <Text.ScreenTitle>Resultados da pesquisa</Text.ScreenTitle>
        </Flex>

        <Flex w="100%" alignItems="flex-start" justifyContent="flex-start">
          <BookList
            title="Livros"
            data={data?.data?.books}
            isLoading={isLoading}
          />
        </Flex>
        <Flex w="100%" alignItems="flex-start" justifyContent="flex-start">
          <AuthorList data={data?.data?.authors} isLoading={isLoading} />
        </Flex>
      </Flex>
    </Flex>
  )
}
