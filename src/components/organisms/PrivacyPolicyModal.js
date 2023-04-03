import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Políticas de Privacidade</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Text>Termos privacidade condição 2023</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
