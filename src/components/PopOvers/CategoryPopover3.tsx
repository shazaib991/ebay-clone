import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

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
			<div className={`${categoryName.innerText == "Miscellaneous" ? "flex" : "hidden"} w-full justify-between`}>
				<div className="ml-[15px] mt-[15px] text-[13px] mr-[15px] w-[20%] flex flex-col">
					<p className="font-bold mb-[5px]">Most popular categories</p>
					<hr />
					<div className="flex flex-col gap-2 mt-[10px]">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Collectibles
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Art
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Action figures
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Cartoon characters
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Movie and TV
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Characters Diecast
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Musical memorabilia
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
								Sports memorabilia
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Trading card games
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Antiques
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Comics
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Funko pop
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Star Wars
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
								data.name == "Miscellaneous" ? "flex" : "hidden"
							} relative rounded-[20px] w-[60%] bg-[#1a1a17] my-[15px] mr-[15px]`}
						>
							<div className="absolute top-0 left-0 text-white mt-[35px] ml-[30px]">
								<p className="text-[30px] text-[#fc8d05] font-bold">{data.name}</p>
								<p className="mt-[10px] text-[#fc8d05] font-medium">Check the offers</p>
								<button className="mt-[70px] w-[120px] bg-[#fc8d05] text-[#1a1a18] rounded-full font-semibold text-[15px] py-[7px] px-[10px] cursor-pointer">
									Shop now
								</button>
							</div>
							<img
								src={data.image}
								className="w-[280px] h-full absolute top-0 right-[-1px] rounded-r-[20px]"
								alt="miscellaneous image"
							/>
						</div>
					);
				})}
			</div>

			<div className={`${categoryName.innerText == "Jeans" ? "flex" : "hidden"} w-full justify-between`}>
				<div className="ml-[15px] mt-[15px] text-[13px] mr-[15px] w-[20%] flex flex-col">
					<p className="font-bold mb-[5px]">Most popular categories</p>
					<hr />
					<div className="flex flex-col gap-2 mt-[10px]">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Skinny
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Slim
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Straight
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Bootcut
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Flare
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Wide-leg
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Mom
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
								Tapered
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Cropped
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Mid-rise
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Low-rise
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Selvedge
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Carpenter
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
								data.name == "Jeans" ? "flex" : "hidden"
							} relative rounded-[20px] w-[60%] bg-[#3f739e] my-[15px] mr-[15px]`}
						>
							<div className="absolute top-0 left-0 text-white mt-[35px] ml-[30px]">
								<p className="text-[30px] text-white font-bold">{data.name}</p>
								<p className="mt-[10px] text-white font-medium">Check the offers</p>
								<button className="mt-[50px] w-[120px] bg-white text-[#3f739e] rounded-full font-semibold text-[15px] py-[7px] px-[10px] cursor-pointer">
									Shop now
								</button>
							</div>
							<img
								src={data.image}
								className="w-[280px] h-full absolute top-0 right-[-1px] rounded-r-[20px]"
								alt="jeans image"
							/>
						</div>
					);
				})}
			</div>

			<div className={`${categoryName.innerText == "Sell" ? "flex" : "hidden"} w-full justify-between`}>
				<div className="ml-[15px] mt-[15px] text-[13px] mr-[15px] w-[20%] flex flex-col">
					<hr className="mb-[10px]" />
					<div className="flex flex-col gap-2">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								How to create a listing
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Join our growth program
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Seller center
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Seller updates
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Seller customer service
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								eBay managed payments
							</Link>
						</div>
					</div>
				</div>

				<div className="text-[13px] mt-[15px] mr-[15px] w-[20%] flex flex-col">
					<hr className="mb-[10px]" />
					<div className="flex flex-col gap-2">
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Learn to sell
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								eBay stores
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								eBay fees
							</Link>
						</div>
						<div className="w-fit">
							<Link to="/" className="font-medium hover:underline">
								Selling limits
							</Link>
						</div>
					</div>
				</div>

				{productCategories.map((data, index) => {
					return (
						<div
							key={index}
							className={`${
								data.name == "Sell" ? "flex" : "hidden"
							} relative rounded-[20px] w-[60%] bg-[#00668c] my-[15px] mr-[15px]`}
						>
							<div className="absolute top-0 left-0 text-white mt-[35px] ml-[30px]">
								<p className="text-[30px] text-[#e3e3e1] font-bold">{data.name}</p>
								<p className="mt-[10px] text-[#e3e3e1] font-medium">Check the offers</p>
								<button className="mt-[50px] w-[120px] bg-[#e3e3e1] text-[#00668c] rounded-full font-semibold text-[15px] py-[7px] px-[10px] cursor-pointer">
									Shop now
								</button>
							</div>
							<img
								src={data.image}
								className="w-[280px] h-full absolute top-0 right-[-1px] rounded-r-[20px]"
								alt="sell image"
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
