import PropTypes from "prop-types";
import "./HikeDate.css";

const HikeDate = (props) => {
	const dateMonth = props.date.toLocaleString("en-us", {month: "long"});
	const dateYear = props.date.getFullYear();
	const dateDay = props.date.getDate() + 1;

	return (
		<div className="hike-date">
			<div className="hike-date__month">{dateMonth}</div>
			<div className="hike-date__year">{dateYear}</div>
			<div className="hike-date__day">{dateDay}</div>
		</div>
	);
};

HikeDate.propTypes = {
	date: PropTypes.instanceOf(Date)
};
HikeDate.defaultProps = {
	date: "undated",
};

export default HikeDate;