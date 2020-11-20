//React and hook imports
import { useEffect, useState } from "react";
//component imports
import Card from "./Card";

const CardsContainer = (props) => {
	const [beerData, setBeerData] = useState([]);

	useEffect(() => {
		async function getAndSetState() {
			const dataResponse = await fetch(
				" https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
			);
			const beerinfoData = await dataResponse.json();
			const imgResponse = await fetch(
				"https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
			);
			const beerImgsData = await imgResponse.json();
			setBeerData(
				beerinfoData.slice(0, 40).map((beer) => {
					return {
						...beer,
						image: beerImgsData[Math.floor(Math.random() * 4)].image,
					};
				})
			);
		}
		getAndSetState();
	}, []);

	return (
		<div className="cardscontainer_wrapper">
			{beerData.map((beer, index) => {
				console.log(beer);
				return (
					<Card
						thumbnail={beer.image}
						abv={beer.abv}
						ibu={beer.ibu}
						key={beer.id}
						id={beer.id}
						name={beer.name}
						ounces={beer.ounces}
						style={beer.style}
					/>
				);
			})}
		</div>
	);
};

export default CardsContainer;
