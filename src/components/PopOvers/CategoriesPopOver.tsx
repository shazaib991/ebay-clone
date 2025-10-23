import {useDispatch, useSelector} from "react-redux";
import {changeCategoryMouseOver, changeCategoryPopOverInside} from "../states/States1";

export const CategoriesPopOver = () => {
	interface RootState {
		states: {
			value: {
				categoryMouseOver: boolean;
			};
		};
	}

	const handleMouseEnter = () => {
		dispatch(changeCategoryMouseOver(true));
		dispatch(changeCategoryPopOverInside(true));
	};

	const dispatch = useDispatch();
	const categoryMouseOver = useSelector((state: RootState) => state.states.value.categoryMouseOver);

	return (
		<div
			className={`${
				categoryMouseOver ? "block" : "hidden"
			} absolute top-[27px] h-[300px] rounded-[20px] w-[98%] bg-blue-300`}
			onMouseLeave={() => dispatch(changeCategoryMouseOver(false))}
			onMouseEnter={() => handleMouseEnter()}
		></div>
	);
};
