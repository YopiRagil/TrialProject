/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Card from "../components/card/card";
import Empty from "../components/empty/empty";
import { useSelector } from "react-redux";
import Headers from "../components/header";

function FavoritePage() {
	const [search, setSearch] = useState("");
	const books = useSelector((state) => state.books.favorite);
	return (
		<React.Fragment>
			<Headers setSearch={setSearch} search={search} />
			<Empty isNotFound={books?.length === 0} />
			<div className="p-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{books?.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</div>
		</React.Fragment>
	);
}

export default FavoritePage;
