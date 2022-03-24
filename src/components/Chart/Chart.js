import PropTypes from "prop-types";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	const datapointValues = props.datapoints.map(datapoint => datapoint.value);
	const totalMaximum = Math.max(...datapointValues);
	
	return (
		<div className="chart">
			{props.datapoints.map(point => <ChartBar value={point.value} maxValue={totalMaximum} label={point.label} key={point.label} />)}
		</div>
	);
};

Chart.propTypes = {
	datapoints: PropTypes.array
};

export default Chart;