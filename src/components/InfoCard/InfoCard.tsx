export const InfoCard = () => {
	return (
		<div className="bg-gray-200 px-[35px] py-[30px] mx-[45px] my-[25px] font-[arimo] rounded-[15px] flex justify-between items-center">
			<div className="cursor-pointer">
				<h1 className="font-bold text-[20px]">Shopping made easy</h1>
				<p className="mt-[5px]">Enjoy reliability, secure deliveries and hassle-free returns.</p>
			</div>
			<button className="bg-black text-white py-[8px] px-[20px] rounded-full cursor-pointer">Start now</button>
		</div>
	);
};
