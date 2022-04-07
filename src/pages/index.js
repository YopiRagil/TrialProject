/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import Card from "../components/card/card";
import { useDebounce } from "use-debounce";
import Loading from "../components/loader/loading";
import Empty from "../components/empty/empty";
import { useDispatch, useSelector } from "react-redux";
import { getBookList } from "../redux/action/bookAction";
import Headers from "../components/header";

function HomePage() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const [value] = useDebounce(search, 1000);
	const books = useSelector((state) => state.books);

	useEffect(() => {
		dispatch(getBookList(value));
	}, [value]);

	return (
		<React.Fragment>
			<Headers setSearch={setSearch} search={search} />
			<Loading isLoading={books.isLoading} />
			<Empty isNotFound={!books.isLoading && !(books.list.items?.length > 0)} />
			<div className="p-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{books.list.items?.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</div>
		</React.Fragment>
	);
}

export default HomePage;
