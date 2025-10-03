import {Link} from "react-router-dom";

export const LeftHalf = () => {
	return (
		<>
			<div className="flex text-[12px] font-[Arimo] font-medium ml-[55px]">
				<p>Hi!</p>
				<Link to={"/"} className="underline text-blue-600">
					Sign in
				</Link>
				<p className="mx-[2px]">or</p>
				<Link to={"/"} className="underline text-blue-600">
					register
				</Link>
				<div className="ml-[30px]">
					<Link to={"/"}>Daily Deals</Link>
					<Link to={"/"} className="ml-[20px]">
						Brand Outlet
					</Link>
					<Link to={"/"} className="ml-[20px]">
						Gift Cards
					</Link>
					<Link to={"/"} className="ml-[20px]">
						Help & Contact
					</Link>
				</div>
			</div>
		</>
	);
};
