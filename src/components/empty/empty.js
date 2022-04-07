import React from "react";

const Empty = (props) => {
	const { isNotFound } = props;
	if (isNotFound) {
		return (
			<div className="p-2 w-full flex justify-center">
				<img
					alt="empty"
					className="w-1/3 rounded-xl object-contain"
					src={require("./../../assets/image/empty.jpg")}
				/>
			</div>
		);
	} else {
		return null;
	}
};

export default Empty;
