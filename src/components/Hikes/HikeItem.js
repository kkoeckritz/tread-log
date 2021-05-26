import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import HikeDate from "./HikeDate";
import "./HikeItem.css";

const HikeItem = (props) => {
	return (
		<Card className="hike-item">
			<HikeDate date={props.date}/>
			<div className="hike-item__description">
				<h2>{props.title}</h2>
				<h5 className="hike-item__mileage">{props.mileage}</h5>
			</div>
		</Card>
	);
};

HikeItem.propTypes = {
	date: PropTypes.instanceOf(Date),
	title: PropTypes.string,
	mileage: PropTypes.number
};
HikeItem.defaultProps = {
	date: "undated",
	title: "untitled",
	mileage: "???"
};

export default HikeItem;