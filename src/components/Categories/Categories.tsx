import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router";
import {CategoriesPopOver} from "../PopOvers/CategoriesPopOver";

export const Categories = () => {
	interface Category {
		name: string;
	}

	const [productCategories, setProductCategories] = useState<Category[]>([]);

	const getProductCategories = async () => {
		const productCategoriesResponse = await axios("https://api.escuelajs.co/api/v1/categories");
		const productCategoriesResponseData = productCategoriesResponse.data.slice(0, 6);

		productCategoriesResponseData.push({id: 51, name: "Deals"}, {id: 52, name: "Sell"});
		productCategoriesResponseData.unshift({id: 1, name: "eBay Live"}, {id: 2, name: "Saved"});

		setProductCategories(productCategoriesResponseData);
	};

	const handleCategoriesMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1) {
			return;
		}
		if (!e.currentTarget.previousElementSibling) return;
		if (!e.currentTarget.nextElementSibling) return;
		e.currentTarget.previousElementSibling.classList.replace("bg-white", "bg-black");
		e.currentTarget.nextElementSibling.classList.replace("bg-white", "bg-black");
	};

	const handleCategoriesMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
		if (index == 0 || index == 1) {
			return;
		}
		if (!e.currentTarget.previousElementSibling) return;
		if (!e.currentTarget.nextElementSibling) return;
		e.currentTarget.previousElementSibling.classList.replace("bg-black", "bg-white");
		e.currentTarget.nextElementSibling.classList.replace("bg-black", "bg-white");
	};

	useEffect(() => {
		getProductCategories();
	}, []);

	return (
		<div>
			<hr className="mt-[20px]" />
			<div className="w-full flex justify-center font-[arimo] mt-[5px] relative">
				{productCategories.map((data, index) => {
					return (
						<div key={index} className="flex">
							<div className={`bg-white w-[1px] h-full`}></div>
							<button
								onMouseEnter={(e) => handleCategoriesMouseEnter(e, index)}
								onMouseLeave={(e) => handleCategoriesMouseLeave(e, index)}
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
