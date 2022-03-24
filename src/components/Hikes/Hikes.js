import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import HikesFilter from "../HikesFilter/HikesFilter";
import HikesList from "./HikesList";
import HikesChart from "./HikesChart";
import "./Hikes.css";

const Hikes = (props) => {
	const yearList = [];
	let recentYear = 1929;

	for (let h of props.hikes) {
		const currentYear = h.date.getFullYear();
		if (!yearList.includes(currentYear)) {
			yearList.push(currentYear);
		}
		if (recentYear < currentYear) {
			recentYear = currentYear;
		}
	}
	
	const [filteredYear, setFilteredYear] = useState(recentYear);
	const filterYearHandler = (chosenYear) => {
		setFilteredYear(chosenYear);
	};

	const filteredHikes = props.hikes.filter(hike => hike.date.getFullYear() == filteredYear);
	
	return (
		<Card className="hikes">
			<HikesFilter yearList={yearList} filteredYear={filteredYear} onFilterYear={filterYearHandler} />
			<HikesChart items={filteredHikes}/>
			<HikesList items={filteredHikes} />
		</Card>
	);
};

Hikes.propTypes = {
	hikes: PropTypes.array
};

export default Hikes;