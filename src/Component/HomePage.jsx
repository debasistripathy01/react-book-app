import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    HStack,
} from '@chakra-ui/react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { getBooks, editBooks } from '../Redux/action';
import Details from './Details';
import { Pagination } from './Pagination';
import { addBook } from '../Redux/action';

// import SearchBar from './Search';
import Sort from './Filters/Sorting';
import { AddBookModal } from './AddBookModal';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // const [pages, setPages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = React.useState("HL");

    const dispatch = useDispatch();
    const { books } = useSelector((state) => state.books);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editBookData, setEditBookData] = useState({
        id: '',
        title: '',
        subtitle: '',
        author: '',
        description: '',
        published: '',
        website: '',
        pages: '',
    });

    useEffect(() => {
        var data = getBooks()
        dispatch(data);
        // setPages(data);
    }, [dispatch]);

    const handleEditBook = (book) => {
        setEditBookData(book);
        onOpen();
    };

    const handleHL = () => {
        setSortOrder("HL");
    }
    const handleLH = () => {
        setSortOrder("LH");
    }

    const handleUpdateBook = () => {
        const { _id, ...updatedBookData } = editBookData;
        dispatch(editBooks(_id, updatedBookData));
        console.log(_id);
        onClose();
        setTimeout(() => {
            window.location.reload();
        }, 300)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleAddBook = (newBookData) => {
        dispatch(addBook(newBookData));
        onClose();
      };
    console.log("BOOKs:", books)
    const sortedPages = books.slice().sort((a, b) => {
        if (sortOrder === "HL") {
            return b.pages - a.pages;
        } else {
            return a.pages - b.pages;
        }
    });

    const filteredBooks = books.filter((book) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            book.subtitle.toLowerCase().includes(lowerCaseSearchTerm) ||
            book.author.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <HStack
                w={["90%", "90%", "70%", "50%"]}
                m="auto"
                mt="3"
                justifyContent={"center"}
            >
                <Sort handleHL={handleHL} handleLH={handleLH} />
            </HStack>
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
                <Input
                    placeholder="Search by Title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>

            <AddBookModal handleAddBook={handleAddBook} />
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
                {paginatedBooks.sort((a, b) => {
                    if (sortOrder === "LH") {
                        return a.pages - b.pages;
                    } else if (sortOrder === "HL") {
                        return b.pages - a.pages;
                    }
                })

                    .map((book) => (
                        <Box
                            key={book.id}
                            borderWidth="1px"
                            borderRadius="md"
                            padding="4"
                            boxShadow="md"
                        >
                            <Details books={book} />
                            <Button mt="4" onClick={() => handleEditBook(book)}>
                                Edit Book
                            </Button>
                        </Box>
                    ))}
            </Grid>
            

            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredBooks.length}
                onPageChange={handlePageChange}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Book</ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                name="title"
                                value={editBookData.title}
                                onChange={handleChange}
                            />
                            <FormLabel>Sub-Title</FormLabel>
                            <Input
                                name="subtitle"
                                value={editBookData.subtitle}
                                onChange={handleChange}
                            />
                            <FormLabel>Author</FormLabel>
                            <Input
                                name="author"
                                value={editBookData.author}
                                onChange={handleChange}
                            />
                            <FormLabel>Publisher</FormLabel>
                            <Input
                                name="publisher"
                                value={editBookData.publisher}
                                onChange={handleChange}
                            />
                            <FormLabel>Website</FormLabel>
                            <Input
                                name="website"
                                value={editBookData.website}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleUpdateBook}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default HomePage;





