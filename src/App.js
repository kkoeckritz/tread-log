import Hikes from "./components/Hikes/Hikes";
import NewHike from "./components/NewHike/NewHike";

const App = () => {
	const hikes = [
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10},
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10},
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10},
		{date: new Date(Date.now()), title: "Deez Stepz", mileage: 10}
	];
	
	const addHikeHandler = (newHike) => {
		const stringy = JSON.stringify(newHike);
		console.log(`App.js: ${stringy}`);
	};
	
	return (
		<div>
			<NewHike onAddHike={addHikeHandler} />
			<Hikes hikes={hikes} />
		</div>
	);
};

export default App;
