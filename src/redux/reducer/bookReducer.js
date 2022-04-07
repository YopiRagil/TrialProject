const initialState = {
	details: null,
	loading: false,
	list: { items: [] },
	favorite: [],
};

export default function booksReducer(bookState = initialState, action) {
	switch (action.type) {
		case "LOADING":
			return {
				...bookState,
				isLoading: true,
			};
		case "BOOK_DATA":
			return {
				...bookState,
				isLoading: false,
				list: action.payload,
			};
		case "DETAIL":
			return {
				...bookState,
				details: action.payload,
			};
		case "FAVORITE":
			return {
				...bookState,
				favorite: [...bookState.favorite, action.payload],
			};
		case "REMOVE":
			return {
				...bookState,
				favorite: bookState.favorite.filter(
					(item) => item?.id !== action.payload,
				),
			};
		default:
			return bookState;
	}
}
