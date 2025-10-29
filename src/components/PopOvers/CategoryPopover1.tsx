import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

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
			<div className={`${categoryName.innerText == "Clothes" ? "flex" : "hidden"} w-full justify-between`}>
				<div className="ml-[15px] mt-[15px] text-[13px] mr-[15px] w-[20%] flex flex-col">
					<p className="font-bold mb-[5px]">Most popular categories</p>
					<hr />
					<div className="mt-[10px] w-fit">
						<Link to={"/"} className="font-medium hover:underline">
							Women's clothing
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to={"/"} className="font-medium hover:underline">
							Footwear for women
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to={"/"} className="font-medium hover:underline">
							Men's clothing
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to={"/"} className="font-medium hover:underline">
							Men's footwear
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to={"/"} className="font-medium hover:underline">
							Watches
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to={"/"} className="font-medium hover:underline">
							Jewelry
						</Link>
					</div>
				</div>
				<div className="text-[13px] mt-[15px] mr-[15px] w-[20%]">
					<p className="font-bold mb-[5px]">More categories</p>
					<hr />
					<div className="mt-[10px] w-fit">
						<Link to="/" className="font-medium hover:underline">
							Accessories for men
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to="/" className="font-medium hover:underline">
							Accessories for women
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to="/" className="font-medium hover:underline">
							Bags and wallets for women
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to="/" className="font-medium hover:underline">
							Mens sunglasses
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to="/" className="font-medium hover:underline">
							Womens sunglasses
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to="/" className="font-medium hover:underline">
							Sneakers Deals
						</Link>
					</div>
					<div className="mt-[10px] w-fit">
						<Link to="/" className="font-medium hover:underline">
							Sell on eBay
						</Link>
					</div>
				</div>
				{productCategories.map((data, index) => {
					return (
						<div
							key={index}
							className={`${
								data.name == "Clothes" ? "flex" : "hidden"
							} relative rounded-[20px] w-[60%] bg-blue-800 my-[15px] mr-[15px] z-[1]`}
						>
							<div className="absolute top-0 left-0 text-white mt-[35px] ml-[30px] z-[3]">
								<p className="text-[30px] text-[#e3e3e1] font-bold">{data.name}</p>
								<p className="mt-[10px] text-[#e3e3e1] font-medium">Check the offers</p>
								<button className="mt-[70px] w-[120px] bg-[#e3e3e1] text-[#1a1a18] rounded-full font-semibold text-[15px] py-[7px] px-[10px] cursor-pointer">
									Shop now
								</button>
							</div>
							<img
								src={data.image}
								className="w-full object-contain z-[2] h-full absolute top-0 right-[-1px] rounded-r-[20px]"
								alt="cloth image"
							/>
						</div>
					);
				})}
			</div>
			<div className={`${categoryName.innerText == "Electronics" ? "flex" : "hidden"} w-full justify-between`}>
				<div className="ml-[15px] mt-[15px] text-[13px] mr-[15px] w-[20%] flex flex-col">
					<p className="font-bold mb-[5px]">Most popular categories</p>
					<hr />
					<div className="flex flex-col gap-2 mt-[10px]">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Smartphones and accessories
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Video games and consoles
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Computers and tablets
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Cameras and photos
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Camera drones
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Refurbished Smart home
							</Link>
						</div>
					</div>
				</div>

				<div className="text-[13px] mt-[15px] mr-[15px] w-[20%] flex flex-col">
					<p className="font-bold mb-[5px]">More categories</p>
					<hr />
					<div className="flex flex-col gap-2 mt-[10px]">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Apple
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Samsung
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Portable audio and headphones
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Smart watches
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Deals
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Sell on eBay
							</Link>
						</div>
					</div>
				</div>

				{productCategories.map((data, index) => {
					return (
						<div
							key={index}
							className={`${
								data.name == "Electronics" ? "flex" : "hidden"
							} relative rounded-[20px] w-[60%] bg-[#ff8f05] my-[15px] mr-[15px]`}
						>
							<div className="absolute top-0 left-0 text-white mt-[35px] ml-[30px]">
								<p className="text-[30px] text-[#ced1e6] font-bold">{data.name}</p>
								<p className="mt-[10px] text-[#ced1e6] font-medium">Check the offers</p>
								<button className="mt-[50px] w-[120px] bg-[#ced1e6] text-[#ff8f05] rounded-full font-semibold text-[15px] py-[7px] px-[10px] cursor-pointer">
									Shop now
								</button>
							</div>
							<img
								src={data.image}
								className="w-[280px] h-full absolute top-0 right-[-1px] rounded-r-[20px]"
								alt="electronics image"
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
