import {Data} from "./SlideShowData";

export const SlideShow = () => {
	return (
		<div>
			{Data.map((item) => {
				<div className={`bg-${item.backgroundColor}`}>
					<div>
						<p>{item.title}</p>
						<p>{item.description}</p>
						<button>{item.buttonText}</button>
					</div>
					<div>
						<div>
							{item.products.map((item2) => {
								<div>
									<img src={item2.image} alt="" />
									<p>{item2.title}</p>
								</div>;
							})}
						</div>
					</div>
				</div>;
			})}
		</div>
	);
};
