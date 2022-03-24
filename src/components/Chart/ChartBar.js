import PropTypes from "prop-types";
import "./ChartBar.css";

const ChartBar = (props) => {
	let fillHeight = "0%";

	if (props.maxValue > 0) {
		fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
	}

	let barStyle = {
		"--fill-height": fillHeight
	};
	
	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={barStyle}></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

ChartBar.propTypes = {
	value: PropTypes.number,
	maxValue: PropTypes.number,
	label: PropTypes.string
};


export default ChartBar;