/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
import { addToFavorite, removed } from "../redux/action/bookAction";

function DetailPage() {
	const detailBook = useSelector((state) => state.books.details);
	let navigate = useNavigate();
	const dispatch = useDispatch();
	let favorite = useSelector((state) => state.books.favorite);
	const value = favorite?.filter((el) => el.id === detailBook.id);

	useEffect(() => {
		if (!detailBook) {
			navigate("../");
		}
	}, [detailBook]);

	const data = [
		{
			label: "Author",
			value: detailBook?.volumeInfo?.authors?.join(", "),
		},
		{
			label: "Publisher",
			value: detailBook?.volumeInfo?.publisher,
		},
		{
			label: "Date",
			value: detailBook?.volumeInfo?.publishedDate,
		},
		{
			label: "Editors",
			value: detailBook?.volumeInfo?.publishedDate,
		},
	];

	const addToMyVaforite = () => {
		if (value.length === 0) {
			dispatch(addToFavorite(detailBook));
		} else {
			dispatch(removed(detailBook.id));
		}
	};

	return (
		<React.Fragment>
			<div className="py-10 md:px-24 lg:px-32 xl:px-44">
				<div className="flex flex-row  justify-between w-full">
					<div className="w-1/2 relative rounded-md bg-gray-700 p-2 h-full">
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
							className="w-full object-contain"
							alt="book-detail"
							src={detailBook?.volumeInfo?.imageLinks?.thumbnail}
						/>
					</div>
					<div className="pl-4 w-full ">
						<div className="bg-white min-h-full rounded p-6 w-full shadow">
							<p className="text-3xl font-bold">
								{detailBook?.volumeInfo?.title}
							</p>
							<p className="text-2xl text-gray-600 font-bold">
								{detailBook?.volumeInfo?.subtitle}
							</p>
							<div className="py-2">
								<StarRatings
									rating={2.403}
									starRatedColor="#fad419"
									starDimension="40px"
									starSpacing="5px"
								/>
							</div>
							{data?.map((item, index) => (
								<LabelValue key={index} value={item.value} label={item.label} />
							))}
						</div>
					</div>
				</div>
				<div className="w-full bg-white p-6 mt-4 rounded shadow">
					<p className="font-semibold">Categories :</p>
					<p>{detailBook?.volumeInfo?.categories?.join(", ")}</p>
					<p className="font-semibold">Description :</p>
					<p>{detailBook?.volumeInfo?.description}</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default DetailPage;

const LabelValue = (props) => {
	const { label, value } = props;
	if (!value) {
		return null;
	} else {
		return (
			<div>
				<p className="text-xl text-gray-400 font-semibold  mt-4">{label} :</p>
				<p className="text-xl font-semibold">{value}</p>
			</div>
		);
	}
};
