import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

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
			<div className={`${categoryName.innerText == "Furniture" ? "flex" : "hidden"} w-full justify-between`}>
				<div className="ml-[15px] mt-[15px] text-[13px] mr-[15px] w-[20%] flex flex-col">
					<p className="font-bold mb-[5px]">Most popular categories</p>
					<hr />
					<div className="flex flex-col gap-2 mt-[10px]">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Workshop Tools and Equipment
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Patio, garden and outdoors
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Home improvement
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Kitchen, dining and bar
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Lamps, lights and fans
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Interior decoration
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
								Toys
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Pets
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Crafts
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Art supplies
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Musical instruments
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
								data.name == "Furniture" ? "flex" : "hidden"
							} relative rounded-[20px] w-[60%] bg-[#1a1a17] my-[15px] mr-[15px]`}
						>
							<div className="absolute top-0 left-0 text-white mt-[35px] ml-[30px]">
								<p className="text-[30px] text-[#e3e3e1] font-bold">{data.name}</p>
								<p className="mt-[10px] text-[#e3e3e1] font-medium">Check the offers</p>
								<button className="mt-[70px] w-[120px] bg-[#e3e3e1] text-[#1a1a18] rounded-full font-semibold text-[15px] py-[7px] px-[10px] cursor-pointer">
									Shop now
								</button>
							</div>
							<img
								src={data.image}
								className="w-[280px] h-full absolute top-0 right-[-1px] rounded-r-[20px]"
								alt="furniture image"
							/>
						</div>
					);
				})}
			</div>

			<div className={`${categoryName.innerText == "Shoes" ? "flex" : "hidden"} w-full justify-between`}>
				<div className="ml-[15px] mt-[15px] text-[13px] mr-[15px] w-[20%] flex flex-col">
					<p className="font-bold mb-[5px]">Most popular categories</p>
					<hr />
					<div className="flex flex-col gap-2 mt-[10px]">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Cycling
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Fitness, running and yoga
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Fitness Tech
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Fishing
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Camping
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Team sports
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
								Watersports
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Winter sports
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Box and MMA
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Swimming
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								GPS & Running
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
								data.name == "Shoes" ? "flex" : "hidden"
							} relative rounded-[20px] w-[60%] bg-[#a2b0bd] my-[15px] mr-[15px]`}
						>
							<div className="absolute top-0 left-0 text-white mt-[35px] ml-[30px]">
								<p className="text-[30px] text-[#ffde66] font-bold">{data.name}</p>
								<p className="mt-[10px] text-[#ffde66] font-medium">Check the offers</p>
								<button className="mt-[50px] w-[120px] bg-[#ffde66] text-[#a2b0bd] rounded-full font-semibold text-[15px] py-[7px] px-[10px] cursor-pointer">
									Shop now
								</button>
							</div>
							<img
								src={data.image}
								className="w-[280px] h-full absolute top-0 right-[-1px] rounded-r-[20px]"
								alt="shoes image"
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
