import axios from "axios";
import { bodyJson } from "./setting";

export const searchBook = async (param) => {
	const params = param.q ? param : { q: "word" };
	return axios.get("https://www.googleapis.com/books/v1/volumes", {
		params: params,
		headers: {
			...bodyJson(),
		},
	});
};
