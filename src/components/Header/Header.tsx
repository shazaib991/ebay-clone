import {LeftHalf} from "./LeftHalf";
import {RightHalf} from "./RightHalf";

export const Header = () => {
	return (
		<>
			<div className="flex justify-between min-h-[30px] items-center max-lg:flex-col max-lg:mb-[25px] max-lg:gap-2">
				<LeftHalf></LeftHalf>
				<RightHalf></RightHalf>
			</div>
			<hr></hr>
		</>
	);
};
