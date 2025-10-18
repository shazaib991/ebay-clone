import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router";

export const Categories = () => {
	interface Category {
		name: string;
	}

	const [productCategories, setProductCategories] = useState<Category[]>([]);

	const getProductCategories = async () => {
		const productCategoriesResponse = await axios("https://api.escuelajs.co/api/v1/categories");
		setProductCategories(productCategoriesResponse.data);
	};

	useEffect(() => {
		getProductCategories();
	}, []);

	return (
		<div>
			<hr className="mt-[20px]" />
			<div className="flex justify-center font-[arimo] mt-[5px]">
				{productCategories.slice(0, 6).map((data) => {
					return (
						<Link to={"/"} className="ml-[25px] text-[13px] hover:underline hover:text-blue-700">
							{data.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
