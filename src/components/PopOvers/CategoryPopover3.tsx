import {useSelector} from "react-redux";

export const CategoryPopover3 = () => {
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
			<div className={`${categoryName.innerText == "Miscellaneous" ? "flex" : "hidden"}`}>
				<div>
					<p>Most popular categories</p>
					<hr />
					<p>Collectibles</p>
					<p>Art</p>
					<p>Action figures</p>
					<p>Cartoon characters</p>
					<p>Movie and TV</p>
					<p>characters Diecast</p>
					<p>Musical memorabilia</p>
				</div>
				<div>
					<p>More categories</p>
					<hr />
					<p>Sports memorabilia</p>
					<p>Trading card</p>
					<p>games</p>
					<p>Antiques</p>
					<p>Comics</p>
					<p>Funko</p>
					<p>pop</p>
					<p>Star Wars</p>
					<p>Deals</p>
					<p>Sell on eBay</p>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div key={index} className={`${data.name == "Miscellaneous" ? "block" : "hidden"}`}>
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
			<div className={`${categoryName.innerText == "Jeans" ? "flex" : "hidden"}`}>
				<div>
					<p>Most popular categories</p>
					<hr />
					<p>Skinny</p>
					<p>Slim</p>
					<p>Straight</p>
					<p>Bootcut</p>
					<p>Flare</p>
					<p>wide-leg</p>
					<p>Mom</p>
				</div>
				<div>
					<p>More categories</p>
					<hr />
					<p>Tapered</p>
					<p>Cropped</p>
					<p>Mid-rise</p>
					<p>Low-rise</p>
					<p>Selvedge</p>
					<p>Carpenter</p>
					<p>Distressed/Ripped</p>
					<p>Deals</p>
					<p>Sell on eBay</p>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div key={index} className={`${data.name == "Jeans" ? "block" : "hidden"}`}>
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
			<div className={`${categoryName.innerText == "Sell" ? "flex" : "hidden"}`}>
				<div>
					<hr />
					<p>How to create a listing</p>
					<p>Join our growth program</p>
					<p>Seller center</p>
					<p>Seller updates</p>
					<p>Seller customer service</p>
					<p>eBay managed payments</p>
				</div>
				<div>
					<hr />
					<p>Learn to sell</p>
					<p>eBay stores</p>
					<p>eBay fees</p>
					<p>Selling limits</p>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div key={index} className={`${data.name == "Sell" ? "block" : "hidden"}`}>
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
