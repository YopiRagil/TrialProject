import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import booksReducer from "./reducer/bookReducer";

const rootReducer = combineReducers({
	books: booksReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
	// console.log(store.getState());
});

export default store;
