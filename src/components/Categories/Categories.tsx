import axios from "axios";
import {useCallback, useEffect} from "react";
import {Link} from "react-router";
import {CategoriesPopOver} from "../PopOvers/CategoriesPopOver";
import {
	changeCategoryName,
	changeCategoryNextHtmlElement,
	changeCategoryPreviousHtmlElement,
	changeProductCategories,
} from "../states/States1.ts";
import {changeCategoryMouseOver} from "../states/States1.ts";
import {useDispatch, useSelector} from "react-redux";

export const Categories = () => {
	interface Category {
		name: string;
		image: string;
	}

	interface RootState {
		states: {
			value: {
				productCategories: Category[];
				categoryMouseOver: boolean;
				categoryPopOverInside: boolean;
				categoryPreviousHtmlElement: object;
			};
		};
	}

	const dispatch = useDispatch();
	const productCategories = useSelector((state: RootState) => state.states.value.productCategories);

	const getProductCategories = useCallback(async () => {
		const productCategoriesResponse = await axios("https://api.escuelajs.co/api/v1/categories");
		const productCategoriesResponseData = productCategoriesResponse.data.slice(0, 6);

		productCategoriesResponseData.push(
			{id: 51, name: "Deals", image: "http://placeimg.com/640/480/abstract"},
			{
				id: 52,
				name: "Sell",
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnX0WPkekrKyTPe1oMqPu0MzbpM8MBcXPng&s",
			}
		);
		productCategoriesResponseData.unshift(
			{id: 1, name: "eBay Live", image: "http://placeimg.com/640/480/abstract"},
			{id: 2, name: "Saved", image: "http://placeimg.com/640/480/abstract"}
		);

		const updatedCategories = productCategoriesResponseData.map((item: Category & {id: number}) => ({
			...item,
			name: item.name?.toString().replace("undefined_84", "Jeans") || item.name,
			image: item.image
				? item.image
						.toString()
						.replace(
							"http://placeimg.com/640/480/abstract",
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sVHIry8mKGvctfSSDURN4Lm6h2nWzhrf3g&s"
						)
				: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sVHIry8mKGvctfSSDURN4Lm6h2nWzhrf3g&s",
		}));

		dispatch(changeProductCategories(updatedCategories));
	}, [dispatch]);

	const handleCategoriesMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1 || index == 8) {
			return;
		}

		if (!e.currentTarget.previousElementSibling) return;
		if (!e.currentTarget.nextElementSibling) return;

		dispatch(changeCategoryMouseOver(true));
		dispatch(changeCategoryName(e.currentTarget));

		e.currentTarget.previousElementSibling.classList.replace("bg-white", "bg-black");
		e.currentTarget.nextElementSibling.classList.replace("bg-white", "bg-black");

		dispatch(changeCategoryPreviousHtmlElement(e.currentTarget.previousElementSibling));
		dispatch(changeCategoryNextHtmlElement(e.currentTarget.nextElementSibling));
	};

	const handleCategoriesMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1 || index == 8) {
			return;
		}

		if (!e.currentTarget.previousElementSibling) return;
		if (!e.currentTarget.nextElementSibling) return;

		dispatch(changeCategoryMouseOver(false));
		e.currentTarget.previousElementSibling.classList.replace("bg-black", "bg-white");
		e.currentTarget.nextElementSibling.classList.replace("bg-black", "bg-white");
	};

	useEffect(() => {
		getProductCategories();
	}, [getProductCategories]);

	return (
		<div>
			<hr className="mt-[20px]" />
			<div className="w-full flex justify-center font-[arimo] mt-[5px] relative font-medium">
				{productCategories.map((data: Category, index: number) => {
					return (
						<div key={index} className="flex">
							<div className={`bg-white w-[1px] h-full`}></div>
							<button
								onMouseEnter={(e) => handleCategoriesMouseEnter(e, index)}
								onMouseLeave={(e) => handleCategoriesMouseLeave(e, index)}
								className="pb-[5px]"
							>
								<Link to={"/"} className="mx-[20px] text-[13px] hover:underline hover:text-blue-700">
									{data.name}
								</Link>
							</button>
							<div className="bg-white w-[1px] h-full"></div>
						</div>
					);
				})}
				<CategoriesPopOver></CategoriesPopOver>
			</div>
		</div>
	);
};
