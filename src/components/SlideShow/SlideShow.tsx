import {useDispatch, useSelector} from "react-redux";
import {Data} from "./SlideShowData";
import {changeSlideShowState} from "../states/States2";
import * as Icon from "react-bootstrap-icons";
import {useEffect} from "react";

export const SlideShow = () => {
	interface RootState {
		states2: {
			value: {
				slideShowStateActive: boolean;
			};
		};
	}

	const dispatch = useDispatch();
	const slideShowStateActive = useSelector((state: RootState) => state.states2.value.slideShowStateActive);
	const curentIndex = useSelector((state: RootState) => state.states2.value.slideShowStateActive);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(changeSlideShowState(!slideShowStateActive));
		}, 5000);

		return () => clearInterval(interval);
	}, [dispatch, slideShowStateActive]);

	return (
		<div className="mt-[30px] relative h-[380px]">
			<div className="flex absolute bottom-[15px] left-[50%] z-[5]">
				{Data.map(() => {
					return <div className="h-[7px] w-[7px] border rounded-full mr-[5px]"></div>;
				})}
			</div>
			<div className="flex absolute bottom-[15px] right-[20px] z-[5]">
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
			<div className="flex overflow-auto h-full">
				{Data.map((item) => {
					return (
						<div
							className={`bg-${item.backgroundColor} flex min-w-[100vw] ${
								slideShowStateActive ? "translate-x-[-100vw]" : "translate-x-0"
							} items-center justify-between h-full font-[arimo] transition`}
						>
							<div className="ml-[80px] mb-[70px]">
								<p className={`text-[45px] font-bold leading-12 mb-[10px] ${item.textColor}`}>{item.title}</p>
								<p className={`text-[15px] mb-[30px] ${item.textColor} font-medium`}>{item.description}</p>
								<button
									className={`${item.buttonBackgroundColor} rounded-full py-[8px] font-bold ${item.buttonTextColor} px-[20px] cursor-pointer`}
								>
									{item.buttonText}
								</button>
							</div>
							<div>
								<div className="flex mb-[35px]">
									{item.products
										? item.products.map((item2) => {
												return (
													<>
														<div className="flex flex-col items-center">
															<img src={item2.image} className="h-[200px]" alt="" />
															<div className="flex items-center">
																<p className={`text-[18px] font-bold ${item.textColor}`}>
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
										  })
										: ""}
								</div>
							</div>
							{item.backgroundImage ? (
								<div className="h-full">
									<div className="h-full">
										<img src={item.backgroundImage} className="h-full" alt="" />
									</div>
								</div>
							) : (
								""
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
