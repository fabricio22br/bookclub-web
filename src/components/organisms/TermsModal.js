import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const TermsModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Termos de uso</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <Text>Termos de condição 2023</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
