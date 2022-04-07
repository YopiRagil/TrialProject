import React from "react";

const Search = (props) => {
	const { onChange, value } = props;
	return (
		<div className="p-2">
			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="w-full h-12 rounded px-4"
				placeholder="Search..."
			/>
		</div>
	);
};

export default Search;
