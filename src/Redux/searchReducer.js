
import * as Types from "./actionTypes";

const initialState ={
    searchResult: [],
    isLoading: false,
    isError: false,
}


export const searchReducer = ( oldState = initialState, action)=>{
    const { type, payload} = action;


    switch (type){

        case Types.SEARCH_REQUEST: {
            return {
                ...oldState,
                isLoading: true,
                isError: false
            }
        }

        case Types.SEARCH_SUCCESS: {
            return {
                ...oldState,
                isLoading: false,
                searchResult: payload
            }
        }
        case Types.SEARCH_FAILURE: {
            return {
                ...oldState,
                isError: true,
                isLoading: false
            }
        }

        default:
            return {...oldState}
    }
}