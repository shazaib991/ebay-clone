import {LeftHalf} from "./LeftHalf";
import {RightHalf} from "./RightHalf";

export const Header = () => {
	return (
		<>
			<div className="flex justify-between h-[30px] items-center">
				<LeftHalf></LeftHalf>
				<RightHalf></RightHalf>
			</div>
			<hr></hr>
		</>
	);
};
