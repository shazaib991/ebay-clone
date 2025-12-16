import {Link} from "react-router-dom";

export const LeftHalf = () => {
	return (
		<>
			<div className="flex flex-wrap justify-center text-[12px] font-[Arimo] font-medium ml-[55px] max-lg:ml-0 gap-y-1">
				<p>Hi!</p>
				<Link to={"/"} className="underline text-blue-600">
					Sign in
				</Link>
				<p className="mx-[2px]">or</p>
				<Link to={"/"} className="underline text-blue-600">
					register
				</Link>
				<div className="ml-[30px] max-sm:ml-2 flex flex-wrap justify-center">
					<Link to={"/"}>Daily Deals</Link>
					<Link to={"/"} className="ml-[20px] max-sm:ml-3">
						Brand Outlet
					</Link>
					<Link to={"/"} className="ml-[20px] max-sm:ml-3">
						Gift Cards
					</Link>
					<Link to={"/"} className="ml-[20px] max-sm:ml-3">
						Help & Contact
					</Link>
				</div>
			</div>
		</>
	);
};
