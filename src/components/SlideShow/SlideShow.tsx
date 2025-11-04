import {useDispatch, useSelector} from "react-redux";
import {Data} from "./SlideShowData";
import {changeCurrentIndex, changeSlideTransitionEnabled} from "../states/States2";
import * as Icon from "react-bootstrap-icons";
import {useEffect} from "react";

export const SlideShow = () => {
	interface RootState {
		states2: {
			value: {
				slideShowStateActive: boolean;
				currentIndex: number;
				slideTransitionEnabled: boolean;
			};
		};
	}

	const dispatch = useDispatch();
	const slideShowStateActive = useSelector((state: RootState) => state.states2.value.slideShowStateActive);
	const currentIndex = useSelector((state: RootState) => state.states2.value.currentIndex);
	const slideTransitionEnabled = useSelector((state: RootState) => state.states2.value.slideTransitionEnabled);

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentIndex >= Data.length) {
				dispatch(changeSlideTransitionEnabled(false));
				dispatch(changeCurrentIndex(0));

				setTimeout(() => {
					dispatch(changeSlideTransitionEnabled(true));
				}, 50);
			} else {
				dispatch(changeSlideTransitionEnabled(true));
				dispatch(changeCurrentIndex(currentIndex + 1));
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [currentIndex, dispatch, slideShowStateActive]);

	const slides = [...Data, {...Data[0]}];

	return (
		<div className="mt-[30px] relative h-[380px]">
			<div className="flex absolute bottom-[15px] left-[50%] z-[5]">
				{Data.map((_, index) => {
					return (
						<div
							key={index}
							className={`h-[7px] w-[7px] border ${
								currentIndex === index || (currentIndex === Data.length && index === 0) ? "bg-black" : ""
							} rounded-full mr-[5px]`}
						></div>
					);
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
			<div className="flex overflow-hidden h-full relative">
				{slides.map((item, index) => {
					return (
						<div
							key={index}
							className={`bg-${
								item.backgroundColor
							} flex w-[100vw] absolute top-0 left-0 h-full items-center justify-between 
								${slideTransitionEnabled ? "transition-all duration-500 ease-in-out" : ""} font-[arimo]`}
							style={{
								transform: `translateX(${(index - currentIndex) * 100}vw)`,
							}}
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
										? item.products.map((item2, index) => {
												return (
													<>
														<div key={index} className="flex flex-col items-center">
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
