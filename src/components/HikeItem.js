import React from "react";
import HikeDate from "./HikeDate";
import "./HikeItem.css";

const HikeItem = (props) => {
	return (
		<div className="hike-item">
			<HikeDate date={props.date}/>
			<div className="hike-item__description">
				<h2>{props.title}</h2>
				<h5 className="hike-item__mileage">{props.mileage}</h5>
			</div>
		</div>
	);
};

HikeItem.propTypes = {
	date: "string",
	title: "number",
	mileage: "number"
};
HikeItem.defaultProps = {
	date: "undated",
	title: "untitled",
	mileage: "???"
};

export default HikeItem;