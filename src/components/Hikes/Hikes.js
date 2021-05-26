import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import HikesFilter from "../HikesFilter/HikesFilter";
import HikeItem from "./HikeItem";
import "./Hikes.css";

const Hikes = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterYearHandler = (chosenYear) => {
		setFilteredYear(chosenYear);
		console.log(chosenYear);
	};
	
	return (
		<Card className="hikes">
			<HikesFilter filteredYear={filteredYear} onFilterYear={filterYearHandler} />
			<HikeItem date={props.hikes[0].date} title={props.hikes[0].title} mileage={props.hikes[0].mileage}/>
			<HikeItem date={props.hikes[1].date} title={props.hikes[1].title} mileage={props.hikes[1].mileage}/>
			<HikeItem date={props.hikes[2].date} title={props.hikes[2].title} mileage={props.hikes[2].mileage}/>
			<HikeItem date={props.hikes[3].date} title={props.hikes[3].title} mileage={props.hikes[3].mileage}/>
		</Card>
	);
};

Hikes.propTypes = {
	hikes: PropTypes.array
};

export default Hikes;