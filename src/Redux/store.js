import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {booksReducer} from './booksReducer';
import {searchReducer} from './searchReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  search: searchReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


export default store;