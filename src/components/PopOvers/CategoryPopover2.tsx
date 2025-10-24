import {useSelector} from "react-redux";

export const CategoryPopover2 = () => {
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
			<div className={`${categoryName.innerText == "Furniture" ? "flex" : "hidden"}`}>
				<div>
					<p>Most popular categories</p>
					<hr />
					<p>Workshop Tools and Equipment</p>
					<p>Patio, garden and outdoors</p>
					<p>Home improvement</p>
					<p>Kitchen, dining and bar</p>
					<p>Lamps, lights and fans</p>
					<p>Interior decoration</p>
					<p>Home organization</p>
					<p>Home appliances</p>
				</div>
				<div>
					<p>More categories</p>
					<hr />
					<p>Toys</p>
					<p>Pets</p>
					<p>Crafts</p>
					<p>Art supplies</p>
					<p>Musical instruments</p>
					<p>Jewelry and beads</p>
					<p>Deals</p>
					<p>Sell on eBay</p>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div key={index} className={`${data.name == "Furniture" ? "block" : "hidden"}`}>
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
			<div className={`${categoryName.innerText == "Shoes" ? "flex" : "hidden"}`}>
				<div>
					<p>Most popular categories</p>
					<hr />
					<p>Cycling</p>
					<p>Fitness, running and yoga</p>
					<p>Fitness Tech</p>
					<p>Fishing</p>
					<p>Camping</p>
					<p>Scooters</p>
					<p>Team sports</p>
				</div>
				<div>
					<p>More categories</p>
					<hr />
					<p>Watersports</p>
					<p>Winter sports</p>
					<p>Box and MMA</p>
					<p>Swimming</p>
					<p>GPS & Running</p>
					<p>Watches</p>
					<p>Garmin</p>
					<p>Deals</p>
					<p>Sell on eBay</p>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div key={index} className={`${data.name == "Shoes" ? "block" : "hidden"}`}>
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
