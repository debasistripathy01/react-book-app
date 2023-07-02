
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


export const getBooks =(book)=>(dispatch)=>{

    dispatch(fetchBooksRequest());

    return  axios
    .get("http://localhost:4501/books")
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

    return axios.put(`http://localhost:4501/books/${_id}`, updatedBook)
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

export { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure}