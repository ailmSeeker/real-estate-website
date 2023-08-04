import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,

  ModalCloseButton,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react' 


function GetLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={2}>
          <ModalHeader >Login</ModalHeader>
        <Input placeholder='Username' mb={3}  p={2}/>
        <Input placeholder='Password' p={2}/>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GetLogin;
