import {useDispatch, useSelector} from "react-redux";
import {changeCategoryMouseOver} from "../states/States1";

export const CategoriesPopOver = () => {
	interface RootState {
		states: {
			value: {
				categoryMouseOver: boolean;
				categoryPreviousHtmlElement: HTMLElement;
				categoryNextHtmlElement: HTMLElement;
			};
		};
	}
	const dispatch = useDispatch();
	const categoryMouseOver = useSelector((state: RootState) => state.states.value.categoryMouseOver);
	const categoryPreviousHtmlElement = useSelector((state: RootState) => state.states.value.categoryPreviousHtmlElement);
	const categoryNextHtmlElement = useSelector((state: RootState) => state.states.value.categoryNextHtmlElement);

	const handleMouseEnter = () => {
		dispatch(changeCategoryMouseOver(true));
		categoryPreviousHtmlElement.classList.replace("bg-white", "bg-black");
		categoryNextHtmlElement.classList.replace("bg-white", "bg-black");
	};

	const handleMouseLeave = () => {
		dispatch(changeCategoryMouseOver(false));
		categoryPreviousHtmlElement.classList.replace("bg-black", "bg-white");
		categoryNextHtmlElement.classList.replace("bg-black", "bg-white");
	};

	return (
		<div
			className={`${
				categoryMouseOver ? "block" : "hidden"
			} absolute top-[27px] h-[300px] rounded-[20px] w-[98%] bg-blue-300`}
			onMouseLeave={() => handleMouseLeave()}
			onMouseEnter={() => handleMouseEnter()}
		></div>
	);
};
