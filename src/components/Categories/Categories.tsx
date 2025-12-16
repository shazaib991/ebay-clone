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
import { Data } from "./CategoriesData.ts";

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
		// keeps chaning with random names for some reason so not using it
		// const productCategoriesResponse = await axios("https://api.escuelajs.co/api/v1/categories");
		const productCategoriesResponseData = Data;


		dispatch(changeProductCategories(productCategoriesResponseData));
	}, [dispatch]);

	const handleCategoriesMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1 || index == 8) {
			return;
		}

		if (!e.currentTarget.firstElementChild) return;
		if (!e.currentTarget.lastElementChild) return;

		dispatch(changeCategoryMouseOver(true));
		dispatch(changeCategoryName(e.currentTarget));

		e.currentTarget.firstElementChild.classList.replace("bg-white", "bg-black");
		e.currentTarget.lastElementChild.classList.replace("bg-white", "bg-black");

		dispatch(changeCategoryPreviousHtmlElement(e.currentTarget.firstElementChild));
		dispatch(changeCategoryNextHtmlElement(e.currentTarget.lastElementChild));
	};

	const handleCategoriesMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1 || index == 8) {
			return;
		}

		if (!e.currentTarget.firstElementChild) return;
		if (!e.currentTarget.lastElementChild) return;

		dispatch(changeCategoryMouseOver(false));
		e.currentTarget.firstElementChild.classList.replace("bg-black", "bg-white");
		e.currentTarget.lastElementChild.classList.replace("bg-black", "bg-white");
	};

	useEffect(() => {
		getProductCategories();
	}, [getProductCategories]);

	return (
		<div>
			<hr className="mt-[20px]" />
			<div className="w-full flex justify-center font-[arimo] mt-[5px] relative font-medium overflow-auto">
				{productCategories.map((data: Category, index: number) => {
					return (
						<div key={index} className="flex relative" onMouseEnter={(e) => handleCategoriesMouseEnter(e, index)} 
						onMouseLeave={(e) => handleCategoriesMouseLeave(e, index)}>
							<div className={`bg-white w-[1px] h-full absolute left-0 top-0`}></div>
							<button
								className="pb-[5px]"
							>
								<Link to={"/"} className="mx-[20px] text-[13px] hover:underline hover:text-blue-700">
									{data.name}
								</Link>
							</button>
							<div className="bg-white w-[1px] h-full absolute right-0 top-0"></div>
						</div>
					);
				})}
				<CategoriesPopOver></CategoriesPopOver>
			</div>
		</div>
	);
};
