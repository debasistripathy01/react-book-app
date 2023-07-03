
import * as Types from "./actionTypes"
import axios from "axios";


const fetchBooksRequest = () =>{
    return {
        type : Types.FETCH_BOOKS_REQUEST,
    }
}

const fetchBooksFailure = () =>{
    return {
        type : Types.FETCH_BOOKS_FAILURE,
    }
}

const fetchBooksSuccess = (data) =>{
    return {
        type: Types.FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

const addBooksRequest = () =>{
    return {
        type : Types.ADD_BOOK_REQUEST,
    }
}

const addBooksFailure = () =>{
    return {
        type : Types.ADD_BOOK_FAILURE,
    }
}

const addBooksSuccess = (data) =>{
    return {
        type: Types.ADD_BOOK_SUCCESS,
        payload: data
    }
}

export const getBooks =(book)=>(dispatch)=>{

    dispatch(fetchBooksRequest());

    return  axios
    .get("https://books-1gq7.onrender.com/books")
    .then((res) => {
      dispatch(fetchBooksSuccess(res.data));
      dispatch({
        type: Types.FETCH_BOOKS_SUCCESS,
        payload: res.data
      })
      console.log(res.data)
    })
    .catch((e) => {
      dispatch(fetchBooksFailure());
      console.log(e)
    });
}

export const editBooks = (_id, book)=>(dispatch)=>{

    // const { id } = book;
    const updatedBook = {
        ...book,
        _id,
      };
    
    //Starting fetch request
    dispatch(fetchBooksRequest());

    return axios.put(`https://books-1gq7.onrender.com/books/${_id}`, updatedBook)
    .then((res)=> {
        // books successfully fetched
        dispatch(fetchBooksSuccess(res.data));
        dispatch({
            type: Types.EDIT_BOOK,
            payload: res.data,
        });
    }).catch((err)=>{
        // Dispatching the Failuers Action;
        dispatch(fetchBooksFailure());
        console.log(err);
    })
}

export const addBook = (newBookData) => {
    return async (dispatch) => {
      try {
        const bookArray = [newBookData];
        // POST request using axios
        const response = await axios.post('https://books-1gq7.onrender.com/books/create', newBookData);
  
        // Check if the request was successful
        if (response.status === 200) {
          // Extract the added books from the response
          const addedBooks = response.data;
  
          // Dispatch the action to add the books to the store
          dispatch({
            type: Types.ADD_BOOK,
            payload: addedBooks,
          });
        } else {
            dispatch({
                type: Types.ADD_BOOK_FAILURE,

            })
          // Handle the case when the request fails
          // You can dispatch an action to handle error state or show a notification
        }
      } catch (error) {
        console.log(error)
        // Handle any error that occurs during the API request
        // You can dispatch an action to handle error state or show a notification
      }
    };
  };
  

export { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure}