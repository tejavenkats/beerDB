const Card = (props) => {
	return (
		<div className="card_wrapper">
			<div className="card_info">
				<img className="thumbnail" src={props.thumbnail} alt="beerimage" />
				<p>
					Name:<b>{props.name}</b>
				</p>
				<p>
					Style:<b>{props.style}</b>
				</p>
				<p>
					Alcohol by Value: <b>{props.abv.length > 0 ? props.abv : "N/A"}</b>
				</p>
				<p>
					International Bitter Unit:
					<b>{props.ibu.length > 0 ? props.ibu : "N/A"}</b>
				</p>
			</div>
		</div>
	);
};

export default Card;
