import { useState } from "react";
import Hikes from "./components/Hikes/Hikes";
import NewHike from "./components/NewHike/NewHike";

const DUMMY_HIKES = [
	{date: new Date(Date.now()), title: "Wily Plains", mileage: 10, id: "a1"},
	{date: new Date(2022, 8, 10), title: "Ruined Valley", mileage: 10, id: "a2"},
	{date: new Date(2022, 2, 14), title: "Winding Cairn", mileage: 10, id: "a3"},
	{date: new Date(2022, 1, 22), title: "Lost Meadow", mileage: 12, id: "a4"},
	{date: new Date(2021, 3, 5), title: "Lost Meadow", mileage: 4.25, id: "a5"},
	{date: new Date(2020, 6, 26), title: "Craggy Fissure", mileage: 5, id: "a6"},
	{date: new Date(2019, 1, 9), title: "Rough Canyon", mileage: 8.5, id: "a7"}
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
