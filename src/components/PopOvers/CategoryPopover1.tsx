import {useSelector} from "react-redux";

export const CategoryPopover1 = () => {
	interface Category {
		name: string;
		image: string;
	}

	interface RootState {
		states: {
			value: {
				productCategories: Category[];
				categoryName: HTMLElement;
			};
		};
	}

	const productCategories = useSelector((state: RootState) => state.states.value.productCategories);
	const categoryName = useSelector((state: RootState) => state.states.value.categoryName);

	return (
		<>
			<div className={`${categoryName.innerText == "Clothes" ? "flex" : "hidden"}`}>
				<div>
					<p>Most popular categories</p>
					<hr />
					<p>Women's clothing</p>
					<p>Footwear for women</p>
					<p>Men's clothing</p>
					<p>Men's footwear</p>
					<p>Watches</p>
					<p>Jewelry</p>
				</div>
				<div>
					<p>More categories</p>
					<hr />
					<p>Accessories for men</p>
					<p>Accessories for women</p>
					<p>Bags and wallets for women</p>
					<p>Mens sunglasses</p>
					<p>Womens sunglasess</p>
					<p>Sneakers Deals</p>
					<p>Sell on eBay</p>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div key={index} className={`${data.name == "Clothes" ? "block" : "hidden"}`}>
							<div>
								<p>{data.name}</p>
								<p>Check the offers</p>
								<button>Shop now</button>
							</div>
							<img src={data.image} alt="" />
						</div>
					);
				})}
			</div>
			<div className={`${categoryName.innerText == "Electronics" ? "flex" : "hidden"}`}>
				<div>
					<p>Most popular categories</p>
					<hr />
					<p>Smartphones and accessories</p>
					<p>Video games and consoles</p>
					<p>Computers and tablets</p>
					<p>Cameras and photos</p>
					<p>Camera drones</p>
					<p>Refurbished Smart home</p>
				</div>
				<div>
					<p>More categories</p>
					<hr />
					<p>Apple</p>
					<p>Samsung</p>
					<p>Portable</p>
					<p>audio and headphones</p>
					<p>Smart watches</p>
					<p>Deals</p>
					<p>Sell on eBay</p>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div key={index} className={`${data.name == "Electronics" ? "block" : "hidden"}`}>
							<div>
								<p>{data.name}</p>
								<p>Check the offers</p>
								<button>Shop now</button>
							</div>
							<img src={data.image} alt="" />
						</div>
					);
				})}
			</div>
		</>
	);
};
