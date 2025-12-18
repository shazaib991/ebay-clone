import {Data} from "./LearnMoreCardData";

export const LearnMoreCard = () => {
	return (
		<>
			{Data.map((item, index) => {
				return (
					<div className="mt-[30px] relative h-[380px] max-sm:h-[700px]" key={index}>
						<div
							className={`${item.backgroundColor} flex w-full h-full items-center justify-between font-[arimo] max-sm:flex-col`}
						>
							<div className="ml-[80px] mb-[70px] max-sm:ml-0 max-sm:mt-[50px]">
								<p className={`text-[45px] font-bold leading-12 mb-[10px] ${item.textColor}`}>{item.title}</p>
								<p className={`text-[15px] mb-[30px] ${item.textColor} font-medium`}>{item.description}</p>
								<button
									className={`${item.buttonBackgroundColor} rounded-full py-[8px] font-bold ${item.buttonTextColor} px-[20px] cursor-pointer`}
								>
									{item.buttonText}
								</button>
							</div>

							{item.backgroundImage ? (
								<div className="h-full">
									<img src={item.backgroundImage} className="h-full" alt="" />
								</div>
							) : null}
						</div>
					</div>
				);
			})}
		</>
	);
};
