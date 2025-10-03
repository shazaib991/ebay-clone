import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";

export const RightHalf = () => {
	return (
		<>
			<div className="flex text-[12px] items-center font-[Arimo] font-medium mr-[40px]">
				<Link to={"/"}>Ship to</Link>
				<Link to={"/"} className="ml-[30px]">
					Sell
				</Link>
				<Link to={"/"} className="flex items-center ml-[30px]">
					<p className="mr-[5px]">Watchlist</p>
					<Icon.ChevronDown size={11}></Icon.ChevronDown>
				</Link>
				<Link to={"/"} className="flex items-center ml-[30px]">
					<p className="mr-[5px]">My eBay</p>
					<Icon.ChevronDown size={11}></Icon.ChevronDown>
				</Link>
				<div className="flex ml-[30px]">
					<Icon.Bell size={20}></Icon.Bell>
					<Icon.Cart size={20} className="ml-[20px]"></Icon.Cart>
				</div>
			</div>
		</>
	);
};
