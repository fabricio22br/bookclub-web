import { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'
import { UserModal } from './UserModal'
import { PasswordModal } from './PasswordModal'
import { TermsModal } from './TermsModal'
import { PrivacyPolicyModal } from './PrivacyPolicyModal'
import { setAll } from 'services/store/slices/user'
import { useDispatch } from 'react-redux'

export const Navbar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCloseModal = () => {
    setShowModal(null)
  }

  const onLogout = () => {
    localStorage.clear()
    dispatch(
      setAll({
        user: null,
        token: null
      })
    )
    navigate('/')
  }

  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['0px', '24px', '112px']}
      paddingTop={['24px']}
    >
      <Image
        src="/img/logo.svg"
        alt="BookClub Logo"
        w={['120px', '160px']}
        h="48px"
        cursor="pointer"
        onClick={() => navigate('/home')}
      />
      <Flex display={['none', 'flex']}>
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>

      <UserMenu onLogout={onLogout} setShowModal={setShowModal} />

      {showModal === 'user' && <UserModal onClose={onCloseModal} />}
      {showModal === 'password' && <PasswordModal onClose={onCloseModal} />}
      {showModal === 'terms' && <TermsModal onClose={onCloseModal} />}
      {showModal === 'privacy-policy' && (
        <PrivacyPolicyModal onClose={onCloseModal} />
      )}
    </Flex>
  )
}
