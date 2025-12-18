import * as Icon from "react-bootstrap-icons";

export const HeaderMainMiddle = () => {
	return (
		<div className="w-full xl:w-[60%] relative font-[arimo] font-medium mt-2 xl:mt-0 order-3 xl:order-none">
			<input
				placeholder="Search for anything"
				className="border-[2px] rounded-[30px] w-full h-[45px] pt-[2px] pl-[40px] max-md:placeholder:text-[12px]"
			></input>
			<Icon.Search size={13} className="absolute top-[16px] left-4 cursor-text"></Icon.Search>
			<div className="h-[45px] bg-gray flex items-center border rounded-tr-[30px] rounded-br-[30px] absolute top-0 right-0 cursor-default">
				<p className="text-[14px] ml-[15px] mr-[35px]">All Categories</p>
				<Icon.ChevronDown size={11} className="mr-[10px]"></Icon.ChevronDown>
			</div>
		</div>
	);
};
