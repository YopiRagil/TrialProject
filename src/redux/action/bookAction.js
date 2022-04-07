import { searchBook } from "../../network";

export const getBookList = (value) => {
	return async (dispatch) => {
		dispatch({
			type: "LOADING",
		});
		await searchBook({ q: value ? value : "" })
			.then(({ data }) => {
				dispatch({
					type: "BOOK_DATA",
					payload: data,
				});
			})
			.catch((err) => {
				dispatch({
					type: "BOOK_DATA",
					payload: { items: [] },
				});
			});
	};
};

export const setToDetailData = (data) => {
	return async (dispatch) => {
		dispatch({
			type: "DETAIL",
			payload: data,
		});
	};
};

export const addToFavorite = (data) => {
	return async (dispatch) => {
		dispatch({
			type: "FAVORITE",
			payload: data,
		});
	};
};

export const removed = (id) => {
	return async (dispatch) => {
		dispatch({
			type: "REMOVE",
			payload: id,
		});
	};
};
