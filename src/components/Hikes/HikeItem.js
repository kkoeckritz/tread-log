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
				<div className="hike-item__mileage">{props.mileage} mi</div>
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