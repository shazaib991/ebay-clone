import {Data, Data2} from "./SlideShowData";
import * as Icon from "react-bootstrap-icons";

export const SlideShow = () => {
	return (
		<div className="mt-[30px] relative h-[380px]">
			<div className="flex absolute bottom-[15px] left-[50%] z-[5]">
				{Data.map(() => {
					return <div className="h-[7px] w-[7px] border rounded-full mr-[5px]"></div>;
				})}
				{Data2.map(() => {
					return <div className="h-[7px] w-[7px] border rounded-full mr-[5px]"></div>;
				})}
			</div>
			<div className="flex overflow-auto h-full">
				{Data.map((item) => {
					return (
						<div
							className={`bg-${item.backgroundColor} flex min-w-[100vw] items-center justify-between h-full font-[arimo] relative`}
						>
							<div className="ml-[80px] mb-[70px]">
								<p className={`text-[45px] font-bold leading-12 mb-[10px] text-${item.textColor}`}>
									{item.title}
								</p>
								<p className={`text-[15px] mb-[30px] text-${item.textColor} font-medium`}>{item.description}</p>
								<button
									className={`bg-${item.textColor} rounded-full py-[8px] font-bold text-${item.buttonTextColor} px-[20px] cursor-pointer`}
								>
									{item.buttonText}
								</button>
							</div>
							<div>
								<div className="flex mb-[35px]">
									{item.products.map((item2) => {
										return (
											<>
												<div className="flex flex-col items-center">
													<img src={item2.image} className="h-[200px]" alt="" />
													<div className="flex items-center">
														<p className={`text-[18px] font-bold text-${item.textColor}`}>
															{item2.title}
														</p>
														<Icon.ChevronRight
															size={13}
															className="ml-[10px]"
															color={`${item.chevronColor}`}
														></Icon.ChevronRight>
													</div>
												</div>
											</>
										);
									})}
								</div>
							</div>
							<div className="flex absolute bottom-[15px] right-[20px]">
								<div className="bg-white rounded-full p-[8px] cursor-pointer">
									<Icon.ChevronLeft></Icon.ChevronLeft>
								</div>
								<div className="bg-white rounded-full p-[8px] ml-[5px] cursor-pointer">
									<Icon.ChevronRight></Icon.ChevronRight>
								</div>
								<div className="bg-white rounded-full p-[8px] ml-[5px] cursor-pointer">
									<Icon.Pause></Icon.Pause>
									<Icon.Play className="hidden"></Icon.Play>
								</div>
							</div>
						</div>
					);
				})}
				{Data2.map((item) => {
					return (
						<div
							className={`${item.backgroundColor} min-w-[100vw] flex items-center justify-between h-full font-[arimo] relative`}
						>
							<div className="ml-[80px] mb-[70px]">
								<p className={`text-[45px] font-bold leading-12 mb-[10px] text-${item.textColor}`}>
									{item.title}
								</p>
								<p className={`text-[15px] mb-[30px] text-${item.textColor} font-medium`}>{item.description}</p>
								<button
									className={`bg-${item.textColor} rounded-full py-[8px] font-bold ${item.buttonTextColor} px-[20px] cursor-pointer`}
								>
									{item.buttonText}
								</button>
							</div>
							<div className="h-full">
								<div className="h-full">
									<img src={item.backgroundImage} className="h-full" alt="" />
								</div>
							</div>
							<div className="flex absolute bottom-[15px] left-[50%]">
								{Data.map(() => {
									return <div className="h-[7px] w-[7px] border rounded-full mr-[5px]"></div>;
								})}
								{Data2.map(() => {
									return <div className="h-[7px] w-[7px] border rounded-full mr-[5px]"></div>;
								})}
							</div>
							<div className="flex absolute bottom-[15px] right-[20px]">
								<div className="bg-white rounded-full p-[8px] cursor-pointer">
									<Icon.ChevronLeft></Icon.ChevronLeft>
								</div>
								<div className="bg-white rounded-full p-[8px] ml-[5px] cursor-pointer">
									<Icon.ChevronRight></Icon.ChevronRight>
								</div>
								<div className="bg-white rounded-full p-[8px] ml-[5px] cursor-pointer">
									<Icon.Pause></Icon.Pause>
									<Icon.Play className="hidden"></Icon.Play>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
