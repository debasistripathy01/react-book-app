


import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { addBook } from '../Redux/action';


export const AddBookModal = ({ handleAddBook }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
  
    const [newBookData, setNewBookData] = useState({
      title: '',
      subtitle: '',
      author: '',
      publisher: '',
      website: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewBookData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSaveBook = () => {
        handleAddBook(newBookData);
        onClose();
        setNewBookData({
          title: '',
          subtitle: '',
          author: '',
          publisher: '',
          website: '',
        });
      };
  
    return (
      <>
        <Button colorScheme="blue" onClick={onOpen} my="4">
          Add Book
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Book</ModalHeader>
            <ModalBody>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={newBookData.title}
                  onChange={handleInputChange}
                />
                <FormLabel>Subtitle</FormLabel>
                <Input
                  name="subtitle"
                  value={newBookData.subtitle}
                  onChange={handleInputChange}
                />
                <FormLabel>Author</FormLabel>
                <Input
                  name="author"
                  value={newBookData.author}
                  onChange={handleInputChange}
                />
                <FormLabel>Publisher</FormLabel>
                <Input
                  name="publisher"
                  value={newBookData.publisher}
                  onChange={handleInputChange}
                />
                <FormLabel>Website</FormLabel>
                <Input
                  name="website"
                  value={newBookData.website}
                  onChange={handleInputChange}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSaveBook}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  