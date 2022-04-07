import React from "react";
import ReactLoading from "react-loading";

const Loading = (props) => {
	const { isLoading } = props;
	if (isLoading) {
		return (
			<div className="w-full z-30 flex justify-center fixed p-4">
				<ReactLoading type={"spin"} color={"gray"} height={100} width={100} />
			</div>
		);
	} else {
		return null;
	}
};

export default Loading;
