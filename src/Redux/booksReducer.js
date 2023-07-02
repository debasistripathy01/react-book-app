import * as Types from "./actionTypes";


const initialState = {
    isLoading: false,
    books: [],
    isError: false,
}

export const booksReducer = (oldState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case Types.FETCH_BOOKS_REQUEST: {
            return {
                ...oldState,
                isLoading: true
            }
        }

        case Types.FETCH_BOOKS_SUCCESS: {
            return {
                ...oldState,
                isLoading: false,
                books: payload,
            }
        }

        case Types.FETCH_BOOKS_FAILURE: {
            return {
                ...oldState,
                isError: true
            }
        }

        case Types.ADD_BOOK: {
            return {
                ...oldState,
                books: [...oldState.books, payload]
            }
        }

        case Types.EDIT_BOOK: {
            

            return {
                ...oldState,
                
                books: oldState.books.map((elem) =>
                elem.id === payload.id ? payload : elem
            )
              };
        }


        default:
            return oldState
    }
}

