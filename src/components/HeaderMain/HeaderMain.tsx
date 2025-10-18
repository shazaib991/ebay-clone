import {HeaderMainMiddle} from "./HeaderMainMiddle";
import {LeftHalf} from "./LeftHalf";
import {RightHalf} from "./RightHalf";

export const HeaderMain = () => {
	return (
		<div className="mt-[15px] flex items-center justify-between">
			<LeftHalf></LeftHalf>
			<HeaderMainMiddle></HeaderMainMiddle>
			<RightHalf></RightHalf>
		</div>
	);
};
