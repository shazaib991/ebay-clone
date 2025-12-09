import {Categories} from "../components/Categories/Categories.tsx";
import {Footer} from "../components/Footer/Footer.tsx";
import {Header} from "../components/Header/Header.tsx";
import {HeaderMain} from "../components/HeaderMain/HeaderMain.tsx";
import {InfoCard} from "../components/InfoCard/InfoCard.tsx";
import {LearnMoreCard} from "../components/LearnMoreCard/LearnMoreCard.tsx";
import {ProductCard} from "../components/ProductCard/ProductCard.tsx";
import {ProductDealsCard} from "../components/ProductDealsCard/ProductDealsCard.tsx";
import {SlideShow} from "../components/SlideShow/SlideShow.tsx";

export const Home = () => {
	return (
		<>
			<Header></Header>
			<HeaderMain></HeaderMain>
			<Categories></Categories>
			<SlideShow></SlideShow>
			<InfoCard></InfoCard>
			<ProductCard></ProductCard>
			<ProductDealsCard></ProductDealsCard>
			<LearnMoreCard></LearnMoreCard>
			<Footer></Footer>
		</>
	);
};
