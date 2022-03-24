import PropTypes from "prop-types";
import HikeItem from "./HikeItem";
import "./HikesList.css";

const HikesList = (props) => {
	if (props.items.length > 0) {
		return (
			<ul className="hikes-list">
				{props.items.map((hike) => <HikeItem date={hike.date} title={hike.title} mileage={hike.mileage} key={hike.id} />)}
			</ul>
		);
	} else {
		return <h2>No hikes found for {props.items}</h2>;
	}
};

HikesList.propTypes = {
	items: PropTypes.array
};

export default HikesList;