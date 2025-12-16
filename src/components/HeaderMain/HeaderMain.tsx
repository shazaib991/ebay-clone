import {HeaderMainMiddle} from "./HeaderMainMiddle";
import {LeftHalf} from "./LeftHalf";
import {RightHalf} from "./RightHalf";

export const HeaderMain = () => {
	return (
		<div className="mt-2 md:mt-[15px] flex items-center justify-between flex-wrap">
			<LeftHalf></LeftHalf>
			<HeaderMainMiddle></HeaderMainMiddle>
			<RightHalf></RightHalf>
		</div>
	);
};
