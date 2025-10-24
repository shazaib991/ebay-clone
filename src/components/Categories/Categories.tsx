import axios from "axios";
import {useCallback, useEffect} from "react";
import {Link} from "react-router";
import {CategoriesPopOver} from "../PopOvers/CategoriesPopOver";
import {changeCategoryNextHtmlElement, changeCategoryPreviousHtmlElement, changeProductCategories} from "../states/States1.ts";
import {changeCategoryMouseOver} from "../states/States1.ts";
import {useDispatch, useSelector} from "react-redux";

export const Categories = () => {
	interface Category {
		name: string;
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

		productCategoriesResponseData.push({id: 51, name: "Deals"}, {id: 52, name: "Sell"});
		productCategoriesResponseData.unshift({id: 1, name: "eBay Live"}, {id: 2, name: "Saved"});

		dispatch(changeProductCategories(productCategoriesResponseData));
	}, [dispatch]);

	const handleCategoriesMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1) {
			return;
		}

		if (!e.currentTarget.previousElementSibling) return;
		if (!e.currentTarget.nextElementSibling) return;

		dispatch(changeCategoryMouseOver(true));

		e.currentTarget.previousElementSibling.classList.replace("bg-white", "bg-black");
		e.currentTarget.nextElementSibling.classList.replace("bg-white", "bg-black");

		dispatch(changeCategoryPreviousHtmlElement(e.currentTarget.previousElementSibling));
		dispatch(changeCategoryNextHtmlElement(e.currentTarget.nextElementSibling));
	};

	const handleCategoriesMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1) {
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
			<div className="w-full flex justify-center font-[arimo] mt-[5px] relative">
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
