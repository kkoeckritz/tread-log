import { useState } from "react";
import Hikes from "./components/Hikes/Hikes";
import NewHike from "./components/NewHike/NewHike";

const DUMMY_HIKES = [
	{date: new Date(2019, 5, 19), title: "Deez Stepz", mileage: 10},
	{date: new Date(2020, 6, 20), title: "Deez Stepz", mileage: 10},
	{date: new Date(2021, 7, 21), title: "Deez Stepz", mileage: 10},
	{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10}
];

const App = () => {
	const [hikes, setHikes] = useState(DUMMY_HIKES);
	
	const addHikeHandler = (newHike) => {
		setHikes((prevHikes) => {
			return [newHike, ...prevHikes];
		});
	};
	
	return (
		<div>
			<NewHike onAddHike={addHikeHandler} />
			<Hikes hikes={hikes} />
		</div>
	);
};

export default App;
