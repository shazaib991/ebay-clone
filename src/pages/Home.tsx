import {Categories} from "../components/Categories/Categories.tsx";
import {Header} from "../components/Header/Header.tsx";
import {HeaderMain} from "../components/HeaderMain/HeaderMain.tsx";
import {InfoCard} from "../components/InfoCard/InfoCard.tsx";
import {SlideShow} from "../components/SlideShow/SlideShow.tsx";

export const Home = () => {
	return (
		<>
			<Header></Header>
			<HeaderMain></HeaderMain>
			<Categories></Categories>
			<SlideShow></SlideShow>
			<InfoCard></InfoCard>
		</>
	);
};
