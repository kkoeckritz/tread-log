import PropTypes from "prop-types";
import Chart from "../Chart/Chart";

const HikesChart = (props) => {
	const chartDatapoints = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 }
	];

	for (const hikes of props.items) {
		const monthIndex = hikes.date.getMonth(); // months are 0-indexed
		chartDatapoints[monthIndex].value += hikes.mileage;
	}
	
	return (
		<Chart datapoints={chartDatapoints} />
	);
};

HikesChart.propTypes = {
	items: PropTypes.array
};

export default HikesChart;