import React from "react";
import HikeItem from "./components/HikeItem";

const App = () => {
	const hikes = [
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10},
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10},
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10},
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10}
	];
	
	return (
		<div>
			<h2>Hiking Mileage Tracker</h2>
			<HikeItem date={hikes[0].date} title={hikes[0].title} mileage={hikes[0].mileage}/>
			<HikeItem date={hikes[1].date} title={hikes[1].title} mileage={hikes[1].mileage}/>
			<HikeItem date={hikes[2].date} title={hikes[2].title} mileage={hikes[2].mileage}/>
			<HikeItem date={hikes[3].date} title={hikes[3].title} mileage={hikes[3].mileage}/>
		</div>
	);
};

export default App;
