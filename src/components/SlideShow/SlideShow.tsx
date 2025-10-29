import {Data} from "./SlideShowData";

export const SlideShow = () => {
	return (
		<div>
			{Data.map((item) => {
				return (
					<div className={`bg-${item.backgroundColor} flex items-center justify-between h-[400px] font-[arimo]`}>
						<div>
							<p className="text-[35px] font-bold">{item.title}</p>
							<p>{item.description}</p>
							<button>{item.buttonText}</button>
						</div>
						<div>
							<div className="flex">
								{item.products.map((item2) => {
									return (
										<div>
											<img src={item2.image} className="h-[200px]" alt="" />
											<p>{item2.title}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
