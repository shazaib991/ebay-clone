import logo from "../../assets/pngegg.png";
import * as Icon from "react-bootstrap-icons";

export const LeftHalf = () => {
	return (
		<div className="flex font-[Arimo] text-[12px] ml-2 md:ml-[40px] font-medium w-auto justify-start order-1 xl:order-none">
			<img src={logo} className="h-[50px]" alt="ebay logo" />
			<div className="flex items-center ml-[18px] cursor-pointer">
				<p className="w-[50px] leading-[1.2]">Shop by category</p>

				<Icon.ChevronDown size={11}></Icon.ChevronDown>
			</div>
		</div>
	);
};
