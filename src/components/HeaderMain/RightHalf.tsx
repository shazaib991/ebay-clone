export const RightHalf = () => {
	return (
		<div className="flex items-center font-[arimo] mr-2 md:mr-[20px] font-medium w-auto justify-end md:justify-start order-2 xl:order-none">
			<button className="h-[45px] w-[120px] md:w-[170px] bg-blue-500 rounded-full text-white font-semibold mr-[5px] cursor-pointer hover:bg-blue-700">
				Search
			</button>
			<p className="text-[13px] cursor-pointer hover:text-blue-600">Advanced</p>
		</div>
	);
};
