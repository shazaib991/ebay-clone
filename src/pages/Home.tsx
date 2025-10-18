import {Categories} from "../components/Categories/Categories.tsx";
import {Header} from "../components/Header/Header.tsx";
import {HeaderMain} from "../components/HeaderMain/HeaderMain.tsx";

export const Home = () => {
	return (
		<>
			<Header></Header>
			<HeaderMain></HeaderMain>
			<Categories></Categories>
		</>
	);
};
