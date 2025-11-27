import {Data} from "./ProductCardData";

export const ProductCard = () => {
	return (
		<div className="ml-[20px] font-[arimo]">
			{Data.map((item, index) => {
				return (
					<div key={index} className="mb-[50px]">
						<h1 className="text-[24px] font-bold">{item.title}</h1>
						<div className="flex">
							{item.products.map((product, id) => {
								return (
									<div key={id} className="mr-[20px] mt-[25px] flex flex-col items-center cursor-pointer group">
										<div className="w-[170px] h-[170px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
											<img src={product.image} alt={product.title} />
										</div>
										<p className="mt-[10px] font-medium group-hover:underline">{product.title}</p>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};
