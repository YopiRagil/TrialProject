import React from "react";
import { Link } from "react-router-dom";
import Search from "../input/search";

const Headers = (props) => {
	const { setSearch, search } = props;
	return (
		<React.Fragment>
			<div className="bg-gray-500 flex justify-between px-4 py-1 sticky items-center top-0 z-50 w-full">
				<div className="flex space-x-6">
					<Link to="/">
						<p className="text-xl font-bold hover:text-gray-700 text-white cursor-pointer">
							Home
						</p>
					</Link>
					<Link to="favorite">
						<p className="text-xl font-bold hover:text-gray-700 text-white cursor-pointer">
							My Favorite Book
						</p>
					</Link>
				</div>
				<div className="w-1/4">
					<Search onChange={setSearch} value={search} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Headers;
