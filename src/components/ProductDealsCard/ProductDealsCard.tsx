import {Data} from "./productDealsCardData";

export const ProductDealsCard = () => {
	return (
		<div className="flex font-[arimo] ml-[45px] mr-[30px] overflow-x-hidden hover:overflow-x-auto flex-nowrap">
			<div className="h-[230px] w-[230px] bg-black text-white p-[20px] rounded-[15px] flex-shrink-0">
				<h1 className="font-bold text-[25px]">Today's Deals</h1>
				<p>All with Free Shipping</p>
				<button className="mt-[20px] bg-white text-black px-[20px] py-[8px] rounded-full font-bold cursor-pointer">
					Shop now
				</button>
			</div>
			{Data.map((item, index) => {
				return (
					<div key={index} className="w-[230px] ml-[15px] flex-shrink-0">
						<img
							src={item.image}
							alt={item.title}
							className="h-[230px] w-full bg-gray-100 rounded-[15px] object-contain"
						/>
						<p className="text-[15px] mt-[15px]">{item.title}</p>
						<div className="mt-[8px] flex items-end">
							<p className="font-bold">&#36;{item.price}</p>
							{item.originalPrice && <p className="ml-[5px] text-[14px] line-through">&#36;{item.originalPrice}</p>}
						</div>
					</div>
				);
			})}
		</div>
	);
};
