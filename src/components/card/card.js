import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
import {
	setToDetailData,
	addToFavorite,
	removed,
} from "../../redux/action/bookAction";

const Card = (props) => {
	const { item } = props;
	const dispatch = useDispatch();
	let navigate = useNavigate();
	let favorite = useSelector((state) => state.books.favorite);
	const handleChangeRoute = () => {
		dispatch(setToDetailData(item));
		navigate(item?.volumeInfo?.title);
	};
	const value = favorite?.filter((el) => el.id === item.id);

	const addToMyVaforite = () => {
		if (value.length === 0) {
			dispatch(addToFavorite(item));
		} else {
			dispatch(removed(item.id));
		}
	};

	return (
		<div className="p-2">
			<div className="relative border-2 p-0 rounded-lg overflow-hidden shadow  bg-gray-300 h-full flex flex-col justify-between items-center">
				<div
					onClick={addToMyVaforite}
					className="absolute right-2 cursor-pointer top-2 bg-white bg-opacity-20 hover:bg-opacity-80 rounded-lg p-1"
				>
					<StarRatings
						rating={value?.length}
						starRatedColor="#fad419"
						starDimension="25px"
						starSpacing="1px"
						numberOfStars={1}
					/>
				</div>
				<img
					className="w-full object-cover"
					alt="images-1"
					src={item?.volumeInfo?.imageLinks?.thumbnail}
				/>
				<div
					onClick={handleChangeRoute}
					className="h-32 flex flex-col cursor-pointer justify-between absolute bottom-0 bg-black bg-opacity-40 rounded-sm w-full px-4 py-2"
				>
					<div className="flex flex-col items-center">
						<StarRatings
							rating={4}
							starRatedColor="#fad419"
							starDimension="25px"
							starSpacing="1px"
						/>
					</div>
					<p className="text-xl text-white font-semibold text-center">
						{item?.volumeInfo?.title}
					</p>
					<p className="text-base text-center text-gray-50">
						{item?.volumeInfo?.authors
							? item?.volumeInfo?.authors?.join(", ")
							: ""}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
